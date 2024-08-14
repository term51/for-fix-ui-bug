import React from 'react';
import { Text } from 'react-native';
import { LabelPosition } from '@react-navigation/bottom-tabs/lib/typescript/src/types';

import { NavigationTabsEnum } from '@/shared/config';

import { useStyles } from './styles';
import {assertNever} from '@/shared/lib/utils/utils.ts';

type Props = {
  routeName: NavigationTabsEnum;
  focused: boolean;
  color: string;
  position: LabelPosition;
  children: string;
};

export const TabBarLabel = ({ routeName, focused }: Props): React.ReactNode => {
  const styles = useStyles(focused);

  switch (routeName) {
    case NavigationTabsEnum.ProfileStack:
      return (
        <Text style={styles.label}>
          {`screens.${NavigationTabsEnum.ProfileStack}`}
        </Text>
      );
    case NavigationTabsEnum.WorkStack:
      return (
        <Text style={styles.label}>
          {`screens.${NavigationTabsEnum.WorkStack}`}
        </Text>
      );
    case NavigationTabsEnum.PostStack:
      return (
        <Text style={styles.label}>
          {`screens.${NavigationTabsEnum.PostStack}`}
        </Text>
      );
    case NavigationTabsEnum.StatisticStack:
      return (
        <Text style={styles.label}>
          {`screens.${NavigationTabsEnum.StatisticStack}`}
        </Text>
      );
    default:
      assertNever(routeName);
  }
};
