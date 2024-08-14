import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import {
  NavigationTabsListType,
  NavigationTabsEnum,
  useAppTheme,
} from '@/shared/config';
import { ProfileStackScreens } from '@/app/navigation/stacks/ProfileStack';
import { WorkStackScreens } from '@/app/navigation/stacks/WorkStack';
import { PostStackScreens } from '@/app/navigation/stacks/PostStack';
import { StatisticStackScreens } from '@/app/navigation/stacks/StatisticStack';

import { useStyles } from './ui/styles';
import { TabBarLabel } from './ui/TabBarLabel';
import { TabBarIcon } from './ui/TabBarIcon';
import { TabBarButton } from './ui/TabBarButton';

const Tab = createBottomTabNavigator<NavigationTabsListType>();

export function RootTabs() {
  const styles = useStyles();
  const theme = useAppTheme();
  console.log('RootTabs');
  return (
    <Tab.Navigator
      detachInactiveScreens={true}
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        tabBarIcon: props =>
          TabBarIcon({ routeName: route.name, ...props, size: 30 }),
        tabBarIconStyle: styles.icon,
        tabBarItemStyle: styles.item,
        tabBarLabelStyle: styles.label,
        tabBarActiveTintColor: theme.tabBar.colors.tint,
        tabBarStyle: styles.tabBar,
        tabBarBadgeStyle: styles.tabBarBadge,
        tabBarLabel: props => TabBarLabel({ routeName: route.name, ...props }),
        tabBarButton: props => TabBarButton({ props, routeName: route.name }),
      })}>
      <Tab.Screen
        options={{
          lazy: true,
        }}
        name={NavigationTabsEnum.ProfileStack}
        component={ProfileStackScreens}
      />
      <Tab.Screen
        options={{ lazy: true }}
        name={NavigationTabsEnum.WorkStack}
        component={WorkStackScreens}
      />
      <Tab.Screen
        options={{ lazy: true }}
        name={NavigationTabsEnum.PostStack}
        component={PostStackScreens}
      />
      <Tab.Screen
        options={{ lazy: true }}
        name={NavigationTabsEnum.StatisticStack}
        component={StatisticStackScreens}
      />
    </Tab.Navigator>
  );
}
