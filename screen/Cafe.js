import React, {Component} from 'react';
import { Dimensions, Modal, ScrollView, StyleSheet, Linking, View, Text, TouchableOpacity, Image} from 'react-native';
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

    render() {
        const {navigation} = this.props;
        return ( 
        <View style={{flex:1, flexDirection:'column'}}> 
          <View style={{height:getStatusBarHeight()}}/>

         <View style={{height:50, backgroundColor:'#rgb(176,155,222)', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
         <TouchableOpacity style={{flex:1, backgroundColor:'#rgb(176,155,222)'}} onPress={() => {this.setModalVisible(true);}}>
          <View style={{height:50,justifyContent:'center', alignItems:'center'}}><Text style={{color:'white', fontSize:22, fontWeight:'600'}}>생협 카페 운영시간 전체보기</Text></View>
           </TouchableOpacity></View>

           <Modal animationType="slide" transparent={false} visible={this.state.modalVisible} style={{marginTop :getStatusBarHeight()}}>
           <WebView source={{uri: 'http://snuco.snu.ac.kr/ko/node/21'}} style={{flex:7}}/>
           <View style={{height:50, backgroundColor:'rgb(176,155,222)', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
         <TouchableOpacity style={{flex:1, backgroundColor:'rgb(176,155,222)'}} onPress={() => {this.setModalVisible(false) }}>
          <View style={{height:50,justifyContent:'center', alignItems:'center'}}><Text style={{color:'white', fontSize:22, fontWeight:'600'}}>닫기</Text></View>
           </TouchableOpacity></View>
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
          <View style={styles.td}><Text style={styles.tdtext}>학생회관(63동) 1층</Text></View>
          <View style={styles.td}>{fluid()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>투썸플레이스</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>500동 1층</Text></View>
          <View style={styles.td}>{twosome()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>할리스커피</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>74동 2층</Text></View>
          <View style={styles.td}>{hollys()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>파스쿠찌</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>사범대 111동</Text></View>
          <View style={styles.td}>{pascucci()}</View>
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
          <View style={styles.td}><Text style={styles.tdtext}>퀴즈노스</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>301동 지하1층</Text></View>
          <View style={styles.td}>{quiz()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>BeLepi</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>{`농생대\n200동 1층`}</Text></View>
          <View style={styles.td}>{belepi()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>카페이야기</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>{`법학도서관\n72동 1층`}</Text></View>
          <View style={styles.td}>{eyagi()}</View>
        </View>
        <View style={styles.container2} >
        <View style={styles.td}><Text style={styles.tdtext}>수의대스낵</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>수의대 85동</Text></View>
          <View style={styles.td}>{vetsnack()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>카페104</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>104-1동</Text></View>
          <View style={styles.td}>{cafe104()}</View>
        </View>
        <View style={styles.containerhead}>
        <View style={styles.td}><Text style={styles.thtext}>Take-out 전용 매장</Text></View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>라운지스낵</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>학생회관(63동) 2층</Text></View>
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

        <View style={styles.container0} >
          <View style={styles.td}><Text style={styles.thtext}>추가 예정 : 카페드림, 인문대머그, 공대머그, 사범대더랩, 봉구스밥버거 등</Text></View>
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
    color:'black', textAlign:'center', fontSize:15, fontWeight:'500'
  },
  nowon : {
    color:'blue', textAlign:'center', fontSize:15, fontWeight:'500'
  },
  nowwait : {
    color:'green',  textAlign:'center', fontSize:15, fontWeight:'500'
  },
  nowoff :{
    color:'red', textAlign:'center', fontSize:15, fontWeight:'500'
  },
  icon:{
    width:40, height:40
  }
});

function musicnn() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>{`주말에는\n운영안함`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 9 && date.getHours() < 19)) {
    return <Text style={styles.nowon}>{`운영중\n19시까지`}</Text>
  } else if (date.getHours() < 9) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}

function jhynn() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>{`주말에는\n운영안함`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 9 && date.getHours() < 19) || (date.getHours() == 8 && date.getMinutes() >= 30))) {
    return <Text style={styles.nowon}>{`운영중\n19시까지`}</Text>
  } else if (date.getHours() < 8 || (date.getHours() == 8 && date.getMinutes() < 30)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시30분부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}


function cafe104() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>{`주말에는\n운영안함`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 9 && date.getHours() < 18) || (date.getHours() == 8 && date.getMinutes() >= 30) || (date.getHours() == 18 && date.getMinutes() < 30))) {
    return <Text style={styles.nowon}>{`운영중\n18시30분까지`}</Text>
  } else if (date.getHours() < 8 || (date.getHours() == 8 && date.getMinutes() < 30)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시30분부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}

function moaart() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>{`주말에는\n운영안함`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 8 && date.getHours() < 17)) {
    return <Text style={styles.nowon}>{`운영중\n17시까지`}</Text>
  } else if (date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}

function tea() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>{`주말에는\n운영안함`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 10 && date.getHours() < 17) || (date.getHours() == 17 && date.getMinutes() < 30))) {
    return <Text style={styles.nowon}>{`운영중\n17시30분까지`}</Text>
  } else if (date.getHours() < 10) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>10시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}

