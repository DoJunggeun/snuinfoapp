import React, {Component} from 'react';
import { ScrollView, StyleSheet, Linking, View, Text, TouchableOpacity, Image} from 'react-native';
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
         <WebView source={{ uri: 'https://dojunggeun.github.io/snuinfo/meal.html' }} style={{flex:1}} ref={WEBVIEW_REF} onNavigationStateChange={this.onNavigationStateChange.bind(this)}
         bounces='false'/>
  <View style={{flex:1}} >
    <View style={styles.container} >
          <View><Text style={{fontSize:15, fontWeight:'600', alignItems:'center'}}>식당</Text></View>
          <View><Text style={{fontSize:15, fontWeight:'600', alignItems:'center'}}>위치</Text></View>
          <View><Text style={{fontSize:15, fontWeight:'600', alignItems:'center'}}>현재</Text></View>
        </View>

         <ScrollView style={{flex:1, backgroundColor:'#f1f1f1'}} >
        <View style={styles.container2}>
          <View style={{flex:3, alignItems:'center'}}><Text>자하연식당</Text></View>
          <View style={{flex:3, alignItems:'center'}}><Text>농협(109동) 2층</Text></View>
          <View style={{flex:3, alignItems:'center'}}><Text>현재??</Text></View>
        </View>
        <View style={styles.container}>
          <View style={{flex:1, alignItems:'center'}}><Text>학생회관 식당</Text></View>
          <View style={{flex:1, alignItems:'center'}}><Text>학생회관(63동) 1층</Text></View>
          <View style={{flex:1, alignItems:'center'}}><Text>현재??</Text></View>
        </View>
        <View style={styles.container2}>
          <View style={{flex:1, alignItems:'center'}}><Text>학생회관 9번출구</Text></View>
          <View style={{flex:1, alignItems:'center'}}><Text>학생회관(63동) 지하 1층</Text></View>
          <View style={{flex:1, alignItems:'center'}}><Text>현재??</Text></View>
        </View>
        <View style={styles.container}>
          <View style={{flex:1, alignItems:'center'}}><Text>예술계식당</Text></View>
          <View style={{flex:1, alignItems:'center'}}><Text>74동 1층</Text></View>
          <View style={{flex:1, alignItems:'center'}}><Text>현재??</Text></View>
        </View>
        <View style={styles.container2}>
          <View style={{flex:1, alignItems:'center'}}><Text>모두의공간 (공깡)</Text></View>
          <View style={{flex:1, alignItems:'center'}}><Text>30-2동 1층</Text></View>
          <View style={{flex:1, alignItems:'center'}}><Text>현재</Text></View>
        </View>
        <View style={styles.container}>
          <View style={{flex:1, alignItems:'center'}}><Text>3식당(농식)</Text></View>
          <View style={{flex:1, alignItems:'center'}}><Text>75-1동 4층</Text></View>
          <View style={{flex:1, alignItems:'center'}}><Text>현재</Text></View>
        </View>
        <View style={styles.container2}>
          <View style={{flex:1, alignItems:'center'}}><Text>301동 식당</Text></View>
          <View style={{flex:1, alignItems:'center'}}><Text>301동 지하1층</Text></View>
          <View style={{flex:1, alignItems:'center'}}><Text>현재</Text></View>
        </View>
      </ScrollView>
      </View>

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

const styles = StyleSheet.create({
  container: {
    height:60,
    justifyContent: 'space-around',
    backgroundColor: '#f1f1f1',
    flexDirection: 'row',
    alignItems: 'center'
  },
  container2: {
    height:60,
    justifyContent: 'space-around',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Meal;

