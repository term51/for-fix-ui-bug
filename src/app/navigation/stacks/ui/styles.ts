import { StyleSheet } from 'react-native';

import { useAppTheme } from '@/shared/config';

export const useStyles = () => {
  const theme = useAppTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.layout.colors.background,
      position: 'relative',
    },
    outerBox: {
      alignSelf: 'center',
      backgroundColor: 'rgba(67, 45, 254, .2)',
      borderBottomLeftRadius: 45,
      borderBottomRightRadius: 45,
      width: '95%',
      height: '97%',
      elevation: 5,
      zIndex: 0,
    },
    innerBox: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 6,
      right: 0,
      backgroundColor: theme.button.colors.primary,
      borderBottomLeftRadius: 55,
      borderBottomRightRadius: 55,
      zIndex: 1,
    },
  });
};
