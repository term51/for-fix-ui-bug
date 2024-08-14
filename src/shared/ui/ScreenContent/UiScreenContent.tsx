import React from 'react';
import { FlexStyle } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useStyles } from './styles';

type ScreenContentProps = {
  paddingHorizontal?: FlexStyle['paddingHorizontal'];
  children: React.ReactNode;
};

export const UiScreenContent = (props: ScreenContentProps) => {
  console.log('UiScreenContent');

  const { children, paddingHorizontal } = props;
  const styles = useStyles({ paddingHorizontal });

  return (
    <KeyboardAvoidingView
      contentContainerStyle={styles.content}
      keyboardVerticalOffset={100}
      behavior={'padding'}
      style={styles.container}>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </KeyboardAvoidingView>
  );
};
