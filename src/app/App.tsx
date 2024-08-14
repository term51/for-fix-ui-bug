import React from 'react';
import { PaperProvider, Portal } from 'react-native-paper';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import { Navigation } from '@/app/navigation';
import {
  darkTheme,
} from '@/shared/config';


function App(): React.JSX.Element {


  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <KeyboardProvider >
        <PaperProvider theme={darkTheme}>
              <Portal.Host>
                <Navigation />
              </Portal.Host>
        </PaperProvider>
      </KeyboardProvider>
    </SafeAreaProvider>
  );
}

export default App;
