import React, {Component} from 'react';
import { Image, ScrollView, TextInput, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {createAppContainer, withOrientation} from 'react-navigation';
import { createMaterialTopTabNavigator  } from 'react-navigation-tabs';

import {createStackNavigator } from 'react-navigation-stack';
import Home from './screen/Home';
import Shuttle from './screen/Shuttle';
import Meal from './screen/Meal';
import Cafe from './screen/Cafe';
import Mart from './screen/Mart';
import About from './screen/About';
import Contact from './screen/Contact';

const Bottom = createMaterialTopTabNavigator(
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

const Cont = createMaterialTopTabNavigator(
  {
    tabs: {
      screen:Bottom,
      navigationOptions: () => ({
        tabBarVisible:false,
        swipeEnabled: false
    }),
    },
    Contact: {
      screen:Contact,
      navigationOptions: () => ({
        tabBarVisible:false,
    }),
    },
  },
    {
      swipeEnabled: true,
      }
    
)
const Ab = createMaterialTopTabNavigator(
  {
    Cont: {
      screen:Cont,
      navigationOptions: () => ({
        tabBarVisible:false,
        swipeEnabled: false
    }),
    },
    About: {
      screen:About,
      navigationOptions: () => ({
        tabBarVisible:false,
    }),
    },
  },
    {
      swipeEnabled: true,
      }
    
)


const App = createStackNavigator(
  {
  tabs: Bottom,
  Ab: Ab
  },
    {headerMode: 'none', mode:'card', lazy:false, gestureDirection:'vertical'}
)


const styles = StyleSheet.create({
icon:{
  width:40, height:40, alignSelf:'center', marginBottom:17
},
iconbg:{
  justifyContent:'center', alignItems:'center'
}
});

export default createAppContainer(App);