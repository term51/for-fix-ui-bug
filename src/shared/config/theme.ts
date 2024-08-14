import { MD3LightTheme, MD3DarkTheme, useTheme } from 'react-native-paper';
import { Platform } from 'react-native';

export const debugStyles = {
  borderWidth: 1,
  borderColor: 'red',
};

const generalValues = {
  button: {
    borderRadius: 50,
    height: 50,
    paddingLeft: 20,
  },
  colors: {
    accent1: '#432DF4',
    white: '#fff',
    black: '#0E0F11',
    green: '#abfb56',
    darkGreen: '#45b214',
    // yellow: '#FDCD56',
    yellow: '#F89500',
    blue: '#29fcf8',
    gray: '#E4E8EB',
    darkGray: '#333333',
    red: '#FA6C51',
  },
  font: {
    sizeS: 14,
    sizeM: 16,
    sizeX: 18,
    sizeXL: 20,
    sizeXXL: 24,
    weightXS: '200' as const,
    weightS: '300' as const,
    weightM: '500' as const,
    weightX: '800' as const,
  },
};

const shadowStyle = Platform.select({
  ios: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  android: {
    elevation: 2,
  },
});

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...generalValues.colors,
  },

  layout: {
    colors: {
      background: '#eeeeee',
    },
  },
  header: {
    titleAlign: 'center' as const,
    colors: {
      tint: generalValues.colors.white,
      // background: generalValues.colors.white,
      background: generalValues.colors.accent1,
    },
  },
  text: {
    colors: {
      primary: generalValues.colors.black,
    },
  },
  input: {
    colors: {
      label: generalValues.colors.black,
      border: generalValues.colors.gray,
      background: generalValues.colors.white,
      underline: generalValues.colors.accent1,
    },
  },
  selector: {
    colors: {
      anchorIcon: generalValues.colors.white,
      text: generalValues.colors.white,
      background: generalValues.colors.accent1,
      backgroundDisabled: generalValues.colors.gray,
    },
    height: generalValues.button.height,
  },
  accordion: {
    height: 60,
    width: 40,
    colors: {
      primary: '#d6d6d6',
      primaryLight: '#e7e7e7',
      primaryLightest: '#eeeeee',
    },
  },
  checkbox: {
    color: generalValues.colors.accent1,
  },
  button: {
    paddingLeft: generalValues.button.paddingLeft,
    borderRadius: generalValues.button.borderRadius,
    height: generalValues.button.height,
    colors: {
      primary: generalValues.colors.accent1,
      primaryLight: '#432DF4',
      secondary: '#FFF',
      secondaryLight: '#FFF',
      textPrimary: '#fff',
      textSecondary: '#000000',
      borderPrimary: generalValues.colors.black,
      borderSecondary: '#C4C4C4',
    },
  },
  tabBar: {
    colors: {
      background: generalValues.colors.white,
      tint: generalValues.colors.black,
      icon1: generalValues.colors.accent1,
      icon2: generalValues.colors.black,
      icon3: generalValues.colors.red,
      icon4: generalValues.colors.darkGreen,
    },
  },
  font: generalValues.font,
  shadow: shadowStyle,
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...generalValues.colors,
  },
  layout: {
    colors: {
      background: generalValues.colors.black,
    },
  },
  header: {
    titleAlign: 'center' as const,
    colors: {
      tint: '#fff',
      // background: '#18191D',
      background: generalValues.colors.accent1,
    },
  },
  text: {
    colors: {
      primary: generalValues.colors.white,
    },
  },
  input: {
    colors: {
      label: generalValues.colors.white,
      border: generalValues.colors.accent1,
      background: generalValues.colors.black,
      underline: generalValues.colors.accent1,
    },
  },
  selector: {
    height: generalValues.button.height,
    colors: {
      anchorIcon: generalValues.colors.accent1,
      text: generalValues.colors.black,
      background: generalValues.colors.white,
      backgroundDisabled: generalValues.colors.darkGray,
    },
  },
  accordion: {
    height: 60,
    width: 40,
    colors: {
      primary: '#1f1f1f',
      primaryLight: '#292929',
      primaryLightest: '#353535',
    },
  },
  checkbox: {
    color: generalValues.colors.white,
  },
  button: {
    paddingLeft: generalValues.button.paddingLeft,
    borderRadius: generalValues.button.borderRadius,
    height: generalValues.button.height,
    colors: {
      primary: generalValues.colors.accent1,
      primaryLight: '#432DF4',
      secondary: '#000000',
      secondaryLight: '#151515',
      textPrimary: '#fff',
      textSecondary: '#fff',
      borderPrimary: '#FFFFFF',
      borderSecondary: '#3B3C3C',
    },
  },
  tabBar: {
    colors: {
      background: '#18191D',
      tint: generalValues.colors.white,
      icon1: generalValues.colors.blue,
      icon2: generalValues.colors.white,
      icon3: generalValues.colors.yellow,
      icon4: generalValues.colors.green,
    },
  },
  font: generalValues.font,
  shadow: shadowStyle,
};

type DarkThemeType = typeof darkTheme;
type LightThemeType = typeof lightTheme;

export enum ThemeModeEnum {
  light = 'light',
  dark = 'dark',
}

export const useAppTheme = () => useTheme<DarkThemeType | LightThemeType>();
