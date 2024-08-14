import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';
import { useNavigation } from '@react-navigation/native';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

import { navigateToScreen } from '@/shared/lib/utils/utils';
import {
  NavigationTabsEnum,
  PostStackEnum,
  ProfileStackEnum,
  StatisticStackEnum,
  WorkStackEnum,
} from '@/shared/config';

const getScreenNameFromRouteName = (routeName: NavigationTabsEnum) => {
  switch (routeName) {
    case NavigationTabsEnum.ProfileStack:
      return ProfileStackEnum.Profile;
    case NavigationTabsEnum.WorkStack:
      return WorkStackEnum.Work;
    case NavigationTabsEnum.PostStack:
      return PostStackEnum.PostsList;
    case NavigationTabsEnum.StatisticStack:
      return StatisticStackEnum.Statistics;
  }
};

type Props = {
  props: BottomTabBarButtonProps;
  routeName: NavigationTabsEnum;
};

// TODO: remove after finish developing

export const TabBarButton = ({ props, routeName }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<any, any>>();

  return (
    <TouchableWithoutFeedback
      onLongPress={() => {
        navigateToScreen({
          navigationTab: routeName,
          screenName: getScreenNameFromRouteName(routeName),
          navigation,
        });
      }}
      onPress={props.onPress}>
      <View {...props}>{props.children}</View>
    </TouchableWithoutFeedback>
  );
};
