import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  ProfileStackEnum,
  ProfileStackListType,
  useAppTheme,
} from '@/shared/config';
import { ProfileScreen } from '@/screens/profile';
import { PersonalDataScreen } from '@/screens/personal-data';
import { OnlinePortfolioScreen } from '@/screens/online-portfolio';
import { TypesOfWorksScreen } from '@/screens/types-of-works';
import { PricingPoliciesScreen } from '@/screens/pricing-policies';
import { UsedMaterialsScreen } from '@/screens/used-materials';
import { ListOfCalculatorsScreen } from '@/screens/list-of-calculators';
import { PricingPoliciesListScreen } from '@/screens/pricing-policies-list';
import { UsedMaterialsListScreen } from '@/screens/used-materials-list';
import { CalculatorEditorScreen } from '@/screens/calculator-editor';

import { HeaderBackground } from './ui/HeaderBackground';
import { ScreenImportsType } from './model/types.ts';

const screenImports: ScreenImportsType<ProfileStackEnum> = {
  [ProfileStackEnum.Profile]: ProfileScreen,
  // [ProfileStackEnum.PersonalData]: PersonalDataScreen,
  // [ProfileStackEnum.OnlinePortfolio]: OnlinePortfolioScreen,
  // [ProfileStackEnum.TypesOfWorks]: TypesOfWorksScreen,
  // [ProfileStackEnum.PricingPoliciesList]: PricingPoliciesListScreen,
  // [ProfileStackEnum.PricingPolicies]: PricingPoliciesScreen,
  // [ProfileStackEnum.UsedMaterialsList]: UsedMaterialsListScreen,
  // [ProfileStackEnum.UsedMaterials]: UsedMaterialsScreen,
  // [ProfileStackEnum.ListOfCalculators]: ListOfCalculatorsScreen,
  // [ProfileStackEnum.CalculatorEditor]: CalculatorEditorScreen,
};
const ProfileStack = createNativeStackNavigator<ProfileStackListType>();

export function ProfileStackScreens() {
  console.log('- - Profile Stack');

  const theme = useAppTheme();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        animation: 'ios',
        headerBackground: HeaderBackground,
        statusBarColor: theme.colors.accent1,
        headerTitleAlign: theme.header.titleAlign,
        contentStyle: { backgroundColor: theme.layout.colors.background },
        headerTintColor: theme.header.colors.tint,
      }}>
      {Object.values(ProfileStackEnum).map(key => {
        return (
          <ProfileStack.Screen
            key={key}
            options={{ headerTitle: `screens.${key}` }}
            name={key}
            component={screenImports[key]}
          />
        );
      })}
    </ProfileStack.Navigator>
  );
}
