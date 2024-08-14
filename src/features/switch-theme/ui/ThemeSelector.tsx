import React, {useState} from 'react';
import { Switch } from 'react-native-paper';
import { Text, View } from 'react-native';

import { ThemeModeEnum, useAppTheme } from '@/shared/config';
import { useStyles } from './styles';

export const ThemeSelector = () => {

  const theme = useAppTheme();
  const [isSwitchOnDark, setIsSwitchOnDark] = useState(true);
  const styles = useStyles();



  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'theme'}</Text>
      <Switch
        value={isSwitchOnDark}
        color={theme.colors.accent1}
      />
    </View>
  );
};
