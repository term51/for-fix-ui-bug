import React from 'react';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  StatisticStackListType,
  StatisticStackEnum,
  useAppTheme,
} from '@/shared/config';
import { UiButton, UiScreenContent, UiScrollViewContainer } from '@/shared/ui';

import { useStyles } from './styles';

type Props = NativeStackScreenProps<
  StatisticStackListType,
  StatisticStackEnum.Statistics
>;

export const StatisticScreen = ({ route, navigation }: Props) => {
  const theme = useAppTheme();
  const styles = useStyles();
  console.log('- Statistic Screen');
  return (
    <UiScreenContent>
      <UiScrollViewContainer>
        <UiButton
          contentPosition={'flex-start'}
          Icon={
            <FontAwesome6
              style={styles.icon}
              name={'chart-simple'}
              size={26}
              color={theme.button.colors.textPrimary}
            />
          }
          onPress={() => {

          }}>
          {'General statistics'}
        </UiButton>
        <UiButton
          contentPosition={'flex-start'}
          Icon={
            <FontAwesome6
              style={styles.icon}
              name={'magnifying-glass-chart'}
              size={26}
              color={theme.button.colors.textPrimary}
            />
          }
          onPress={() => {

          }}>
          {'Object statistics'}
        </UiButton>
        <UiButton
          contentPosition={'flex-start'}
          onPress={() => {

          }}
          Icon={
            <FontAwesome5
              style={styles.icon}
              name={'gem'}
              size={22}
              color={theme.button.colors.textPrimary}
            />
          }>
          {'Bonuses and points'}
        </UiButton>
      </UiScrollViewContainer>
    </UiScreenContent>
  );
};
