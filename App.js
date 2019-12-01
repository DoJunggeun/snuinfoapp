import React from 'react';
import { ScrollView, TextInput, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './screen/Home';
import Contact from './screen/Contact';
import Shuttle from './screen/Shuttle';
import Meal from './screen/Meal';
import Cafe from './screen/Cafe';
import Mart from './screen/Mart';
import About from './screen/About';


const App = createStackNavigator(
    {
      Home: {screen:Home},
      Shuttle: {screen:Shuttle},
      Meal: {screen:Meal},
      Cafe: {screen:Cafe},
      Mart: {screen:Mart},
      About: {screen:About},
      Contact: {screen:Contact}
    },
    {headerMode: 'none', mode:'card', lazy:false, gestureDirection:'vertical'}
);



export default createAppContainer(App);



// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: ''};
//   }

//   render() {

//   return (
//     <View style={{flex:1}}>
//       <View style={{height:getStatusBarHeight()}} />
//       <WebView source={{ uri: 'http://www.snunews.com/' }} style={{flex:1}}/>
//       <View style={{height:2*getStatusBarHeight()}}> 
//           <Text>네이버</Text>
//       </View>

//     </View>
  
//   );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize:30
//   }
// });