function lannn() {
  var date = new Date();
  if ((date.getDay() == 6) && ((date.getHours() > 9 && date.getHours() < 16) || (date.getHours() == 9 && date.getMinutes() >= 30))) {
    return <Text style={styles.nowon}>{`운영중\n16시까지`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 8 && date.getHours() < 19)) {
    return <Text style={styles.nowon}>{`운영중\n19시까지`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시부터</Text></View>
  } else if (date.getDay() == 6 && date.getHours() < 10) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9시30분부터</Text></View>
  } else if (date.getDay() == 0) {
    return <Text style={styles.nowoff}>{`일요일은\n운영안함`}</Text>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}

function dwgnn() {
  var date = new Date();
  if ((date.getDay() == 6) && (date.getHours() >= 9 && date.getHours() < 16)) {
    return <Text style={styles.nowon}>{`운영중\n16시까지`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() > 8 && date.getHours() < 19) || (date.getHours() == 8 && date.getMinutes() >= 30))) {
    return <Text style={styles.nowon}>{`운영중\n19시까지`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 8 || (date.getHours() == 8 && date.getMinutes() < 30))) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시30분부터</Text></View>
  } else if (date.getDay() == 6 && date.getHours() < 9) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9시부터</Text></View>
  } else if (date.getDay() == 0) {
    return <Text style={styles.nowoff}>{`일요일은\n운영안함`}</Text>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}

function belepi() {
  var date = new Date();
  if ((date.getDay() == 6) && (date.getHours() >= 8 && date.getHours() < 18)) {
    return <Text style={styles.nowon}>{`운영중\n18시까지`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 8 && date.getHours() < 20)) {
    return <Text style={styles.nowon}>{`운영중\n20시까지`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시부터</Text></View>
  } else if (date.getDay() == 6 && date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시부터</Text></View>
  } else if (date.getDay() == 0) {
    return <Text style={styles.nowoff}>{`일요일은\n운영안함`}</Text>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}

function eyagi() {
  var date = new Date();
  if ((date.getDay() == 6) && (date.getHours() >= 10 && date.getHours() < 18)) {
    return <Text style={styles.nowon}>{`운영중\n18시까지`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 8 && date.getHours() < 19) || (date.getHours() == 19 && date.getMinutes() < 30))) {
    return <Text style={styles.nowon}>{`운영중\n9시30분까지`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시부터</Text></View>
  } else if (date.getDay() == 6 && date.getHours() < 10) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>10시부터</Text></View>
  } else if (date.getDay() == 0) {
    return <Text style={styles.nowoff}>{`일요일은\n운영안함`}</Text>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}

function snack() {
  var date = new Date();
  if ((date.getDay() == 6) && ((date.getHours() >= 8 && date.getHours() < 15) || (date.getHours() == 7 && date.getMinutes() >= 30))) {
    return <Text style={styles.nowon}>{`운영중\n15시까지`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 8 && date.getHours() < 19) || (date.getHours() == 7 && date.getMinutes() >= 30))) {
    return <Text style={styles.nowon}>{`운영중\n19시까지`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 7 || (date.getHours() == 7 && date.getMinutes() >= 30))) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>7시30분부터</Text></View>
  } else if (date.getDay() == 6 && (date.getHours() < 7 || (date.getHours() == 7 && date.getMinutes() >= 30))) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>7시30분부터</Text></View>
  } else if (date.getDay() == 0) {
    return <Text style={styles.nowoff}>{`일요일은\n운영안함`}</Text>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}

