import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { WebView } from 'react-native-webview';
import SafeAreaView from 'react-native-safe-area-view';
const WEBVIEW_REF = "WEBVIEW_REF";


class About extends Component { 
    constructor(props) {
        super(props);
        this.state = { canGoBack: false };
      }
    
    render() {
        const {navigation} = this.props;
        return ( 
        <View style={{flex:1, flexDirection:'column'}}> 
          <View style={{height:getStatusBarHeight()}}/>
          <View style={{height:50, backgroundColor:'black', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
           <TouchableOpacity style={{height:32, width:32, position:'absolute', left:10}} onPress={()=> {navigation.push("Home")}}>
           <Image source={require('./src/home.png')} style={{height:32, width:32, position:'absolute'}} />
           </TouchableOpacity>
           <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>서울대학교 편의정보</Text>
         </View>

             <View style={{flex:1, justifyContent:'center', backgroundColor:'lightgrey'}}><Text style={{left:15, fontSize:17, fontWeight:'bold'}}>Version</Text></View>
             <View style={{flex:1, justifyContent:'center', backgroundColor:'white'}}><Text style={{left:15, fontSize:17}}>1.0.0</Text></View>
             <View style={{flex:1, justifyContent:'center', backgroundColor:'lightgrey'}}><Text style={{left:15, fontSize:17, fontWeight:'bold'}}>앱 및 컨텐츠 관련 문의</Text></View>
             <View style={{flex:1, justifyContent:'center', backgroundColor:'white'}}><Text style={{left:15, fontSize:17}}>jg.do@snu.ac.kr</Text></View>
             <View style={{flex:1, justifyContent:'center', backgroundColor:'lightgrey'}}><Text style={{left:15, fontSize:17, fontWeight:'bold'}}>정보 출처</Text></View>
             <View style={{flex:2, justifyContent:'center', backgroundColor:'white'}}>
                 <Text style={{left:15, fontSize:17}}>▶ 마이스누 포털 (my.snu.ac.kr)</Text>
                 <Text style={{left:15, fontSize:17}}>▶ 생활협동조합 홈페이지 (snuco.snu.ac.kr)</Text>
                 <Text style={{left:15, fontSize:17}}>▶ 이용자의 제보</Text></View>
             <View style={{flex:2, alignItems:'center', justifyContent:'center', backgroundColor:'lightgrey'}}>
                 <Text style={{fontSize:20, fontWeight:'bold'}}>이용해주셔서 감사합니다ㅎㅎ</Text>
                 <Text style={{fontSize:23, fontWeight:'bold'}}>^_^</Text></View>

          <View style={{height:40, backgroundColor:'black', justifyContent:'center', alignItems:'center', justifyContent:'center'}}>
           <Text style={{fontSize:12, color:'white'}}>© 2019 도정근 All Rights Reserved</Text>
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

export default About;

