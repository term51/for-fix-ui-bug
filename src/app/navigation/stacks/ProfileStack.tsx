import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  ProfileStackEnum,
  ProfileStackListType,
  useAppTheme,
} from '@/shared/config';
import { ProfileScreen } from '@/screens/profile';

import { HeaderBackground } from './ui/HeaderBackground';
import { ScreenImportsType } from './model/types.ts';

const screenImports: ScreenImportsType<ProfileStackEnum> = {
  [ProfileStackEnum.Profile]: ProfileScreen,
};
const ProfileStack = createNativeStackNavigator<ProfileStackListType>();

export function ProfileStackScreens() {
  console.log('- - Profile Stack');

  const theme = useAppTheme();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        animation: 'ios',
        headerBackground: HeaderBackground,
        statusBarColor: theme.colors.accent1,
        headerTitleAlign: theme.header.titleAlign,
        contentStyle: { backgroundColor: theme.layout.colors.background },
        headerTintColor: theme.header.colors.tint,
      }}>
      {Object.values(ProfileStackEnum).map(key => {
        return (
          <ProfileStack.Screen
            key={key}
            options={{ headerTitle: `screens.${key}` }}
            name={key}
            component={screenImports[key]}
          />
        );
      })}
    </ProfileStack.Navigator>
  );
}
