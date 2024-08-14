import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PostStackEnum, PostStackListType, useAppTheme } from '@/shared/config';
import { PostsListScreen } from '@/screens/posts-list';

import { HeaderBackground } from './ui/HeaderBackground';
import { ScreenImportsType } from './model/types';

const screenImports: ScreenImportsType<PostStackEnum> = {
  [PostStackEnum.PostsList]: PostsListScreen,
};

const PostStack = createNativeStackNavigator<PostStackListType>();

export function PostStackScreens() {
  console.log('- - Post Stack');

  const theme = useAppTheme();

  return (
    <PostStack.Navigator
      screenOptions={{
        animation: 'ios',
        headerBackground: HeaderBackground,
        statusBarColor: theme.colors.accent1,
        headerTitleAlign: theme.header.titleAlign,
        contentStyle: { backgroundColor: theme.layout.colors.background },
        headerTintColor: theme.header.colors.tint,
      }}>
      {Object.values(PostStackEnum).map(key => {
        return (
          <PostStack.Screen
            key={key}
            options={{ headerTitle: `screens.${key}` }}
            name={key}
            component={screenImports[key]}
          />
        );
      })}
    </PostStack.Navigator>
  );
}
