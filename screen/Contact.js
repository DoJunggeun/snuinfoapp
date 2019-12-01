import React, {Component} from 'react';
import { Linking, Button, View, Text, TouchableOpacity, Image} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { WebView } from 'react-native-webview';
import SafeAreaView from 'react-native-safe-area-view';
const WEBVIEW_REF = "WEBVIEW_REF";


class Contact extends Component { 
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
           <Image source={require('./src/back.png')} style={{height:32, width:32, position:'absolute'}} />
           </TouchableOpacity>
           <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>서울대학교 편의정보</Text>
         </View>

             <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'lightgrey'}}>
               <Text style={{fontSize:20, fontWeight:'bold'}}>제작자에게 제보하기</Text></View>
             <View style={{flex:2, justifyContent:'center', backgroundColor:'white'}}>
             <Text style={{left:15, fontSize:18}}>▶ 사실과 다른 정보</Text>
             <Text style={{left:15, fontSize:18}}>▶ 추가되기를 원하시는 정보</Text>
             <Text style={{left:15, fontSize:18}}>▶ 기타 개선을 원하시는 사항</Text></View>
             <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'lightgrey'}}>
             <Text style={{fontSize:18, fontWeight:'bold'}}>제보해주시면 확인 후 신속히 반영하겠습니다.</Text></View>
             <TouchableOpacity style={{flex:1, backgroundColor: 'dimgray', justifyContent:'center', alignItems:'center', padding:0}}
            onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSeAOS1F3bnfkikIPH11mf6EhPD0qEypeqeey7_4QkSMBaD8nw/viewform?usp=sf_link')}>
         <View style={{justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:20, fontWeight:'700',color:'white'}}>제보하기</Text></View>
         </TouchableOpacity>

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

export default Contact;