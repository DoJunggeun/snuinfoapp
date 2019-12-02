import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ImageBackground, Image} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { WebView } from 'react-native-webview';
import SafeAreaView from 'react-native-safe-area-view';
const WEBVIEW_REF = "WEBVIEW_REF";


class Home extends Component { 
    constructor(props) {
        super(props);
        this.state = { canGoBack: false };
      }
    
    render() {
        const {navigation} = this.props;
        return ( 
        <View style={{flex:1, flexDirection:'column'}}> 
          <View style={{height:getStatusBarHeight()}}/>
          <View style={{height:50, backgroundColor:'black', justifyContent:'center', alignItems:'center'}}>
           <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>서울대학교 편의정보</Text>
         </View>

         <View style={{flex: 1, flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
         <TouchableOpacity style={{width:'50%', height:'100%', backgroundColor: 'lightcoral', justifyContent:'center', alignItems:'center', padding:0}}
            onPress={()=> {navigation.push("Shuttle")}}>
         <Image source={require('./src/shuttle.png')} style={{width:105, height:105, margin:15}}/>
         <View style={{justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:17}}>셔틀버스</Text></View>
         </TouchableOpacity>
         <TouchableOpacity style={{width:'50%', height:'100%', backgroundColor: 'lightsalmon', justifyContent:'center', alignItems:'center', padding:0}}
            onPress={()=> {navigation.push("Meal")}}>
         <Image source={require('./src/meal.png')} style={{width:105, height:105, margin:15}}/>
         <View style={{justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:17}}>식당</Text></View>
         </TouchableOpacity>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity style={{width:'50%', height:'100%', backgroundColor: 'lightyellow', justifyContent:'center', alignItems:'center', padding:0}}
            onPress={()=> {navigation.push("Cafe")}}>
         <Image source={require('./src/cafe.png')} style={{width:105, height:105, margin:15}}/>
         <View style={{justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:17}}>카페</Text></View>
         </TouchableOpacity>
         <TouchableOpacity style={{width:'50%', height:'100%', backgroundColor: 'lightgreen', justifyContent:'center', alignItems:'center', padding:0}}
            onPress={()=> {navigation.push("Mart")}}>
         <Image source={require('./src/mart.png')} style={{width:105, height:105, margin:15}}/>
         <View style={{justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:17}}>편의점/매점</Text></View>
         </TouchableOpacity>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity style={{width:'50%', height:'100%', backgroundColor: 'lightskyblue', justifyContent:'center', alignItems:'center', padding:0}}
            onPress={()=> {navigation.push("Contact")}}>
         <Image source={require('./src/contact.png')} style={{width:105, height:105, margin:15}}/>
         <View style={{justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:17}}>개발자에게 </Text></View>
         </TouchableOpacity>
         <TouchableOpacity style={{width:'50%', height:'100%', backgroundColor: 'lightslategray', justifyContent:'center', alignItems:'center', padding:0}}
            onPress={()=> {navigation.push("About")}}>
         <Image source={require('./src/about.png')} style={{width:105, height:105, margin:15}}/>
         <View style={{justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:17}}>정보</Text></View>
         </TouchableOpacity>
        </View>


          <View style={{height:40, backgroundColor:'black', justifyContent:'center', alignItems:'center'}}>
           <Text style={{fontSize:12, color:'white'}}>© 2019 도정근 All Rights Reserved</Text>
         </View>
 
       </View>
 


    // <View style={{flex:1}}>
    //   <View style={{height:getStatusBarHeight()}}/>
    //   <WebView source={{ uri: 'https://dojunggeun.github.io/snutoday/index.html' }} style={{flex:1}} ref={WEBVIEW_REF} onNavigationStateChange={this.onNavigationStateChange.bind(this)}/>
    //   <View style={{height: 2*getStatusBarHeight(), justifyContent: 'space-evenly', alignItems:'center', flexDirection:'row', backgroundColor:'rgba(0, 0, 0, 0.08)' }}>
    //   <TouchableOpacity disabled={!this.state.canGoBack} onPress={this.onBack.bind(this)}>
    //   <Text style={[ {padding:10}, this.state.canGoBack ? {color:'black'} : {color:'gray'} ]}>뒤로가기</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity onPress={()=> {navigation.push("Home")}}>
    //       <Text style={{padding:10}}>홈페이지</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={()=> {navigation.push("Full")}}>
    //       <Text style={{padding:10}}>전체기사</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={()=> {navigation.push("Contact")}}>
    //       <Text style={{padding:10}}>기사제보</Text>
    //     </TouchableOpacity>

    //    </View>
    // </View>
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

export default Home;

