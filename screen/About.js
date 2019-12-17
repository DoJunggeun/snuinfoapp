import React, {Component} from 'react';
import { Modal, StyleSheet, View, Text, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { WebView } from 'react-native-webview';
import { NavigationActions, SafeAreaView } from 'react-navigation';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
// import SafeAreaView from 'react-native-safe-area-view';

const WEBVIEW_REF = "WEBVIEW_REF";


class About extends Component { 
  constructor(props) {
    super(props);
    this.state = { canGoBack: false , modalVisible: false};
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  hideSpinner=()=> {
    this.setState({ visible: false });
  }
  showSpinner=()=> {
    this.setState({ visible: true });
  }

    render() {
        const {navigation} = this.props;
        return ( <GestureRecognizer onSwipeLeft={()=> {this.props.navigation.dispatch(NavigationActions.navigate({routeName: 'Home'}));}} 
        config={{
          velocityThreshold: 0.2,
          directionalOffsetThreshold: 20
        }} style={{flex:1}}>
        <View style={{flex:1, flexDirection:'column', backgroundColor:'rgb(244,244,244)'}}> 
          <View style={{height:50, backgroundColor:'rgb(176,155,222)', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
           <Text style={{fontSize:22, color:'white', fontWeight:'bold'}}>앱 정보</Text>
         </View>

         <View style={{flex:1, justifyContent:'center', alignItems:'center', borderRadius:15}}>
          <View style={styles.menu}>
             <View style={{flex:1, justifyContent:'center', backgroundColor:'rgb(230,230,230)', borderTopRightRadius:15,borderTopLeftRadius:15}}><Text style={{left:15, fontSize:17, fontWeight:'bold'}}>Version</Text></View>
             <View style={{flex:1, justifyContent:'center', backgroundColor:'white'}}><Text style={{left:15, fontSize:17}}>1.0.0</Text></View>
             <View style={{flex:1, justifyContent:'center', backgroundColor:'rgb(230,230,230)'}}><Text style={{left:15, fontSize:17, fontWeight:'bold'}}>각종 문의</Text></View>
             <View style={{flex:1, justifyContent:'center', backgroundColor:'white'}}><Text style={{left:15, fontSize:17}}>snuinfoapp@gmail.com</Text></View>
             <View style={{flex:1, justifyContent:'center', backgroundColor:'rgb(230,230,230)'}}><Text style={{left:15, fontSize:17, fontWeight:'bold'}}>개선사항 제보</Text></View>
             <View style={{flex:1, justifyContent:'center', backgroundColor:'white'}}><Text style={{left:15, fontSize:17}}>정보 수정, 기능 추가, 어플 개선을 원하시면</Text></View>

           <TouchableOpacity style={{flex:2, backgroundColor: 'rgba(176,155,222,0.4)', justifyContent:'center', alignItems:'center', borderBottomRightRadius:15,borderBottomLeftRadius:15}} onPress={() => {this.setModalVisible(true);}}>
         <View style={{justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:26, fontWeight:'500',color:'black'}}>눌러서 제보하기</Text></View>
         </TouchableOpacity>

         <Modal animationType="slide" transparent={false} visible={this.state.modalVisible} style={{marginTop :getStatusBarHeight()}}>
           <WebView source={{uri: 'https://docs.google.com/forms/d/e/1FAIpQLSeAOS1F3bnfkikIPH11mf6EhPD0qEypeqeey7_4QkSMBaD8nw/viewform?usp=sf_link'}} style={{flex:7, backgroundColor:'rgb(240,235,248)'}} onLoadStart={() => (this.showSpinner())}
                     onLoad={() => this.hideSpinner()}/>
           {this.state.visible && ( <ActivityIndicator color="#B09BDE"
            style={{flex: 1, left: 0, right: 0, top: 0, bottom: 0, position: 'absolute',
            alignItems: 'center', justifyContent: 'center' }}
            size="large"/> )}
           <View style={{height:50, backgroundColor:'rgb(176,155,222)', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
         <TouchableOpacity style={{flex:1, backgroundColor:'rgb(176,155,222)'}} onPress={() => {this.setModalVisible(false) }}>
          <View style={{height:50,justifyContent:'center', alignItems:'center'}}><Text style={{color:'white', fontSize:22, fontWeight:'600'}}>닫기</Text></View>
           </TouchableOpacity></View>
           </Modal>

                 </View>
                 </View>


                 <View style={{height:50, backgroundColor:'rgb(176,155,222)', justifyContent:'center', alignItems:'center'}}>
           <TouchableOpacity style={{height:40, width:'20%', position:'absolute', left:0}} onPress={()=> {this.props.navigation.dispatch(NavigationActions.navigate({routeName: 'Home'}));}}>
           <Image source={require('./src/home.png')} style={{height:40, width:40, alignSelf:'center'}} />
           </TouchableOpacity>
           <Text style={{fontSize:12, color:'white', alignSelf:'center'}}>© 2019 도정근 All Rights Reserved</Text>
         </View>
 
       </View></GestureRecognizer>
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

