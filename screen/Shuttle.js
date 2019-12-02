import React, {Component} from 'react';
import { ScrollView, StyleSheet, Linking, View, Text, TouchableOpacity, Image} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { WebView } from 'react-native-webview';
import SafeAreaView from 'react-native-safe-area-view';
const WEBVIEW_REF = "WEBVIEW_REF";

class Shuttle extends Component { 
    constructor(props) {
        super(props);
        this.state = { canGoBack: false };
      }
    render() {
        const {navigation} = this.props;
        return ( 
        <View style={{flex:1, flexDirection:'column'}}> 
          <View style={{height:getStatusBarHeight()}}/>

         <View style={{height:50, backgroundColor:'rgb(176,155,222)', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
         <TouchableOpacity style={{flex:1, backgroundColor:'rgb(176,155,222)'}} onPress={() => Linking.openURL('https://github.com/DoJunggeun/snuinfoapp/blob/master/screen/lib/img/sttt.jpg')}>
          <View style={{height:50,justifyContent:'center', alignItems:'center'}}><Text style={{color:'white', fontSize:22, fontWeight:'600'}}>셔틀버스 운행시간 전체보기</Text></View>
           </TouchableOpacity></View>

         <View style={{flex:1}} >
        <View style={styles.containerhead}>
          <View style={styles.th}><Text style={styles.thtext}>구간</Text></View>
          <View style={styles.th}><Text style={styles.thtext}>운행시간</Text></View>
          <View style={styles.th}><Text style={styles.thtext}>{`배차간격\n(학기중)`}</Text></View>
          <View style={styles.th}><Text style={styles.thtext}>현재</Text></View>
        </View>

         <ScrollView style={styles.scroll} bounces='false'>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>{`서울대입구역\n↔행정관`}</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>07:00~19:00</Text></View>
          <View style={styles.td}>{ststationinterval()}</View>
          <View style={styles.td}>{ststation()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>{`대학동\n↔행정관`}</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>07:00~19:00</Text></View>
          <View style={styles.td}>{stdhdinterval()}</View>
          <View style={styles.td}>{stdhd()}</View>
        </View>
        <View style={styles.container2}>
        <View style={styles.td}><Text style={styles.tdtext}>{`서울대입구역\n→윗공대`}</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>08:00~11:00</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>7~10분</Text></View>
          <View style={styles.td}>{steng()}</View>
        </View>
        <View style={styles.container}>
        <View style={styles.td}><Text style={styles.tdtext}>{`낙성대\n→윗공대`}</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>08:30~11:00</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>5분</Text></View>
          <View style={styles.td}>{stnsdstation()}</View>
        </View>
        <View style={styles.container2}>
        <View style={styles.td}><Text style={styles.tdtext}>{`사당역\n↔행정관`}</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>08:00~11:00</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>10분</Text></View>
          <View style={styles.td}>{stsdstation()}</View>
        </View>
        <View style={styles.container}>
        <View style={styles.td}><Text style={styles.tdtext}>교내순환</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>08:00~21:00</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>7분~20분</Text></View>
          <View style={styles.td}>{stinner()}</View>
        </View>
        <View style={styles.container2}>
        <View style={styles.td}><Text style={styles.tdtext}>{`교내순환\n역방향`}</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>09:50~17:50</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>30분</Text></View>
          <View style={styles.td}>{stinnerreverse()}</View>
        </View>
        <View style={styles.container}>
        <View style={styles.td}><Text style={styles.tdtext}>{`(야간)행정관→\n서울대입구역`}</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>21:10~23:10</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>30분</Text></View>
          <View style={styles.td}>{stnight()}</View>
        </View>
        <View style={styles.container2}>
        <View style={styles.td}><Text style={styles.tdtext}>{`(야간)행정관\n→대학동`}</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>21:10~23:10</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>30분</Text></View>
          <View style={styles.td}>{stnight()}</View>
        </View>
        <View style={styles.container}>
        <View style={styles.td}><Text style={styles.tdtext}>심야셔틀</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>00:00~02:00</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>30분</Text></View>
          <View style={styles.td}>{stnight2()}</View>
        </View>
        <View style={styles.container} >
          <View style={styles.td}><Text style={styles.thtext}>추후 추가 예정</Text></View>
        </View>
      </ScrollView>
      </View>


          <View style={{height:60, backgroundColor:'rgb(176,155,222)', justifyContent:'space-evenly', flexDirection:'row', alignItems:'center'}}>
            <TouchableOpacity onPress={()=> {navigation.push("Home")}}>
              <Image source={require('./src/home.png')} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {navigation.push("Shuttle")}}>
            <Image source={require('./src/shuttle_w.png')} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {navigation.push("Meal")}}>
            <Image source={require('./src/meal.png')} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {navigation.push("Cafe")}}>
            <Image source={require('./src/cafe.png')} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {navigation.push("Mart")}}>
            <Image source={require('./src/mart.png')} style={styles.icon}/>
            </TouchableOpacity>
 
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
    fontWeight:'800'
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
    color:'black', textAlign:'center', fontSize:14, fontWeight:'500'
  },
  nowon : {
    color:'blue', textAlign:'center', fontSize:14, fontWeight:'500'
  },
  nowwait : {
    color:'green',  textAlign:'center', fontSize:14, fontWeight:'500'
  },
  nowoff :{
    color:'red', textAlign:'center', fontSize:14, fontWeight:'500'
  },
  icon:{
    width:40, height:40
  }
});

