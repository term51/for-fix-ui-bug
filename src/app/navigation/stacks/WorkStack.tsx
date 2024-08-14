import React, { lazy } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { WorkStackEnum, useAppTheme, WorkStackListType } from '@/shared/config';

import { HeaderBackground } from './ui/HeaderBackground';
import { ScreenImportsLazyType } from './model/types';

const screenImports: ScreenImportsLazyType<WorkStackEnum> = {
  [WorkStackEnum.Work]: () => import('@/screens/work'),
};

const WorkStack = createNativeStackNavigator<WorkStackListType>();

export function WorkStackScreens() {
  console.log('- - Work Stack');

  const theme = useAppTheme();

  return (
    <WorkStack.Navigator
      screenOptions={{
        animation: 'ios',
        headerBackground: HeaderBackground,
        statusBarColor: theme.colors.accent1,
        headerTitleAlign: theme.header.titleAlign,
        contentStyle: { backgroundColor: theme.layout.colors.background },
        headerTintColor: theme.header.colors.tint,
      }}>
      {Object.values(WorkStackEnum).map(key => {
        return (
          <WorkStack.Screen
            key={key}
            options={{ headerTitle: `screens.${key}` }}
            name={key}
            component={lazy(screenImports[key])}
          />
        );
      })}
    </WorkStack.Navigator>
  );
}
