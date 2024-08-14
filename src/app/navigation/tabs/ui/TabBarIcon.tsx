import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

import { NavigationTabsEnum, useAppTheme } from '@/shared/config';
import { assertNever } from '@/shared/lib/utils/utils.ts';

type Props = {
  routeName: NavigationTabsEnum;
  focused: boolean;
  color: string;
  size: number;
};

export const TabBarIcon = ({
  routeName,
  focused,
  color,
  size,
}: Props): React.ReactNode => {
  const theme = useAppTheme();

  switch (routeName) {
    case NavigationTabsEnum.ProfileStack:
      return (
        <FontAwesome
          name={'user-circle-o'}
          size={size}
          color={focused ? theme.tabBar.colors.icon1 : color}
        />
      );
    case NavigationTabsEnum.WorkStack:
      return (
        <MaterialIcons
          name={'work'}
          size={size}
          color={focused ? theme.tabBar.colors.icon2 : color}
        />
      );
    case NavigationTabsEnum.PostStack:
      return (
        <MaterialIcons
          name={'local-fire-department'}
          size={size}
          color={focused ? theme.tabBar.colors.icon3 : color}
        />
      );
    case NavigationTabsEnum.StatisticStack:
      return (
        <FontAwesome6
          name={'chart-simple'}
          size={size}
          color={focused ? theme.tabBar.colors.icon4 : color}
        />
      );
    default:
      assertNever(routeName);
  }
};