function ststation() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>{`주말에는\n운행안함`}</Text>
  } else if (date.getHours() >= 19) {
    return <Text style={styles.nowoff}>운행종료</Text>
  } else if (date.getHours() == 19) {
    return <Text style={styles.nowon}>{`학교→설입\n19시까지`}</Text>
  } else if (date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운행</Text><Text style={styles.nowwait}>7시부터</Text></View>
  } else {
    return <Text style={styles.nowon}>{`운행중\n19시까지`}</Text>
  }
}

function stdhd() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>{`주말에는\n운행안함`}</Text>
  } else if (date.getHours() >= 19) {
    return <Text style={styles.nowoff}>운행종료</Text>
  } else if (date.getHours() == 19) {
    return <Text style={styles.nowon}>{`학교→녹두\n19시까지`}</Text>
  } else if (date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운행</Text><Text style={styles.nowwait}>7시부터</Text></View>
  } else {
    return <Text style={styles.nowon}>{`운행중\n19시까지`}</Text>
  }
}

function stsdstation() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>{`주말에는\n운행안함`}</Text>
  } else if (date.getHours() > 10) {
    return <Text style={styles.nowoff}>운행종료</Text>
  } else if (date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운행</Text><Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowon}>{`운행중\n11시까지`}</Text>
  }
}

function stinner() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>{`주말에는\n운행안함`}</Text>
  } else if (date.getHours() > 20) {
    return <Text style={styles.nowoff}>운행종료</Text>
  } else if (date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운행</Text><Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowon}>{`운행중\n21시까지`}</Text>
  }
}

function stnight() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>{`주말에는\n운행안함`}</Text>
  } else if (date.getHours() > 23 && date.getMinutes() > 10) {
    return <Text style={styles.nowoff}>운행종료</Text>
  } else if (date.getHours() < 21 || ((date.getHours() == 21) && (date.getMinutes() < 10))) {
    return <View><Text style={styles.nowoff}>미운행</Text><Text style={styles.nowwait}>21시10분부터</Text></View>
  } else {
    return <Text style={styles.nowon}>{`운행중\n23시10분까지`}</Text>
  }
}

function stnsdstation() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>{`주말에는\n운행안함`}</Text>
  } else if (date.getHours() > 10) {
    return <Text style={styles.nowoff}>운행종료</Text>
  } else if (date.getHours() < 8 || (date.getHours() == 8 && date.getMinutes() < 30)) {
    return <View><Text style={styles.nowoff}>미운행</Text><Text style={styles.nowwait}>8시30분부터</Text></View>
  } else {
    return <Text style={styles.nowon}>{`운행중\n11시까지`}</Text>
  }
}

