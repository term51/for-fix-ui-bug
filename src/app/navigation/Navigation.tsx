import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { RootTabs } from './tabs/RootTabs';

export function Navigation() {
  return (
    <NavigationContainer>
      <RootTabs />
    </NavigationContainer>
  );
}
