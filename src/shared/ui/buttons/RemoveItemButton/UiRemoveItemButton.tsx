import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableRipple } from 'react-native-paper';
import React from 'react';

import { useStyles } from './styles.ts';
import { useAppTheme } from '@/shared/config';
import {
  GestureResponderEvent,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

type Props = {
  styles?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
};

export const UiRemoveItemButton = ({ onPress, styles }: Props) => {
  const localStyles = useStyles();
  const theme = useAppTheme();
  return (
    <TouchableRipple
      onPress={onPress}
      rippleColor="rgba(0, 0, 0, .32)"
      style={[localStyles.deleteIconWrapper, styles]}>
      <FontAwesome name={'remove'} color={theme.colors.red} size={22} />
    </TouchableRipple>
  );
};