function vetsnack() {
  var date = new Date();
  if ((date.getDay() == 6) && (date.getHours() >= 9 && date.getHours() < 14)) {
    return <Text style={styles.nowon}>{`운영중\n14시까지`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 9 && date.getHours() < 19)) {
    return <Text style={styles.nowon}>{`운영중\n19시까지`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && date.getHours() < 9) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9시부터</Text></View>
  } else if (date.getDay() == 6 && date.getHours() < 9) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9시부터</Text></View>
  } else if (date.getDay() == 0) {
    return <Text style={styles.nowoff}>{`일요일은\n운영안함`}</Text>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}

function libnn() {
  var date = new Date();
  if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() >= 11 && date.getHours() < 19)) {
    return <Text style={styles.nowon}>{`운영중\n19시까지`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 8 && date.getHours() < 19) || (date.getHours() == 19 && date.getMinutes() < 30))) {
    return <Text style={styles.nowon}>{`운영중\n19시30분까지`}</Text>
  } else if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() < 11)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>11시부터</Text></View>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 8)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}

function fluid() {
  var date = new Date();
  if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() >= 10 && date.getHours() < 15)) {
    return <Text style={styles.nowon}>{`운영중\n15시까지`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 8 && date.getHours() < 19) || (date.getHours() == 19 && date.getMinutes() < 30))) {
    return <Text style={styles.nowon}>{`운영중\n19시30분까지`}</Text>
  } else if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() < 10)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>10시부터</Text></View>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 8)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}

function twosome() {
  var date = new Date();
  if (date.getHours() >= 8 && date.getHours() < 22) {
    return <Text style={styles.nowon}>{`운영중\n22시까지`}</Text>
  } else if (date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}

function pascucci() {
  var date = new Date();
  if (date.getHours() >= 8 && date.getHours() < 22) {
    return <Text style={styles.nowon}>{`운영중\n22시까지`}</Text>
  } else if (date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}

function hollys() {
  var date = new Date();
  if (date.getHours() >= 8 && date.getHours() < 22) {
    return <Text style={styles.nowon}>{`운영중\n22시까지`}</Text>
  } else if (date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}

function quiz() {
  var date = new Date();
  if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() >= 9 && date.getHours() < 19)) {
    return <Text style={styles.nowon}>{`운영중\n19시까지`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 7 && date.getHours() < 20)) {
    return <Text style={styles.nowon}>{`운영중\n20시까지`}</Text>
  } else if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() < 9)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9시부터</Text></View>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 7)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>7시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}

function cafegran() {
  var date = new Date();
  if ((date.getDay() == 0 || date.getDay() == 6) && ((date.getHours() >= 8 && date.getHours() < 21) || (date.getHours() == 7 && date.getMinutes() >= 30))) {
    return <Text style={styles.nowon}>{`운영중\n21시까지`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 8 && date.getHours() < 22) || (date.getHours() == 7 && date.getMinutes() >= 30))) {
    return <Text style={styles.nowon}>{`운영중\n22시까지`}</Text>
  } else if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() < 7 || (date.getHours() == 7 && date.getMinutes() < 30))) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>7시30분부터</Text></View>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 7 || (date.getHours() == 7 && date.getMinutes() < 30))) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>7시30분부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}


export default Cafe;

