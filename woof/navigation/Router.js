import { createRouter } from '@expo/ex-navigation';

import MapScreen from '../screens/MapScreen';
import Friends_ListScreen from '../screens/Friends_ListScreen';
import ProfileScreen from '../screens/ProfileScreen';
import QrcodeScreen from '../screens/QrcodeScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  Map: () => MapScreen,
  Friends_List: () => Friends_ListScreen,
  Profile: () => ProfileScreen,
  Qrcode: () => QrcodeScreen,
  rootNavigation: () => RootNavigation,
}));
