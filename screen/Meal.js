import React, {Component} from 'react';
import { Linking, View, Text, TouchableOpacity, Image} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { WebView } from 'react-native-webview';
import SafeAreaView from 'react-native-safe-area-view';
const WEBVIEW_REF = "WEBVIEW_REF";


class Meal extends Component { 
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
         <View style={{height:50, backgroundColor:'#f1f1f1', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
         <TouchableOpacity style={{flex:53, backgroundColor:'lightgray'}} onPress={() => Linking.openURL('http://snuco.snu.ac.kr/ko/node/20')}>
          <View style={{height:50,justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:16, fontWeight:'600'}}>생협 식당 운영시간 전체보기</Text></View>
           </TouchableOpacity>
           <TouchableOpacity style={{flex:47, backgroundColor:'lightgray'}} onPress={() => Linking.openURL('http://snuco.snu.ac.kr/ko/foodmenu')}>
          <View style={{height:50,justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:16, fontWeight:'600'}}>생협 식당 메뉴 전체보기</Text></View>
           </TouchableOpacity></View>
         <WebView source={{ uri: 'https://dojunggeun.github.io/snuinfo/meal.html' }} style={{flex:1}} ref={WEBVIEW_REF} onNavigationStateChange={this.onNavigationStateChange.bind(this)}/>


          <View style={{height:40, backgroundColor:'black', justifyContent:'center', alignItems:'center'}}>
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

export default Meal;

