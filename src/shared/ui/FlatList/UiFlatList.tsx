import { FlatList, View, FlatListProps } from 'react-native';
import React from 'react';

import { useStyles } from './styles.ts';

export const UiFlatList = <T extends { id: string }>({
  ...rest
}: FlatListProps<T>) => {
  console.log('UiFlatList');

  const styles = useStyles();

  return (
    <View style={styles.container}>
      <FlatList
        columnWrapperStyle={styles.columnWrapper}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        {...rest}
      />
    </View>
  );
};
