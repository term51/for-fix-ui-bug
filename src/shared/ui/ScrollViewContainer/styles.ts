import { StyleSheet } from 'react-native';
import { useAppTheme } from '@/shared/config';

export const useStyles = () => {
  const theme = useAppTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      gap: 30,
    },
  });
};
