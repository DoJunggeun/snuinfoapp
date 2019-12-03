import React, {Component} from 'react';
import { StyleSheet, Linking, Button, View, Text, TouchableOpacity, Image} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { WebView } from 'react-native-webview';
import SafeAreaView from 'react-native-safe-area-view';
import { NavigationActions } from 'react-navigation';

const WEBVIEW_REF = "WEBVIEW_REF";


class Contact extends Component { 
    constructor(props) {
        super(props);
        this.state = { canGoBack: false };
      }
    
    render() {
        const {navigation} = this.props;
        return ( 
        <View style={{flex:1, flexDirection:'column', backgroundColor:'rgb(244,244,244)'}}> 
          <View style={{height:getStatusBarHeight()}}/>
          <View style={{height:50, backgroundColor:'rgb(176,155,222)', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
           <Text style={{fontSize:22, color:'white', fontWeight:'bold'}}>제작자에게</Text>
         </View>

         <View style={{flex:1, justifyContent:'center', alignItems:'center', borderRadius:15}}>
          <View style={styles.menu}>
          <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'rgb(230,230,230)',borderTopRightRadius:15,borderTopLeftRadius:15}}>
               <Text style={{fontSize:20, fontWeight:'bold'}}>제보해주세요!</Text></View>
             <View style={{flex:3, justifyContent:'center', backgroundColor:'white'}}>
             <Text style={{left:30, fontSize:18}}>▶ 사실과 다른 정보{'\n'}</Text>
             <Text style={{left:30, fontSize:18}}>▶ 추가되면 좋을 것 같은 정보·기능{'\n'}</Text>
             <Text style={{left:30, fontSize:18}}>▶ 기타 개선을 원하시는 사항</Text></View>
             <TouchableOpacity style={{flex:4, backgroundColor: 'rgba(176,155,222,0.6)', justifyContent:'center', alignItems:'center', borderBottomRightRadius:15,borderBottomLeftRadius:15}}
            onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSeAOS1F3bnfkikIPH11mf6EhPD0qEypeqeey7_4QkSMBaD8nw/viewform?usp=sf_link')}>
         <View style={{justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:25, fontWeight:'500',color:'black'}}>제보하기</Text></View>
         </TouchableOpacity>


         </View>
         </View>



                 

         <View style={{height:50, backgroundColor:'rgb(176,155,222)', justifyContent:'center', alignItems:'center'}}>
           <TouchableOpacity style={{height:40, width:'20%', position:'absolute', left:0}} onPress={()=> {this.props.navigation.dispatch(NavigationActions.navigate({routeName: 'Home'}));}}>
           <Image source={require('./src/home.png')} style={{height:40, width:40, alignSelf:'center'}} />
           </TouchableOpacity>
           <Text style={{fontSize:12, color:'white', alignSelf:'center'}}>© 2019 도정근 All Rights Reserved</Text>
         </View>
 
       </View>
        );
    }
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
    width:320, height:480, backgroundColor: 'white', justifyContent:'center', alignItems:'stretch', borderRadius:15,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5

  },
  menufont:{
    fontSize:15
  }
});

export default Contact;