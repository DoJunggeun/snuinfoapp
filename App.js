import React, {Component} from 'react';
import { Image, ScrollView, TextInput, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {createAppContainer, withOrientation, SafeAreaView} from 'react-navigation';
import { createMaterialTopTabNavigator  } from 'react-navigation-tabs';

import {createStackNavigator } from 'react-navigation-stack';
import Home from './screen/Home';
import Shuttle from './screen/Shuttle';
import Meal from './screen/Meal';
import Cafe from './screen/Cafe';
import Mart from './screen/Mart';
import About from './screen/About';
import Etc from './screen/Etc';

const tabs = createMaterialTopTabNavigator(
  {
    Home:{
      screen:Home,
      navigationOptions: () => ({
        tabBarVisible:false,
        tabBarIcon: ({ tintColor, focused }) => (
          focused ? <View style={styles.iconbg}><Image source={require('./screen/src/home_w.png')} style={styles.icon} /></View> : <View style={styles.iconbg}><Image source={require('./screen/src/home.png')} style={styles.icon} /></View>
        ),
    }),
    },
    Meal:{
      screen:Meal,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor, focused }) => (
          focused ? <View style={styles.iconbg}><Image source={require('./screen/src/meal_w.png')} style={styles.icon} /></View> : <View style={styles.iconbg}><Image source={require('./screen/src/meal.png')} style={styles.icon} /></View>
      )}),
    },
    Mart:{
      screen:Mart,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor, focused }) => (
          focused ? <View style={styles.iconbg}><Image source={require('./screen/src/mart_w.png')} style={styles.icon} /></View> : <View style={styles.iconbg}><Image source={require('./screen/src/mart.png')} style={styles.icon} /></View>
      )}),
    },
    Cafe:{
      screen:Cafe,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor, focused }) => (
          focused ? <View style={styles.iconbg}><Image source={require('./screen/src/cafe_w.png')} style={styles.icon} /></View> : <View style={styles.iconbg}><Image source={require('./screen/src/cafe.png')} style={styles.icon} /></View>
      )}),
    },
    Shuttle:{
      screen:Shuttle,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor, focused }) => (
        focused ? <View style={styles.iconbg}><Image source={require('./screen/src/shuttle_w.png')} style={styles.icon} /></View> : <View style={styles.iconbg}><Image source={require('./screen/src/shuttle.png')} style={styles.icon} /></View>
      )}),
    }
  }, 
  {
    tabBarOptions: {
      tabStyle: {
        backgroundColor: "rgb(176,155,222)",
        height:50
      },
      showLabel: false,
      showIcon: true
    },
    swipeEnabled: true,
    tabBarPosition:'bottom',
    }

);

const Preapp = createStackNavigator({

    tabs: {
      screen:tabs
    },
    Etc: {
      screen:Etc
    },
      About: {
      screen:About
    }
  }, 
  {headerMode:'none', 
    defaultNavigationOptions: {
      gesturesEnabled: true,
      gestureResponseDistance : {horizontal:500, vertical:400}
  },
}
);

const Apppre = createAppContainer(Preapp);

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}} forceInset={{bottom:'always', top:'always'}}>
        <Apppre/>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
icon:{
  width:40, height:40, alignSelf:'center', marginBottom:17
},
iconbg:{
  justifyContent:'center', alignItems:'center'
}
});

// export default createAppContainer(App);
export default App;