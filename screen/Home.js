import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { NavigationActions } from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';

const WEBVIEW_REF = "WEBVIEW_REF";

class Home extends Component { 
  // async componentDidMount() {
  //   await Font.loadAsync({
  //     'JUA': require('../assets/fonts/BMJUA.ttf')
  // })}
    constructor(props) {
        super(props);
        this.state = { canGoBack: false };
      }
    
    
    render() {
              const {navigation} = this.props;
                return ( 
        <View style={{flex:1, flexDirection:'column', justifyContent:'space-around'}}> 
          <View style={{height:'22%', backgroundColor:'rgb(176,155,222)', justifyContent:'center', alignItems:'center'}}>
           <Text style={{fontSize:40, color:'white', fontWeight:'bold'}}>서울대학교 편의정보</Text>
         </View>

          <View style={{flex:1, backgroundColor:'rgb(244,244,244)'}}>

         <View style={{flex: 1, top:'1%', flexDirection: 'row', justifyContent:'space-evenly', alignItems:'center'}}>
         <TouchableOpacity style={styles.menu} onPress={()=> {this.props.navigation.dispatch(NavigationActions.navigate({routeName: 'Meal'}));}}>
         <Image source={require('./src/meal.png')} style={styles.menuimg}/>
         <View style={{justifyContent:'center', alignItems:'center'}}><Text style={styles.menufont}>식당</Text></View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.menu} onPress={()=> {this.props.navigation.dispatch(NavigationActions.navigate({routeName: 'Mart'}));}}>
         <Image source={require('./src/mart.png')} style={styles.menuimg}/>
         <View style={{justifyContent:'center', alignItems:'center'}}><Text style={styles.menufont}>편의점·매점</Text></View>
         </TouchableOpacity>

        </View>

        <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-evenly', alignItems:'center'}}>
        <TouchableOpacity style={styles.menu} onPress={()=> {this.props.navigation.dispatch(NavigationActions.navigate({routeName: 'Cafe'}));}}>
         <Image source={require('./src/cafe.png')} style={styles.menuimg}/>
         <View style={{justifyContent:'center', alignItems:'center'}}><Text style={styles.menufont}>카페</Text></View>
         </TouchableOpacity>
         <TouchableOpacity style={styles.menu} onPress={()=> {this.props.navigation.dispatch(NavigationActions.navigate({routeName: 'Shuttle'}));}}>
         <Image source={require('./src/shuttle.png')} style={styles.menuimg}/>
         <View style={{justifyContent:'center', alignItems:'center'}}><Text style={styles.menufont}>셔틀버스</Text></View>
         </TouchableOpacity>

        </View>

        <View style={{flex: 1, bottom:'1%', flexDirection: 'row', justifyContent:'space-evenly', alignItems:'center'}}>
        <TouchableOpacity style={styles.menu} onPress={()=> {this.props.navigation.dispatch(NavigationActions.navigate({routeName: 'Etc'}));}}>
         <Image source={require('./src/about.png')} style={styles.menuimg}/>
         <View style={{justifyContent:'center', alignItems:'center'}}><Text style={styles.menufont}>기타 편의정보</Text></View>
         </TouchableOpacity>
         <TouchableOpacity style={styles.menu} onPress={()=> {this.props.navigation.dispatch(NavigationActions.navigate({routeName: 'About'}));}}>
         <Image source={require('./src/contact.png')} style={styles.menuimg}/>
         <View style={{justifyContent:'center', alignItems:'center'}}><Text style={styles.menufont}>앱 정보 및 문의</Text></View>
         </TouchableOpacity>
        </View>

        </View>

       </View>
        );
    };
    onNavigationStateChange(navState) {
        this.setState({
          canGoBack: navState.canGoBack
        });
      }
      onBack = () => {
        if (this.state.canGoBack)
          this.refs[WEBVIEW_REF].goBack();
      }
}

const styles = StyleSheet.create({
  menu: {
    width:'40%', aspectRatio:1, maxWidth:230, backgroundColor: 'white', justifyContent:'center', alignItems:'center', borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5

  },
  menuimg: {
    width:'40%', height:'40%', margin:15
  },
  menufont:{
    fontSize:15
  }
});

export default Home;