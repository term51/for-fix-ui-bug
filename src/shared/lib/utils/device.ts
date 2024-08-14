import { Dimensions, Platform } from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const isWeb = Platform.OS === 'web';

export let deviceWidth = Dimensions.get('window').width;
export let deviceHeight = Dimensions.get('window').height;

Dimensions.addEventListener('change', ({ window }) => {
  deviceWidth = window.width;
  deviceHeight = window.height;
});
