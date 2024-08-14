import { useAppTheme } from '@/shared/config';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const theme = useAppTheme();

  return StyleSheet.create({
    icon: { width: 34 },
    surfaceWrapper: {
      borderRadius: 10,
      padding: 25,
      gap: 30,
    },
    surfaceTitle: {
      color: theme.text.colors.primary,
      position: 'absolute',
      fontSize: theme.font.sizeS,
      left: 15,
      top: -15,
      backgroundColor: theme.layout.colors.background,
      paddingHorizontal: 6,
      paddingVertical: 3,
      borderRadius: 10,
    },
  });
};
