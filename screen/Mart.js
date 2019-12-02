import React, {Component} from 'react';
import { ScrollView, StyleSheet, Linking, View, Text, TouchableOpacity, Image} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { WebView } from 'react-native-webview';
import SafeAreaView from 'react-native-safe-area-view';
const WEBVIEW_REF = "WEBVIEW_REF";


class Mart extends Component { 
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
         <TouchableOpacity style={{flex:1, backgroundColor:'#f1f1f1'}} onPress={() => Linking.openURL('http://snuco.snu.ac.kr/ko/node/19')}>
          <View style={{height:50,justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:19, fontWeight:'600'}}>생협 편의점/매점 운영시간 전체보기</Text></View>
           </TouchableOpacity></View>
         {/* <WebView source={{ uri: 'https://dojunggeun.github.io/snuinfo/conv.html' }} style={{flex:10}} ref={WEBVIEW_REF} onNavigationStateChange={this.onNavigationStateChange.bind(this)}  bounces='false'/> */}

         <View style={{flex:1}} >
        <View style={styles.containerhead}>
          <View style={styles.th}><Text style={styles.thtext}>매장</Text></View>
          <View style={styles.th}><Text style={styles.thtext}>위치</Text></View>
          <View style={styles.th}><Text style={styles.thtext}>{`운영시간\n(학기중)`}</Text></View>
        </View>

         <ScrollView style={styles.scroll} bounces='false'>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>학생회관 매점</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>{`학생회관(63동)\n1층`}</Text></View>
          <View style={styles.td}>{hgconv()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>학생회관 문구점</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>{`학생회관(63동)\n2층`}</Text></View>
          <View style={styles.td}>{hgmg()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>중도CU</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>중도(62동) 3층</Text></View>
          <View style={styles.td}>{jdCU()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>농식 매점</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>75-1동 4층</Text></View>
          <View style={styles.td}>{nsconv()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>{`스누플렉스\n(복합매장)`}</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>{`아시아연구소\n101동 1층`}</Text></View>
          <View style={styles.td}>{snuplex()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>동원관매점</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>동원관(113동) 1층</Text></View>
          <View style={styles.td}>{dwgconv()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>220동 편의점</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>220동 지하1층</Text></View>
          <View style={styles.td}>{eeoconv()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>301동 CU</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>301동 지하1층</Text></View>
          <View style={styles.td}>{engCU()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>500동 매점</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>500동 1층</Text></View>
          <View style={styles.td}>{cnsconv()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>기숙사 매점</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>{`관악사\n919동 1층`}</Text></View>
          <View style={styles.td}>{dormconv()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>기숙사 GS25</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>900동 지하2층</Text></View>
          <View style={styles.td}>{allday()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>글로벌 CU</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>{`글로벌생활관\n916동 지하1층`}</Text></View>
          <View style={styles.td}>{allday()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>수의대 휴게매점</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>85동 3층</Text></View>
          <View style={styles.td}>{vetconv()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>의대 CU</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>융합관(8동) 2층</Text></View>
          <View style={styles.td}>{medconv()}</View>
        </View>
        <View style={styles.container} >
          <View style={styles.td}><Text style={styles.thtext}>추후 추가 예정</Text></View>
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
    alignItems: 'center',
  },
  containerhead: {
    height:60,
    justifyContent: 'space-around',
    backgroundColor: 'darkgray',
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
    borderColor: '#d6d7da',
    alignItems: 'center',
  },
  thtext: {
    alignItems: 'center',
    justifyContent:'center',
    fontSize:18, 
    fontWeight:'800'
  },
  td: {
    flex:1, 
    height: 60,
    justifyContent: 'space-around',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
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
  }
});

function hgconv() {
  var date = new Date();
  if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() >= 10 && date.getHours() < 19)) {
    return <Text style={styles.nowon}>{`운영중\n19시까지`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 8 && date.getHours() < 19) || (date.getHours() == 19 && date.getMinutes() < 30))) {
    return <Text style={styles.nowon}>{`운영중\n19시30분까지`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() == 19 && date.getHours() < 19)) {
    return <Text style={styles.nowon}>{`운영중\n19시30분까지`}</Text>
  } else if ((date.getDay() == 0 || date.getDay() == 6) && date.getHours() < 10) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>10시부터</Text></View>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}

function hgmg() {
  var date = new Date();
  if ((date.getDay() == 6) && (date.getHours() >= 10 && date.getHours() < 17)) {
    return <Text style={styles.nowon}>{`운영중\n17시까지`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 9 && date.getHours() < 18) || (date.getHours() == 18 && date.getMinutes() < 30))) {
    return <Text style={styles.nowon}>{`운영중\n18시30분까지`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && date.getHours() < 9) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9시부터</Text></View>
  } else if (date.getDay() == 6 && date.getHours() < 10) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>10시부터</Text></View>
  } else if (date.getDay() == 0) {
    return <Text style={styles.nowoff}>{`일요일은\n운영안함`}</Text>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}

function jdCU() {
  var date = new Date();
  if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() >= 8 && date.getHours() < 20)) {
    return <Text style={styles.nowon}>{`운영중\n20시까지`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 8 && date.getHours() < 22)) {
    return <Text style={styles.nowon}>{`운영중\n22시까지`}</Text>
  } else if (date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}

function nsconv() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>{`주말에는\n운영안함`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 10 && date.getHours() < 19)) {
    return <Text style={styles.nowon}>{`운영중\n19시까지`}</Text>
  } else if (date.getHours() < 10) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>10시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}

function snuplex() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>{`주말에는\n운영안함`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 9 && date.getHours() < 18) || (date.getHours() == 18 && date.getMinutes() < 30))) {
    return <Text style={styles.nowon}>{`운영중\n18시30분까지`}</Text>
  } else if (date.getHours() < 9) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}

function dwgconv() {
  var date = new Date();
  if (date.getDay() == 0) {
    return <Text style={styles.nowoff}>{`일요일은\n운영안함`}</Text>
  } else if ((date.getDay() == 6) && (date.getHours() >= 9 && date.getHours() < 17)) {
    return <Text style={styles.nowon}>{`운영중\n17시까지`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 8 && date.getHours() < 17) || (date.getHours() == 17 && date.getMinutes() < 30))) {
    return <Text style={styles.nowon}>{`운영중\n19시30분까지`}</Text>
  } else if (date.getDay() == 6 && date.getHours() < 9) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9시부터</Text></View>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 8)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}