function steng() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>{`주말에는\n운행안함`}</Text>
  } else if (date.getHours() > 10) {
    return <Text style={styles.nowoff}>운행종료</Text>
  } else if (date.getHours() < 8) {
  return <View><Text style={styles.nowoff}>미운행</Text><Text style={styles.nowwait}>8시부터</Text></View>
} else {
  return <Text style={styles.nowon}>{`운행중\n11시까지`}</Text>
}
}

function stinnerreverse() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>{`주말에는\n운행안함`}</Text>
  } else if (date.getHours() > 17 || (date.getHours() == 17 && date.getMinutes() > 50)) {
    return <Text style={styles.nowoff}>운행종료</Text>
  } else if (date.getHours() < 9 || (date.getHours() == 9 && date.getMinutes() < 50)) {
  return <View><Text style={styles.nowoff}>미운행</Text><Text style={styles.nowwait}>9시50분부터</Text></View>
} else {
  return <Text style={styles.nowon}>{`운행중\n17시50분까지`}</Text>
}
}

function stnight2() {
  var date = new Date();
  if (date.getDay() == 0 || (date.getDay() == 6 && date.getHours() >= 2)) {
    return <Text style={styles.nowoff}>{`주말에는\n운행안함`}</Text>
  } else if (date.getHours() >= 2) {
    return <View><Text style={styles.nowoff}>미운행</Text><Text style={styles.nowwait}>자정부터</Text></View>
} else {
  return <Text style={styles.nowon}>{`운행중\n02시까지`}</Text>
}
}




function ststationinterval() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.tdtext}>5~15분</Text>
  } else if (date.getHours() > 19 || date.getHours() < 7) {
    return <Text style={styles.tdtext}>5~15분</Text>
  } else if (date.getHours() == 7) {
    return <Text style={styles.tdtext}>15분</Text>
  } else if (date.getHours() >= 8 && date.getHours() < 11) {
    return <Text style={styles.tdtext}>5~7분</Text>
  } else if ((date.getHours() >= 11 && date.getHours() < 15) || (date.getHours() == 15 && date.getMinutes() < 30)) {
    return <Text style={styles.tdtext}>10분</Text>
  } else if (date.getHours() >= 15 || date.getHours() < 17) {
    return <Text style={styles.tdtext}>7~10분</Text>
  } else if (date.getHours() == 17 || date.getHours() == 18) {
    return <Text style={styles.tdtext}>5~7분</Text>
  }
}

function stdhdinterval() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.tdtext}>6~15분</Text>
  } else if (date.getHours() > 19 || date.getHours() < 7) {
    return <Text style={styles.tdtext}>5~15분</Text>
  } else if (date.getHours() == 7) {
    return <Text style={styles.tdtext}>15분</Text>
  } else if (date.getHours() >= 8 && date.getHours() < 10) {
    return <Text style={styles.tdtext}>6분</Text>
  } else if ((date.getHours() >= 10 && date.getHours() < 12) || (date.getHours() == 12 && date.getMinutes() < 10)) {
    return <Text style={styles.tdtext}>10분</Text>
  } else if (date.getHours() == 12 || (date.getHours() == 13 && date.getMinutes() < 30)) {
    return <Text style={styles.tdtext}>15분</Text>
  } else if (date.getHours() >= 13 && date.getHours() < 17) {
    return <Text style={styles.tdtext}>10분</Text>
  } else if (date.getHours() == 17 || date.getHours() == 18) {
    return <Text style={styles.tdtext}>6분</Text>
  }
}

function stinnerinterval() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.tdtext}>7~20분</Text>
  } else if (date.getHours() > 20 || date.getHours() < 7) {
    return <Text style={styles.tdtext}>7~20분</Text>
  } else if (date.getHours() < 19) {
    return <Text style={styles.tdtext}>7분</Text>
  } else if (date.getHours() == 19 || date.getHours() == 20) {
    return <Text style={styles.tdtext}>20분</Text>
  }
}

export default Shuttle;