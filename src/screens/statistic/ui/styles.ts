import { useAppTheme } from '@/shared/config';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const theme = useAppTheme();

  return StyleSheet.create({ icon: { width: 34 } });
};
