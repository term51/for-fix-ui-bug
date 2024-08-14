import { FlexStyle, StyleSheet } from 'react-native';
import { useAppTheme } from '@/shared/config';

type Props = {
  paddingHorizontal?: FlexStyle['paddingHorizontal'];
};

export const useStyles = (props?: Props) => {
  const { paddingHorizontal = '5%' } = props || {};
  const theme = useAppTheme();

  return StyleSheet.create({
    content: {
      flex: 1,
    },
    container: {
      flex: 1,
      paddingVertical: 10,
      paddingHorizontal: paddingHorizontal,
    },
  });
};
