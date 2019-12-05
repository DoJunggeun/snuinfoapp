import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { WebView } from 'react-native-webview';
import SafeAreaView from 'react-native-safe-area-view';
import { NavigationActions } from 'react-navigation';


const WEBVIEW_REF = "WEBVIEW_REF";


class About extends Component { 
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
           <Text style={{fontSize:22, color:'white', fontWeight:'bold'}}>앱 정보</Text>
         </View>

         <View style={{flex:1, justifyContent:'center', alignItems:'center', borderRadius:15}}>
          <View style={styles.menu}>
             <View style={{flex:1, justifyContent:'center', backgroundColor:'rgb(230,230,230)', borderTopRightRadius:15,borderTopLeftRadius:15}}><Text style={{left:15, fontSize:17, fontWeight:'bold'}}>Version</Text></View>
             <View style={{flex:1, justifyContent:'center', backgroundColor:'white'}}><Text style={{left:15, fontSize:17}}>1.0.0</Text></View>
             <View style={{flex:1, justifyContent:'center', backgroundColor:'rgb(230,230,230)'}}><Text style={{left:15, fontSize:17, fontWeight:'bold'}}>각종 문의</Text></View>
             <View style={{flex:1, justifyContent:'center', backgroundColor:'white'}}><Text style={{left:15, fontSize:17}}>jg.do@snu.ac.kr</Text></View>
             <View style={{flex:1, justifyContent:'center', backgroundColor:'rgb(230,230,230)'}}><Text style={{left:15, fontSize:17, fontWeight:'bold'}}>정보 출처</Text></View>
             <View style={{flex:2, justifyContent:'center', backgroundColor:'white'}}>
                 <Text style={{left:15, fontSize:17}}>▶ 마이스누 (my.snu.ac.kr)</Text>
                 <Text style={{left:15, fontSize:17}}>▶ 생활협동조합 (snuco.snu.ac.kr)</Text>
                 <Text style={{left:15, fontSize:17}}>▶ 이용자의 제보</Text></View>
             <View style={{flex:2, alignItems:'center', justifyContent:'center', backgroundColor:'rgb(230,230,230)',borderBottomRightRadius:15,borderBottomLeftRadius:15}}>
                 <Text style={{fontSize:20, fontWeight:'bold'}}>각 페이지에서 제목을 눌러보세요</Text>
                 <Text style={{fontSize:23, fontWeight:'bold'}}>^_^</Text></View>
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
    elevation: 5,

  },
  menufont:{
    fontSize:15
  }
});

export default About;

