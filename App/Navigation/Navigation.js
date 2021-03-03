import * as React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../Screens/Login'
import TabNav from './Tabnavigator'

const Loginstack = createStackNavigator({
  Login: { screen: Login }
},
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerShown: false,
    }
  }
);

const RootStack = createSwitchNavigator(
  {
    LoginPage: Loginstack,
    TabScreen: TabNav,
  },
  {
    initialRouteName: 'LoginPage',
    defaultNavigationOptions: {
      headerShown: false


    }

  },
);


const App = createAppContainer(RootStack)
const MainApp = () => <App/>;
export default MainApp;



