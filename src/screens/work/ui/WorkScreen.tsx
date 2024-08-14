import React from 'react';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { useAppTheme, WorkStackEnum, WorkStackListType } from '@/shared/config';
import { UiButton, UiScreenContent, UiScrollViewContainer } from '@/shared/ui';

import { useStyles } from './styles';

type Props = NativeStackScreenProps<WorkStackListType, WorkStackEnum.Work>;

export const WorkScreen = ({ route, navigation }: Props) => {
  const theme = useAppTheme();
  const styles = useStyles();
  console.log('- WorkScreen');
  return (
    <UiScreenContent>
      <UiScrollViewContainer>
        <UiButton
          contentPosition={'flex-start'}
          Icon={
            <FontAwesome5
              style={styles.icon}
              name={'plus'}
              size={26}
              color={theme.button.colors.textPrimary}
            />
          }
          onPress={() => {
            navigation.navigate(WorkStackEnum.CreateObject);
          }}>
          {'Create an object'}
        </UiButton>
        <UiButton
          contentPosition={'flex-start'}
          Icon={
            <FontAwesome5
              style={styles.icon}
              name={'toolbox'}
              size={26}
              color={theme.button.colors.textPrimary}
            />
          }
          onPress={() => {
            navigation.navigate(WorkStackEnum.InWork);
          }}>
          {'In work'}
        </UiButton>
        <UiButton
          contentPosition={'flex-start'}
          onPress={() => {
            navigation.navigate(WorkStackEnum.ObjectsHistory);
          }}
          Icon={
            <FontAwesome5
              style={styles.icon}
              name={'history'}
              size={26}
              color={theme.button.colors.textPrimary}
            />
          }>
          {'Objects history'}
        </UiButton>
        <UiButton
          contentPosition={'flex-start'}
          onPress={() => {
            navigation.navigate(WorkStackEnum.DeliveryRequestList);
          }}
          Icon={
            <FontAwesome
              style={styles.icon}
              name={'truck'}
              size={28}
              color={theme.button.colors.textPrimary}
            />
          }>
          {'Delivery request list'}
        </UiButton>
        <UiButton
          contentPosition={'flex-start'}
          onPress={() => {
            navigation.navigate(WorkStackEnum.Users);
          }}
          colorType={'yellow'}
          Icon={
            <FontAwesome5
              style={styles.icon}
              name={'users'}
              size={25}
              color={theme.button.colors.textPrimary}
            />
          }>
          {'Users'}
        </UiButton>
        <UiButton
          contentPosition={'flex-start'}
          onPress={() => {
            navigation.navigate(WorkStackEnum.GeneralPriceRange);
          }}
          colorType={'yellow'}
          Icon={
            <FontAwesome
              style={styles.icon}
              name={'dollar'}
              size={26}
              color={theme.button.colors.textPrimary}
            />
          }>
          {'General price range'}
        </UiButton>
      </UiScrollViewContainer>
    </UiScreenContent>
  );
};
