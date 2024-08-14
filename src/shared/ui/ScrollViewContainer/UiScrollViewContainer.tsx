import { ScrollView, ScrollViewProps, View } from 'react-native';
import React from 'react';

import { useStyles } from './styles.ts';

export const UiScrollViewContainer = ({
  showsVerticalScrollIndicator = false,
  children,
}: ScrollViewProps) => {
  console.log('UiScrollViewContainer');
  const styles = useStyles();

  return (
    <ScrollView showsVerticalScrollIndicator={showsVerticalScrollIndicator}>
      <View style={styles.container}>{children}</View>
    </ScrollView>
  );
};
