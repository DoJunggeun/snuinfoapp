// import React from 'react';
// import { ScrollView, TextInput, StyleSheet, Text, View } from 'react-native';
// import { WebView } from 'react-native-webview';
// import { getStatusBarHeight } from 'react-native-status-bar-height';
// import {createAppContainer} from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

// import {createStackNavigator } from 'react-navigation-stack';
// import Home from './Home';
// import Shuttle from './Shuttle';
// import Meal from './Meal';
// import Cafe from './Cafe';
// import Mart from './Mart';

// const TabNavigation = createBottomTabNavigator(
//     {
//       Home:Home,
//       Shuttle:Shuttle,
//       Meal:Meal,
//       Cafe:Cafe,
//       Mart:Mart
//     }
// );

// TabNavigation.navigationOptions = ({ navigation }) => {
//     let tabBarVisible;
//     navigation.state.routes.map(route => {
//         if (route.routeName === "Home") {
//           tabBarVisible = false;
//         } else {
//           tabBarVisible = true;
//         }  
//     })
//     return tabBarVisible;
// }
  
// export default createAppContainer(TabNavigation);