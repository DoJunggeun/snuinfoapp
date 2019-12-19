import React, {Component} from 'react';
import { Dimensions, Modal, ScrollView, StyleSheet, Linking, View, Text, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { WebView } from 'react-native-webview';
import SafeAreaView from 'react-native-safe-area-view';
import { NavigationActions } from 'react-navigation';
const WEBVIEW_REF = "WEBVIEW_REF";


class Cafe extends Component { 
    constructor(props) {
        super(props);
        this.state = { canGoBack: false, modalVisible: false };
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
        return ( 
        <View style={{flex:1, flexDirection:'column'}} forceInset={{top:'always'}}> 

         <View style={{height:50, backgroundColor:'#rgb(176,155,222)', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
          <View style={{height:50,justifyContent:'center', alignItems:'center'}}><Text style={{color:'white', fontSize:22, fontWeight:'600'}}>학내 카페 운영시간</Text></View>
          <View style={{position:'absolute', right:15}}>
                <TouchableOpacity onPress={() => {this.setModalVisible(true);}}>
                <Image source={require('./src/info.png')} style={{width:36, height:36}} />
                </TouchableOpacity>
                </View>
                </View>

           <Modal animationType="slide" transparent={false} visible={this.state.modalVisible} onRequestClose={() => {this.setModalVisible(false) }}>
           <View style={{height: getStatusBarHeight(true)}}/>
           <SafeAreaView style={{flex:1, marginTop: -getStatusBarHeight()}}>
           <WebView source={{uri: 'http://snuco.snu.ac.kr/ko/node/21'}} style={{flex:7}} onLoadStart={() => (this.showSpinner())}
                     onLoad={() => this.hideSpinner()}/>
           {this.state.visible && ( <ActivityIndicator color="#B09BDE"
            style={{flex: 1, left: 0, right: 0, top: 0, bottom: 0, position: 'absolute',
            alignItems: 'center', justifyContent: 'center' }}
            size="large"/> )}
           <View style={{height:50, backgroundColor:'rgb(176,155,222)', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
         <TouchableOpacity style={{flex:1, backgroundColor:'rgb(176,155,222)'}} onPress={() => {this.setModalVisible(false) }}>
          <View style={{height:50,justifyContent:'center', alignItems:'center'}}><Text style={{color:'white', fontSize:22, fontWeight:'600'}}>닫기</Text></View>
           </TouchableOpacity></View></SafeAreaView>
           </Modal>


<View style={{flex:1}} >
        <View style={styles.containerhead}>
          <View style={styles.th}><Text style={styles.thtext}>매장</Text></View>
          <View style={styles.th}><Text style={styles.thtext}>위치</Text></View>
          <View style={styles.th}><Text style={styles.thtext}>{`운영시간\n(학기중)`}</Text></View>
        </View>

         <ScrollView style={styles.scroll}>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>중도 느티나무</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>중앙도서관</Text></View>
          <View style={styles.td}>{libnn()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>언교원 느티나무</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>{`언어교육원\n137-1동`}</Text></View>
          <View style={styles.td}>{lannn()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>음대 느티나무</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>음대 54동</Text></View>
          <View style={styles.td}>{musicnn()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>Fluid 카페</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>학생회관(63동){'\n'}1층</Text></View>
          <View style={styles.td}>{fluid()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>{`파리바게트\n+파스쿠찌`}</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>{`관정 부속동\n(관정 3층 뒤)`}</Text></View>
          <View style={styles.td}>{paba()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>투썸플레이스</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>500동 1층</Text></View>
          <View style={styles.td}>{twosome()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>인문대 MUG</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>{`인문대 신양관\n4동 1층`}</Text></View>
          <View style={styles.td}>{mug_inmun()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>공대 MUG</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>{`공대 신양관\n44-1동 1층`}</Text></View>
          <View style={styles.td}>{mug_gong()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>할리스커피</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>74동 2층</Text></View>
          <View style={styles.td}>{hollys()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>{`사범대\n파스쿠찌`}</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>사범대 111동</Text></View>
          <View style={styles.td}>{pascucci()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>{`사범대\nThe LAB`}</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>12동 1층</Text></View>
          <View style={styles.td}>{thelab_edu()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>다향만당</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>{`두레문예관\n67동 2층`}</Text></View>
          <View style={styles.td}>{tea()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>카페그랑</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>{`관악사\n901동 1층`}</Text></View>
          <View style={styles.td}>{cafegran()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>BeLepi</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>{`농생대\n200동 1층`}</Text></View>
          <View style={styles.td}>{belepi()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>카페이야기</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>{`법학도서관\n72동 1층`}</Text></View>
          <View style={styles.td}>{eyagi()}</View>
        </View>
        <View style={styles.container} >
        <View style={styles.td}><Text style={styles.tdtext}>수의대스낵</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>수의대 85동</Text></View>
          <View style={styles.td}>{vetsnack()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>카페104</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>104-1동</Text></View>
          <View style={styles.td}>{cafe104()}</View>
        </View>
        <View style={styles.containerhead}>
        <View style={styles.td}><Text style={styles.thtext}>Take-out 전용 매장</Text></View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>라운지스낵</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>학생회관(63동){'\n'}2층</Text></View>
          <View style={styles.td}>{snack()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>자하연 느티나무</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>자하연 109동</Text></View>
          <View style={styles.td}>{jhynn()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>동원관 느티나무</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>동원관(113동) 1층	</Text></View>
          <View style={styles.td}>{dwgnn()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>모아아트</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>미술관 (151동)</Text></View>
          <View style={styles.td}>{moaart()}</View>
        </View>

      </ScrollView>
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
  containerhead: {
    height:60,
    justifyContent: 'space-around',
    backgroundColor: 'rgb(218,218,218)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    height:60,
    justifyContent: 'space-around',
    backgroundColor: 'rgb(244,244,244)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container2: {
    height:60,
    justifyContent: 'space-around',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  scroll: {
    flex:1,
    backgroundColor:'#f1f1f1',
  },
  th: {
    flex:1, 
    height: 60,
    justifyContent: 'space-around',
    borderWidth: 0.5,
    borderColor: 'rgb(218,218,218)',
    alignItems: 'center',
  },
  thtext: {
    alignItems: 'center',
    justifyContent:'center',
    fontSize:18, 
    fontWeight:'800', 
  },
  td: {
    flex:1, 
    height: 60,
    justifyContent: 'space-around',
    borderWidth: 0.5,
    borderColor: 'rgb(218,218,218)',
    alignItems: 'center',
    textAlign:'center'
  },
  tdtext : {
    color:'black', textAlign:'center', fontSize:15, fontWeight:'400'
  },
  nowon : {
    color:'blue', textAlign:'center', fontSize:15, fontWeight:'400'
  },
  nowwait : {
    color:'green',  textAlign:'center', fontSize:15, fontWeight:'400'
  },
  nowoff :{
    color:'crimson', textAlign:'center', fontSize:15, fontWeight:'400'
  },
icon:{
    width:40, height:40
  }
});

var date = new Date();
var day = date.getDay()
var hours = date.getHours()
var minutes = date.getMinutes()

function musicnn() {
  if (day == 0 || day == 6) {
    return <Text style={styles.nowoff}>{`주말에는\n운영안함`}</Text>
  } else if ((day > 0 && day < 6) && (hours >= 9 && hours < 19)) {
    return <Text style={styles.nowon}>{`운영중\n19:00 종료`}</Text>
  } else if (hours < 9) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9:00 시작</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료</Text>
  }
}

function jhynn() {
  if (day == 0 || day == 6) {
    return <Text style={styles.nowoff}>{`주말에는\n운영안함`}</Text>
  } else if ((day > 0 && day < 6) && ((hours >= 9 && hours < 19) || (hours == 8 && minutes >= 30))) {
    return <Text style={styles.nowon}>{`운영중\n19:00 종료`}</Text>
  } else if (hours < 8 || (hours == 8 && minutes < 30)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8:30 시작</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료</Text>
  }
}


function cafe104() {
  if (day == 0 || day == 6) {
    return <Text style={styles.nowoff}>{`주말에는\n운영안함`}</Text>
  } else if ((day > 0 && day < 6) && ((hours >= 9 && hours < 18) || (hours == 8 && minutes >= 30) || (hours == 18 && minutes < 30))) {
    return <Text style={styles.nowon}>{`운영중\n18:30 종료`}</Text>
  } else if (hours < 8 || (hours == 8 && minutes < 30)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8:30 시작</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료</Text>
  }
}

function moaart() {
  if (day == 0 || day == 6) {
    return <Text style={styles.nowoff}>{`주말에는\n운영안함`}</Text>
  } else if ((day > 0 && day < 6) && (hours >= 8 && hours < 17)) {
    return <Text style={styles.nowon}>{`운영중\n17:00 종료`}</Text>
  } else if (hours < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8:00 시작</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료</Text>
  }
}

function tea() {
  if (day == 0 || day == 6) {
    return <Text style={styles.nowoff}>{`주말에는\n운영안함`}</Text>
  } else if ((day > 0 && day < 6) && ((hours >= 10 && hours < 17) || (hours == 17 && minutes < 30))) {
    return <Text style={styles.nowon}>{`운영중\n17:30 종료`}</Text>
  } else if (hours < 10) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>10:00 시작</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료</Text>
  }
}

function lannn() {
  if ((day == 6) && ((hours > 9 && hours < 16) || (hours == 9 && minutes >= 30))) {
    return <Text style={styles.nowon}>{`운영중\n16:00 종료`}</Text>
  } else if ((day > 0 && day < 6) && (hours >= 8 && hours < 19)) {
    return <Text style={styles.nowon}>{`운영중\n19:00 종료`}</Text>
  } else if ((day > 0 && day < 6) && hours < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8:00 시작</Text></View>
  } else if (day == 6 && hours < 10) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9:30 시작</Text></View>
  } else if (day == 0) {
    return <Text style={styles.nowoff}>{`일요일은\n운영안함`}</Text>
  } else {
    return <Text style={styles.nowoff}>운영종료</Text>
  }
}

function dwgnn() {
  if ((day == 6) && (hours >= 9 && hours < 16)) {
    return <Text style={styles.nowon}>{`운영중\n16:00 종료`}</Text>
  } else if ((day > 0 && day < 6) && ((hours > 8 && hours < 19) || (hours == 8 && minutes >= 30))) {
    return <Text style={styles.nowon}>{`운영중\n19:00 종료`}</Text>
  } else if ((day > 0 && day < 6) && (hours < 8 || (hours == 8 && minutes < 30))) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8:30 시작</Text></View>
  } else if (day == 6 && hours < 9) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9:00 시작</Text></View>
  } else if (day == 0) {
    return <Text style={styles.nowoff}>{`일요일은\n운영안함`}</Text>
  } else {
    return <Text style={styles.nowoff}>운영종료</Text>
  }
}

function belepi() {
  if ((day == 6) && (hours >= 8 && hours < 18)) {
    return <Text style={styles.nowon}>{`운영중\n18:00 종료`}</Text>
  } else if ((day > 0 && day < 6) && (hours >= 8 && hours < 20)) {
    return <Text style={styles.nowon}>{`운영중\n20:00 종료`}</Text>
  } else if ((day > 0 && day < 6) && hours < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8:00 시작</Text></View>
  } else if (day == 6 && hours < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8:00 시작</Text></View>
  } else if (day == 0) {
    return <Text style={styles.nowoff}>{`일요일은\n운영안함`}</Text>
  } else {
    return <Text style={styles.nowoff}>운영종료</Text>
  }
}

function eyagi() {
  if ((day == 6) && (hours >= 10 && hours < 18)) {
    return <Text style={styles.nowon}>{`운영중\n18:00 종료`}</Text>
  } else if ((day > 0 && day < 6) && ((hours >= 8 && hours < 19) || (hours == 19 && minutes < 30))) {
    return <Text style={styles.nowon}>{`운영중\n19:30 종료`}</Text>
  } else if ((day > 0 && day < 6) && hours < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8:00 시작</Text></View>
  } else if (day == 6 && hours < 10) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>10:00 시작</Text></View>
  } else if (day == 0) {
    return <Text style={styles.nowoff}>{`일요일은\n운영안함`}</Text>
  } else {
    return <Text style={styles.nowoff}>운영종료</Text>
  }
}

function snack() {
  if ((day == 6) && ((hours >= 8 && hours < 15) || (hours == 7 && minutes >= 30))) {
    return <Text style={styles.nowon}>{`운영중\n15:00 종료`}</Text>
  } else if ((day > 0 && day < 6) && ((hours >= 8 && hours < 19) || (hours == 7 && minutes >= 30))) {
    return <Text style={styles.nowon}>{`운영중\n19:00 종료`}</Text>
  } else if ((day > 0 && day < 6) && (hours < 7 || (hours == 7 && minutes <= 30))) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>7:30 시작</Text></View>
  } else if (day == 6 && (hours < 7 || (hours == 7 && minutes >= 30))) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>7:30 시작</Text></View>
  } else if (day == 0) {
    return <Text style={styles.nowoff}>{`일요일은\n운영안함`}</Text>
  } else {
    return <Text style={styles.nowoff}>운영종료</Text>
  }
}

function vetsnack() {
  if ((day == 6) && (hours >= 9 && hours < 14)) {
    return <Text style={styles.nowon}>{`운영중\n14:00 종료`}</Text>
  } else if ((day > 0 && day < 6) && (hours >= 9 && hours < 19)) {
    return <Text style={styles.nowon}>{`운영중\n19:00 종료`}</Text>
  } else if ((day > 0 && day < 6) && hours < 9) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9:00 시작</Text></View>
  } else if (day == 6 && hours < 9) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9:00 시작</Text></View>
  } else if (day == 0) {
    return <Text style={styles.nowoff}>{`일요일은\n운영안함`}</Text>
  } else {
    return <Text style={styles.nowoff}>운영종료</Text>
  }
}

function libnn() {
  if ((day == 0 || day == 6) && (hours >= 11 && hours < 19)) {
    return <Text style={styles.nowon}>{`운영중\n19:00 종료`}</Text>
  } else if ((day > 0 && day < 6) && ((hours >= 8 && hours < 19) || (hours == 19 && minutes < 30))) {
    return <Text style={styles.nowon}>{`운영중\n19:30 종료`}</Text>
  } else if ((day == 0 || day == 6) && (hours < 11)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>11:00 시작</Text></View>
  } else if ((day > 0 && day < 6) && (hours < 8)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8:00 시작</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료</Text>
  }
}

function fluid() {
  if ((day == 0 || day == 6) && (hours >= 10 && hours < 15)) {
    return <Text style={styles.nowon}>{`운영중\n15:00 종료`}</Text>
  } else if ((day > 0 && day < 6) && ((hours >= 8 && hours < 19) || (hours == 19 && minutes < 30))) {
    return <Text style={styles.nowon}>{`운영중\n19:30 종료`}</Text>
  } else if ((day == 0 || day == 6) && (hours < 10)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>10:00 시작</Text></View>
  } else if ((day > 0 && day < 6) && (hours < 8)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8:00 시작</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료</Text>
  }
}

function twosome() {
  if (hours >= 8 && hours < 22) {
    return <Text style={styles.nowon}>{`운영중\n22:00 종료`}</Text>
  } else if (hours < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8:00 시작</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료</Text>
  }
}

function pascucci() {
  var date = new Date();
  var hours = date.getHours()
  if (hours >= 8 && hours < 22) {
    return <Text style={styles.nowon}>{`운영중\n22:00 종료`}</Text>
  } else if (hours < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8:00 시작</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료</Text>
  }
}

function hollys() {
  if (hours >= 8 && hours < 22) {
    return <Text style={styles.nowon}>{`운영중\n22:00 종료`}</Text>
  } else if (hours < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8:00 시작</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료</Text>
  }
}

function cafegran() {
  if ((day == 0 || day == 6) && ((hours >= 8 && hours < 21) || (hours == 7 && minutes >= 30))) {
    return <Text style={styles.nowon}>{`운영중\n21:00 종료`}</Text>
  } else if ((day > 0 && day < 6) && ((hours >= 8 && hours < 22) || (hours == 7 && minutes >= 30))) {
    return <Text style={styles.nowon}>{`운영중\n22:00 종료`}</Text>
  } else if ((day == 0 || day == 6) && (hours < 7 || (hours == 7 && minutes < 30))) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>7:30 시작</Text></View>
  } else if ((day > 0 && day < 6) && (hours < 7 || (hours == 7 && minutes < 30))) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>7:30 시작</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료</Text>
  }
}

function paba() {
  if (hours < 7){
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>7:00 시작</Text></View>
  } else if (hours < 22) {
    return <Text style={styles.nowon}>{`운영중\n22:00 종료`}</Text>
  } else {
    return <Text style={styles.nowoff}>운영종료</Text>
  }
}

function mug_inmun(){
  if ( day == 0 || day == 6) {
    return <Text style={styles.nowoff}>{`주말에는\n운영안함`}</Text>
  } else {
    if (hours<8) {
      return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8:00 시작</Text></View>
    } else if (hours >= 20) {
    return <Text style={styles.nowoff}>운영종료</Text>
  } else {
    return <Text style={styles.nowon}>{`운영중\n20:00 종료`}</Text>
}
}
}

function mug_gong(){
  if ( day == 0 || day == 6) {
    if (hours<9) {
      return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9:00 시작</Text></View>
    } else if (hours >= 18) {
    return <Text style={styles.nowoff}>운영종료</Text>
  } else {
    return <Text style={styles.nowon}>{`운영중\n18:00 종료`}</Text>
  }
  } else {
    if (hours<8) {
      return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8:00 시작</Text></View>
    } else if (hours >= 20) {
    return <Text style={styles.nowoff}>운영종료</Text>
  } else {
    return <Text style={styles.nowon}>{`운영중\n20:00 종료`}</Text>
  }
}
}

function thelab_edu(){
  if (day == 0) {
    return <Text style={styles.nowoff}>{`일요일은\n운영안함`}</Text>
  }
  else if ( day == 6) {
    if (hours<9) {
      return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9:00 시작</Text></View>
    } else if (hours >= 18) {
    return <Text style={styles.nowoff}>운영종료</Text>
  } else {
    return <Text style={styles.nowon}>{`운영중\n18:00 종료`}</Text>
  }
  } else {
    if (hours<8) {
      return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8:00 시작</Text></View>
    } else if (hours >= 21) {
    return <Text style={styles.nowoff}>운영종료</Text>
  } else {
    return <Text style={styles.nowon}>{`운영중\n21:00 종료`}</Text>
  }
}
}

export default Cafe;