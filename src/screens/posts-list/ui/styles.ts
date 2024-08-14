import { StyleSheet } from 'react-native';
import { useAppTheme } from '@/shared/config';

export const useStyles = () => {
  const theme = useAppTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardContainer: {
      backgroundColor: theme.colors.white,
      width: '48%',
    },
    image: {
      height: 116,
    },
    titleContainer: {
      flex: 1,
      minHeight: 80,
      paddingVertical: 10,
    },
    titleText: {
      fontSize: theme.font.sizeS,
      fontWeight: theme.font.weightX,
      textAlign: 'left',
      color: theme.colors.black,
    },
    subtitleText: {
      marginTop: 10,
      fontSize: theme.font.sizeS,
      fontWeight: theme.font.weightS,
      color: theme.colors.black,
      textAlign: 'left',
    },
    actionContainer: {
      bottom: 0,
      flex: 1,
      padding: 5,
    },
  });
};
