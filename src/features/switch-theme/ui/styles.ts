import { StyleSheet } from 'react-native';
import { useAppTheme } from '@/shared/config';

export const useStyles = () => {
  const theme = useAppTheme();

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      color: theme.text.colors.primary,
      fontSize: theme.font.sizeX,
      flex: 1,
    },
  });
};
