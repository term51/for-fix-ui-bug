import { View } from 'react-native';
import React from 'react';

import { useStyles } from './styles.ts';

export const HeaderBackground = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.outerBox} />
      <View style={styles.innerBox} />
    </View>
  );
};
