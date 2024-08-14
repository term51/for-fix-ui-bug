import { StyleSheet } from 'react-native';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
    columnWrapper: {
      flex: 1,
      justifyContent: 'space-between',
      margin: 0,
      padding: 5,
      marginBottom: 5,
    },
  });
};
