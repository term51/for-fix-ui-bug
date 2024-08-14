import React from 'react';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  ProfileStackEnum,
  ProfileStackListType,
  useAppTheme,

} from '@/shared/config';
import { UiButton, UiScreenContent, UiScrollViewContainer } from '@/shared/ui';

import { useStyles } from './styles';

type Props = NativeStackScreenProps<
  ProfileStackListType,
  ProfileStackEnum.Profile
>;

export const ProfileScreen = ({ route, navigation }: Props) => {
  console.log('- ProfileScreen');

  const theme = useAppTheme();
  const styles = useStyles();

  return (
    <UiScreenContent>
      <UiScrollViewContainer>
        <UiButton
          contentPosition={'flex-start'}
          Icon={
            <Ionicons
              style={styles.icon}
              name={'person-circle-outline'}
              size={30}
              color={theme.button.colors.textPrimary}
            />
          }
          onPress={() => {
          }}>
          {'Personal Information'}
        </UiButton>
        <UiButton
          contentPosition={'flex-start'}
          Icon={
            <AntDesign
              style={styles.icon}
              name={'earth'}
              size={25}
              color={theme.button.colors.textPrimary}
            />
          }
          onPress={() => {

          }}>
          {'Online Portfolio'}
        </UiButton>
        <UiButton
          contentPosition={'flex-start'}
          onPress={() => {

          }}
          Icon={
            <FontAwesome5
              style={styles.icon}
              name={'tools'}
              size={25}
              color={theme.button.colors.textPrimary}
            />
          }>
          {'Types of work'}
        </UiButton>
        <UiButton
          contentPosition={'flex-start'}
          onPress={() => {

          }}
          Icon={
            <FontAwesome
              style={styles.icon}
              name={'dollar'}
              size={26}
              color={theme.button.colors.textPrimary}
            />
          }>
          {'Pricing Policy'}
        </UiButton>
        <UiButton
          contentPosition={'flex-start'}
          onPress={() => {

          }}
          Icon={
            <MaterialIcons
              style={styles.icon}
              name={'shopping-cart'}
              size={30}
              color={theme.button.colors.textPrimary}
            />
          }>
          {'Used materials'}
        </UiButton>
        <UiButton
          contentPosition={'flex-start'}
          onPress={() => {

          }}
          Icon={
            <Ionicons
              style={styles.icon}
              name={'calculator'}
              size={30}
              color={theme.button.colors.textPrimary}
            />
          }>
          {'Calculators'}
        </UiButton>
        <UiButton
          colorType={'red'}
          contentPosition={'flex-start'}
          onPress={() => {

          }}
          Icon={
            <Ionicons
              style={styles.icon}
              name={'exit-outline'}
              size={30}
              color={theme.button.colors.textPrimary}
            />
          }>
          {'Log Out'}
        </UiButton>
      </UiScrollViewContainer>
    </UiScreenContent>
  );
};
