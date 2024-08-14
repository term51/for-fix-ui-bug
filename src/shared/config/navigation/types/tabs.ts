export enum NavigationTabsEnum {
  ProfileStack = 'ProfileStack',
  WorkStack = 'WorkStack',
  PostStack = 'PostStack',
  StatisticStack = 'StatisticStack',
}

export type NavigationTabsListType = {
  [NavigationTabsEnum.ProfileStack]: undefined;
  [NavigationTabsEnum.WorkStack]: undefined;
  [NavigationTabsEnum.PostStack]: undefined;
  [NavigationTabsEnum.StatisticStack]: undefined;
};