function eeoconv() {
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


function engCU() {
  var date = new Date();
  if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() >= 9 && date.getHours() < 18)) {
    return <Text style={styles.nowon}>{`운영중\n18시까지`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 8 && date.getHours() < 22)) {
    return <Text style={styles.nowon}>{`운영중\n22시까지`}</Text>
  } else if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() < 9)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9시부터</Text></View>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 8)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}


function cnsconv() {
  var date = new Date();
  if (date.getDay() == 0) {
    return <Text style={styles.nowoff}>{`일요일은\n운영안함`}</Text>
  } else if ((date.getDay() == 6) && (date.getHours() >= 10 && date.getHours() < 17)) {
    return <Text style={styles.nowon}>{`운영중\n17시까지`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 8 && date.getHours() < 19) || (date.getHours() == 19 && date.getMinutes() < 30))) {
    return <Text style={styles.nowon}>{`운영중\n19시30분까지`}</Text>
  } else if (date.getDay() == 6 && date.getHours() < 10) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>10시부터</Text></View>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() < 8) || (date.getHours() == 8 && date.getMinutes() < 30))) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시30분부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}

function dormconv() {
  var date = new Date();
  if (date.getHours() >= 8 && date.getHours() < 24) {
    return <Text style={styles.nowon}>{`운영중\n밤1시반까지`}</Text>
  } else if (date.getHours() == 0 || (date.getHours() == 1 && date.getMinutes() < 30)) {
    return <Text style={styles.nowon}>{`운영중\n밤1시반까지`}</Text>
  } else if (date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시부터</Text></View>
  }
}

function vetconv() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>{`주말에는\n운영안함`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 9 && date.getHours() < 18)) {
    return <Text style={styles.nowon}>{`운영중\n18시까지`}</Text>
  } else if (date.getHours() < 9) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}

function medconv() {
  var date = new Date();
  if (date.getDay() == 0) {
    return <Text style={styles.nowoff}>{`일요일은\n운영안함`}</Text>
  } else if ((date.getDay() == 6) && (date.getHours() >= 9 && date.getHours() < 18)) {
    return <Text style={styles.nowon}>{`운영중\n18시까지`}</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 8 && date.getHours() < 22)) {
    return <Text style={styles.nowon}>{`운영중\n22시까지`}</Text>
  } else if ((date.getDay() == 6) && (date.getHours() < 9)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9시부터</Text></View>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 8)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
  }
}

function allday(){
  return <Text style={styles.nowon}>24시간운영</Text>
}

export default Mart;

