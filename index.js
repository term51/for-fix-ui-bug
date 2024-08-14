import { AppRegistry } from 'react-native';
import 'intl-pluralrules';

import App from '@/app/App';
import { name as appName } from './app.json';

import '@/shared/config';

AppRegistry.registerComponent(appName, () => App);
