import { StyleSheet } from 'react-native';
import { useAppTheme } from '@/shared/config';

type Props = {};

export const useStyles = () => {
  const theme = useAppTheme();

  return StyleSheet.create({
    deleteIconWrapper: {
      width: theme.accordion.width,
      height: theme.accordion.height,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};
