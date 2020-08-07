import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen29728Navigator from '../features/BlankScreen29728/navigator';
import CopyOfBlankScreen09727Navigator from '../features/CopyOfBlankScreen09727/navigator';
import BlankScreen09725Navigator from '../features/BlankScreen09725/navigator';
import BlankScreen29724Navigator from '../features/BlankScreen29724/navigator';
import CopyOfBlankScreen09721Navigator from '../features/CopyOfBlankScreen09721/navigator';
import CopyOfBlankScreen09720Navigator from '../features/CopyOfBlankScreen09720/navigator';
import CopyOfBlankScreen09718Navigator from '../features/CopyOfBlankScreen09718/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen29728: { screen: BlankScreen29728Navigator },
CopyOfBlankScreen09727: { screen: CopyOfBlankScreen09727Navigator },
BlankScreen09725: { screen: BlankScreen09725Navigator },
BlankScreen29724: { screen: BlankScreen29724Navigator },
CopyOfBlankScreen09721: { screen: CopyOfBlankScreen09721Navigator },
CopyOfBlankScreen09720: { screen: CopyOfBlankScreen09720Navigator },
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
