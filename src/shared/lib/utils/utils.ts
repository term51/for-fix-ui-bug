import { CommonActions } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

import {
  NavigationTabsEnum,
  PostStackEnum,
  ProfileStackEnum,
  StatisticStackEnum,
  WorkStackEnum,
} from '@/shared/config';

export const assertNever = (value: never): never => {
  throw new Error(`Unexpected value ${value}`);
};

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

export const isDefined = <T>(value: T | undefined): value is T => {
  return typeof value !== 'undefined';
};

export const navigateToScreen = ({
  navigationTab,
  screenName,
  navigation,
  params,
}: {
  navigationTab: NavigationTabsEnum;
  screenName:
    | ProfileStackEnum
    | WorkStackEnum
    | PostStackEnum
    | StatisticStackEnum;
  navigation: NativeStackNavigationProp<any, any>;
  params?: any;
}) => {
  let screenParams = {};
  if (params) {
    screenParams = params;
  }
  const action = CommonActions.navigate({
    name: navigationTab,
    params: {
      params: {
        ...screenParams,
      },
      screen: screenName,
    },
  });

  navigation.dispatch(action);
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
export const executeWithDelay = async (
  functions: Function[],
  delayMs = 0,
) => {
  for (const func of functions) {
    func();
    await delay(delayMs);
  }
};
