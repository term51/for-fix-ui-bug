import React from 'react';
import { Button, ButtonProps } from 'react-native-paper';

import { useStyles } from './styles.ts';
import { FlexStyle } from 'react-native';

type Props = {
  Icon?: React.ReactNode;
  colorType?: 'yellow' | 'green' | 'darkGreen' | 'red' | 'gray' | 'darkGray';
  paddingHorizontal?: FlexStyle['paddingHorizontal'];
  mode?: ButtonProps['mode'];
  contentPosition?: FlexStyle['justifyContent'];
  fontSize?: number;
  size?: 'small' | 'medium' | 'large';
};

enum SizeEnum {
  small = 40,
  medium = 50,
  large = 60,
}

export const UiButton = ({
  Icon,
  colorType,
  mode = 'contained',
  contentPosition,
  paddingHorizontal,
  children,
  fontSize,
  style,
  size = 'medium',
  ...rest
}: Props & ButtonProps) => {
  const styles = useStyles({
    size: SizeEnum[size],
    paddingHorizontal,
    fontSize,
    contentPosition,
    isTextMode: mode === 'text',
    colorType,
  });

  return (
    <Button
      compact={true}
      icon={() => {
        if (Icon) {
          return Icon;
        }
      }}
      contentStyle={styles.content}
      style={[styles.container, style]}
      labelStyle={[styles.label]}
      mode={mode}
      {...rest}>
      {children}
    </Button>
  );
};
