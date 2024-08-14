import { StyleSheet } from 'react-native';

import { useAppTheme } from '@/shared/config';

export const useStyles = (focused?: boolean) => {
  const theme = useAppTheme();

  return StyleSheet.create({
    tabBar: {
      height: 80,
    },
    tabBarBadge: {
      position: 'absolute',
      top: -5,
      left: '50%',
    },
    icon: {
      height: 40,
      width: 40,
      flex: 0,
    },
    label: {
      fontSize: theme.font.sizeM,
      color: focused ? theme.text.colors.primary : theme.colors.gray,
    },
    item: {
      backgroundColor: theme.tabBar.colors.background,
      justifyContent: 'center',
    },
  });
};
