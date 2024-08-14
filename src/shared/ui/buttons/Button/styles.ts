import { FlexStyle, StyleSheet } from 'react-native';

import { useAppTheme } from '@/shared/config';

type Props = {
  fontSize?: number;
  contentPosition?: FlexStyle['justifyContent'];
  paddingHorizontal?: FlexStyle['paddingHorizontal'];
  colorType?: 'yellow' | 'green' | 'darkGreen' | 'red' | 'darkGray' | 'gray';
  isTextMode?: boolean;
  size?: number;
};

const colorsWithBlackFont = ['gray', 'green'];

export const useStyles = ({
  contentPosition = 'center',
  colorType,
  size,
  paddingHorizontal = '5%',
  isTextMode = false,
  fontSize,
}: Props) => {
  const theme = useAppTheme();

  const btnSize = size || theme.button.height;

  const textColor = (): string => {
    if (colorType && colorsWithBlackFont.includes(colorType)) {
      return theme.colors.black;
    }
    if (isTextMode) {
      return theme.button.colors.textSecondary;
    }
    return theme.button.colors.textPrimary;
  };

  return StyleSheet.create({
    content: {
      height: btnSize,
      justifyContent: contentPosition,
      paddingHorizontal: paddingHorizontal,
      marginLeft: -10,
    },
    container: {
      borderRadius: theme.button.borderRadius,
      height: btnSize,
      backgroundColor: isTextMode
        ? undefined
        : colorType
        ? theme.colors[colorType]
        : theme.button.colors.primary,
    },
    label: {
      fontSize: fontSize || theme.font.sizeX,
      color: textColor(),
    },
  });
};
