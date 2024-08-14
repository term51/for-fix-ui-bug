import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  StatisticStackListType,
  StatisticStackEnum,
  useAppTheme,
} from '@/shared/config';
import { StatisticScreen } from '@/screens/statistic';
import { HeaderBackground } from './ui/HeaderBackground';
import { GeneralStatisticsScreen } from '@/screens/general-statistics';
import { ObjectStatisticsScreen } from '@/screens/object-statistics';
import { BonusesAndPointsScreen } from '@/screens/bonuses-and-points';
import { ObjectStatisticsListScreen } from '@/screens/object-statistics-list';
import { ScreenImportsType } from '@/app/navigation/stacks/model/types.ts';

const screenImports: ScreenImportsType<StatisticStackEnum> = {
  [StatisticStackEnum.Statistics]: StatisticScreen,
  // [StatisticStackEnum.GeneralStatistics]: GeneralStatisticsScreen,
  // [StatisticStackEnum.ObjectStatisticsList]: ObjectStatisticsListScreen,
  // [StatisticStackEnum.ObjectStatistics]: ObjectStatisticsScreen,
  // [StatisticStackEnum.BonusesAndPoints]: BonusesAndPointsScreen,
};

const StatisticStack = createNativeStackNavigator<StatisticStackListType>();

export function StatisticStackScreens() {
  console.log('- - Statistic Stack');

  const theme = useAppTheme();

  return (
    <StatisticStack.Navigator
      screenOptions={{
        animation: 'ios',
        headerBackground: HeaderBackground,
        statusBarColor: theme.colors.accent1,
        headerTitleAlign: theme.header.titleAlign,
        contentStyle: { backgroundColor: theme.layout.colors.background },
        headerTintColor: theme.header.colors.tint,
      }}>
      {Object.values(StatisticStackEnum).map(key => {
        return (
          <StatisticStack.Screen
            key={key}
            options={{ headerTitle: `screens.${key}` }}
            name={key}
            component={screenImports[key]}
          />
        );
      })}
    </StatisticStack.Navigator>
  );
}
