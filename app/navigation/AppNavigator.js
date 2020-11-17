import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'
import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen'
import LoginScreen from '../screens/auth/LoginScreen'
import RegisterScreen from '../screens/auth/RegisterScreen'
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen'
import HomeScreen from '@screen/HomeScreen'
// import CareScreen from '@screen/CareScreen'
import UserScreen from '../screens/UserScreen'
import NotifiScreen from '@screen/NotificationScreen';
import UpdateUserScreen from '@screen/Users/UpdateUserScreen';
import PersonalInfo from '@screen/Users/PersonalInfoScreen';
import TinMuaScreen from '@screen/Users/TinmuaScreen'
import DanhmucScreen from '@screen/Users/DanhmucScreen'
import ChangePassScreen from '@screen/Users/ChangePassScreen';

import { SCREEN_ROUTER } from '@constant'
import R from '@R';
import * as theme from "@theme";

import {
  Image
} from "react-native";
const TabBarComponent = props => <BottomTabBar {...props} />;

const Main = createBottomTabNavigator(
  {
    [SCREEN_ROUTER.HOME]: {
      screen: HomeScreen,
      title: R.strings.home,
      navigationOptions: {
        tabBarLabel: R.strings.home,
      },
    },
    // [SCREEN_ROUTER.CARE]: {
    //   screen: CareScreen,
    //   title: R.strings.care,
    //   navigationOptions: {
    //     tabBarLabel: R.strings.care,
    //   },
    // },
    [SCREEN_ROUTER.NOTIFY]: {
      screen: NotifiScreen,
      title: R.strings.notification,
      navigationOptions: {
        tabBarLabel: R.strings.notification,
      },
    },
    [SCREEN_ROUTER.USER]: {
      screen: UserScreen,
      title: R.strings.user,
      navigationOptions: {
        tabBarLabel: R.strings.user,
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeBackgroundColor: theme.colors.bottombarBg,
      inactiveBackgroundColor: theme.colors.bottombarBg,
      inactiveTintColor: theme.colors.inactive,
      activeTintColor: theme.colors.active,
    },
    tabBarComponent: props => {
      return (
        <TabBarComponent
          {...props}
          onTabPress={props.onTabPress}
          style={{
            borderTopColor: theme.colors.borderTopColor,
            backgroundColor: theme.colors.primary,
            height: 58,
          }}
        />
      );
    },
    initialRouteName: 'User'
  }

)
const App = createStackNavigator(
  {
    [SCREEN_ROUTER.MAIN]: Main,
    [SCREEN_ROUTER.USER]: UserScreen,
    [SCREEN_ROUTER.UPDATE_USER_INFO]: UpdateUserScreen,
    [SCREEN_ROUTER.PERSONALINFO]: PersonalInfo,
    [SCREEN_ROUTER.TINMUA]: TinMuaScreen,
    [SCREEN_ROUTER.CHANGEPASS]: ChangePassScreen,
    [SCREEN_ROUTER.DANHMUC]: DanhmucScreen,


  },
  {
    headerMode: 'none'
  }
);

const Auth = createStackNavigator({
  [SCREEN_ROUTER.LOGIN]: LoginScreen,
  [SCREEN_ROUTER.REGISTER]: RegisterScreen,
  [SCREEN_ROUTER.FORGOT_PASS]: ForgotPasswordScreen,
}, {
  headerMode: 'none',
})


const tabbarIcons = {
  [SCREEN_ROUTER.HOME]: R.images.icon_home,
  [SCREEN_ROUTER.CARE]: R.images.ic_user,
  [SCREEN_ROUTER.NOTIFY]: R.images.ic_notifications,
  [SCREEN_ROUTER.USER]: R.images.ic_user,
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  const iconSource = tabbarIcons[routeName] || R.images.home;
  const iconSize = focused ? 25 : 22;
  return (
    <Image
      source={iconSource}
      fadeDuration={0}
      style={{ tintColor: tintColor, width: iconSize, height: iconSize }}
    />
  );
};




export default createAppContainer(
  createSwitchNavigator({
    [SCREEN_ROUTER.AUTH_LOADING]: AuthLoadingScreen,
    [SCREEN_ROUTER.AUTH]: Auth,
    [SCREEN_ROUTER.MAIN]: App
  },
    {
      initialRouteName: SCREEN_ROUTER.AUTH_LOADING
    }
  )
)
