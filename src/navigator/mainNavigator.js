import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfCopyOfBlankScreen09722Navigator from '../features/CopyOfCopyOfBlankScreen09722/navigator';
import CopyOfBlankScreen09721Navigator from '../features/CopyOfBlankScreen09721/navigator';
import CopyOfBlankScreen09720Navigator from '../features/CopyOfBlankScreen09720/navigator';
import BlankScreen09719Navigator from '../features/BlankScreen09719/navigator';
import CopyOfBlankScreen09718Navigator from '../features/CopyOfBlankScreen09718/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfCopyOfBlankScreen09722: { screen: CopyOfCopyOfBlankScreen09722Navigator },
CopyOfBlankScreen09721: { screen: CopyOfBlankScreen09721Navigator },
CopyOfBlankScreen09720: { screen: CopyOfBlankScreen09720Navigator },
BlankScreen09719: { screen: BlankScreen09719Navigator },
CopyOfBlankScreen09718: { screen: CopyOfBlankScreen09718Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
