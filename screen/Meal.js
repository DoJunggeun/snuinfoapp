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

         <View style={{height:50, backgroundColor:'rgb(176,155,222)', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
         <TouchableOpacity style={{flex:53, backgroundColor:'rgb(176,155,222)'}} onPress={() => Linking.openURL('http://snuco.snu.ac.kr/ko/node/20')}>
          <View style={{height:50,justifyContent:'center', alignItems:'center',  borderWidth: 0.5 ,borderColor: 'darkgray',}}><Text style={{color:'white', fontSize:22, fontWeight:'bold'}}>생협 식당 운영시간 전체보기</Text></View></TouchableOpacity>
           {/* <TouchableOpacity style={{flex:47, backgroundColor:'rgb(176,155,222)'}} onPress={() => Linking.openURL('http://snuco.snu.ac.kr/ko/foodmenu')}>
          <View style={{height:50,justifyContent:'center', alignItems:'center',  borderWidth: 0.5 ,borderColor: 'darkgray',}}><Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>생협 식당 메뉴 전체보기</Text></View></TouchableOpacity> */}
           </View>


      <View style={{flex:1}} >
        <View style={styles.containerhead}>
          <View style={styles.th}><Text style={styles.thtext}>식당</Text></View>
          <View style={styles.th}><Text style={styles.thtext}>위치</Text></View>
          <View style={styles.th}><Text style={styles.thtext}>{`운영시간\n(학기중)`}</Text></View>
        </View>

         <ScrollView style={styles.scroll} bounces='false'>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>학생회관 식당</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>{`학생회관(63동)\n1층`}</Text></View>
          <View style={styles.td}>{hgmeal()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>학생회관 9번출구</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>{`학생회관(63동)\n지하 1층`}</Text></View>
          <View style={styles.td}>{hgmeal2()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>자하연식당</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>농협(109동) 2층</Text></View>
          <View style={styles.td}>{nhmeal()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>예술계식당</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>74동 1층</Text></View>
          <View style={styles.td}>{artmeal()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>모두의공간 (공깡)</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>30-2동 1층</Text></View>
          <View style={styles.td}>{gongmeal()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>3식당(농식)</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>75-1동 4층</Text></View>
          <View style={styles.td}>{nsmeal()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>301동 식당</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>301동 지하1층</Text></View>
          <View style={styles.td}>{eng301meal()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>302동 식당</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>302동 1층</Text></View>
          <View style={styles.td}>{eng302meal()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>동원관 식당</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>동원관(113동) 2층</Text></View>
          <View style={styles.td}>{dwgmeal()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>감골식당</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>{`아시아연구소\n(101동) 1층`}</Text></View>
          <View style={styles.td}>{ggmeal()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>4식당</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>76동 1층</Text></View>
          <View style={styles.td}>{edumeal()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>220동 식당</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>220동 지하 1층</Text></View>
          <View style={styles.td}>{meal220()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>기숙사 식당</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>919동 1층</Text></View>
          <View style={styles.td}>{dormmeal()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>아워홈 식당</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>901 1층</Text></View>
          <View style={styles.td}>{dormmeal()}</View>
        </View>
        <View style={styles.containerhead} >
          <View style={styles.td}><Text style={styles.thtext}>학내 음식점</Text></View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text style={styles.tdtext}>라운지오</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>동원관(113동) 1층</Text></View>
          <View style={styles.td}>{loungeo()}</View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text style={styles.tdtext}>샤반</Text></View>
          <View style={styles.td}><Text style={styles.tdtext}>501동 1층</Text></View>
          <View style={styles.td}>{shaban()}</View>
        </View>
        <View style={styles.container} >
          <View style={styles.td}><Text style={styles.thtext}>추가 예정 : 비비큐카페, 소담마루 등</Text></View>
        </View>

      </ScrollView>
      </View>

      <View style={{height:60, backgroundColor:'rgb(176,155,222)', justifyContent:'space-evenly', flexDirection:'row', alignItems:'center'}}>
            <TouchableOpacity onPress={()=> {navigation.push("Home")}}>
              <Image source={require('./src/home.png')} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {navigation.push("Shuttle")}}>
            <Image source={require('./src/shuttle.png')} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {navigation.push("Meal")}}>
            <Image source={require('./src/meal_w.png')} style={styles.icon}/>
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

function dormmeal() {
  var date = new Date()
  if (date.getDay() == 0 || date.getDay() == 6) {
    if (date.getHours() < 8) {
      return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시 아침시작</Text></View>
    } else if (date.getHours() == 8 || (date.getHours() == 9 && date.getMinutes() < 30)) {
      return <Text style={styles.nowon}>운영중{'\n'}9시30분까지</Text>
    } else if ((date.getHours() == 9 && date.getMinutes() >= 30) || date.getHours() == 10 || (date.getHours() == 11 && date.getMinutes() < 30)) {
      return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>11시30분 점심시작</Text></View>
    } else if ((date.getHours() == 11 && date.getMinutes() >= 30) || date.getHours() == 12 || (date.getHours() == 13 && date.getMinutes() < 30)) {
      return <Text style={styles.nowon}>운영중{'\n'}13시30분까지</Text>
    } else if ((date.getHours() == 13 && date.getMinutes() >= 30) || (date.getHours() >= 14 && date.getHours() < 17) || (date.getHours() == 17 && date.getMinutes() < 30)) {
      return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>17시30분 저녁시작</Text></View>
    } else if ((date.getHours() == 17 && date.getMinutes() >= 30) || date.getHours() == 18 || (date.getHours() == 19 && date.getMinutes() < 30)) {
      return <Text style={styles.nowon}>운영중{'\n'}19시30분까지</Text>
    } else {
      return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
    }
  } else {
    if (date.getHours() < 7 || (date.getHours() == 7 && date.getMinutes() < 30)) {
      return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>7시30분 아침시작</Text></View>
    } else if ((date.getHours() == 7 && date.getMinutes() >= 30) || (date.getHours() == 9 && date.getMinutes() < 30)) {
      return <Text style={styles.nowon}>운영중{'\n'}9시30분까지</Text>
    } else if ((date.getHours() == 9 && date.getMinutes() >= 30) || date.getHours() == 10 || (date.getHours() == 11 && date.getMinutes() < 30)) {
      return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>11시30분 점심시작</Text></View>
    } else if ((date.getHours() == 11 && date.getMinutes() >= 30) || date.getHours() == 12 || (date.getHours() == 13 && date.getMinutes() < 30)) {
      return <Text style={styles.nowon}>운영중{'\n'}13시30분까지</Text>
    } else if ((date.getHours() == 13 && date.getMinutes() >= 30) || (date.getHours() >= 14 && date.getHours() < 17) || (date.getHours() == 17 && date.getMinutes() < 30)) {
      return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>17시30분 저녁시작</Text></View>
    } else if ((date.getHours() == 17 && date.getMinutes() >= 30) || date.getHours() == 18 || (date.getHours() == 19 && date.getMinutes() < 30)) {
      return <Text style={styles.nowon}>운영중{'\n'}19시30분까지</Text>
    } else {
      return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
    }
  }
}

function hgmeal() {
  var date = new Date()
  if (date.getDay() > 0 && date.getDay() < 6) {
    if (date.getHours() < 8) {
      return <View><Text style={styles.nowoff}>미운영</Text>
      <Text style={styles.nowwait}>8시 아침시작</Text></View>
    } else if (date.getHours() >= 8 && date.getHours() < 10) {
      return <Text style={{color:'blue',fontWeight:'bold', textAlign:'center'}}>운영중{'\n'}10시까지</Text>
    } else if (date.getHours() == 10) {
      return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>11시 점심시작</Text></View>
    } else if (date.getHours() >= 11 && date.getHours() < 15) {
      return <Text style={styles.nowon}>운영중{'\n'}15시까지</Text>
    } else if (date.getHours() == 16) {
      return <View><Text style={styles.nowoff}>미운영</Text><Text style={{color:'green',fontWeight:'bold', textAlign:'center'}}>17시 저녁시작</Text></View>
    } else if (date.getHours() == 17 || date.getHours() == 18 || (date.getHours() == 19 && date.getMinutes() < 1)) {
      return <Text style={{color:'blue',fontWeight:'bold', textAlign:'center'}}>운영중{'\n'}19시까지</Text>
    } else {
      return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
    }
  } else {
    if (date.getHours() < 11 || (date.getHours() == 11 && date.getMinutes() < 30)) {
      return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>11시30분 점심시작</Text></View>
    } else if ((date.getHours() == 11 && date.getMinutes() >= 30) || date.getHours() == 12 || date.getHours() == 13) {
      return <Text style={{color:'blue',fontWeight:'bold', textAlign:'center'}}>운영중{'\n'}14시까지</Text>
    } else if (date.getHours() >= 14 && date.getHours() < 17) {
      return <View><Text style={styles.nowoff}>미운영</Text><Text style={{color:'green',fontWeight:'bold', textAlign:'center'}}>17시 저녁시작</Text></View>
    } else if (date.getHours() >= 17 && date.getHours() < 19) {
      return <Text style={{color:'blue',fontWeight:'bold', textAlign:'center'}}>운영중{'\n'}19시까지</Text>
    } else {
      return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
    }
  }
} 

function hgmeal2() {
  var date = new Date()
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>주말에는{'\n'}운영안함</Text>
  } else if ((date.getHours() >= 11 && date.getHours() < 13) || (date.getHours() == 13 && date.getMinutes() < 30)) {
    return <Text style={{textAlign:'center', color:'blue', fontWeight:'bold', textAlign:'center'}}>운영중{'\n'}13시30분까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 14 && date.getHours() < 18)) {
    return <Text style={styles.nowon}>운영중(분식){'\n'}18시까지</Text>
  } else if (date.getHours() < 11) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>11시 점심시작</Text></View>
  } else if (date.getHours() == 13) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>14시 9출시작</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
  }
}

function gongmeal() {
  var date = new Date()
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>주말에는{'\n'}운영안함</Text>
  } else if (date.getHours() >= 11 && date.getHours() < 19) {
    return <Text style={styles.nowon}>운영중{'\n'}19시까지</Text>
  } else if (date.getHours() < 11) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>11시 운영시작</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
  }
}

function eng302meal() {
  var date = new Date()
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>주말에는{'\n'}운영안함</Text>
  } else if ((date.getHours() > 11 && date.getHours() < 14) || (date.getHours() == 11 && date.getMinutes() >= 15)) {
    return <Text style={styles.nowon}>운영중{'\n'}14시까지</Text>
  } else if (date.getHours() >= 17 && date.getHours() < 19) {
    return <Text style={styles.nowon}>운영중{'\n'}19시까지</Text>
  } else if (date.getHours() < 11 || (date.getHours() == 11 && date.getMinutes() < 15)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>11시15분 점심시작</Text></View>
  } else if (date.getHours() < 17 && date.getHours() >= 14) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>17시 저녁시작</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료</Text>
  }
}

function eng301meal() {
  var date = new Date()
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>주말에는{'\n'}운영안함</Text>
  } else if (date.getHours() >= 11 && date.getHours() < 14) {
    return <Text style={styles.nowon}>운영중{'\n'}14시까지</Text>
  } else if (date.getHours() >= 17 && date.getHours() < 19) {
    return <Text style={styles.nowon}>운영중{'\n'}19시까지</Text>
  } else if (date.getHours() < 11) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>11시 점심시작</Text></View>
  } else if (date.getHours() < 17 && date.getHours() >= 14) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>17시 저녁시작</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료</Text>
  }
}

function artmeal() {
  var date = new Date()
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>주말에는{'\n'}운영안함</Text>
  } else if ((date.getHours() == 11 && date.getMinutes() >= 30) || (date.getHours() > 11 && date.getHours() < 14)) {
    return <Text style={styles.nowon}>운영중{'\n'}14시까지</Text>
  } else if (date.getHours() >= 17 && date.getHours() < 19) {
    return <Text style={styles.nowon}>운영중{'\n'}19시까지</Text>
  } else if (date.getHours() < 11 || (date.getHours() == 11 && date.getMinutes() < 30)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>11시30분 점심시작</Text></View>
  } else if (date.getHours() < 17 && date.getHours() >= 14) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>17시 저녁시작</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료</Text>
  }
}


function ggmeal() {
  var date = new Date()
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>주말에는{'\n'}운영안함</Text>
  } else if (date.getHours() >= 11 && date.getHours() < 14) {
    return <Text style={styles.nowon}>운영중{'\n'}14시까지</Text>
  } else if ((date.getHours() >= 17 && date.getHours() < 18) || (date.getHours() == 18 && date.getMinutes() < 30)) {
    return <Text style={styles.nowon}>운영중{'\n'}18시30분까지</Text>
  } else if (date.getHours() < 11) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>11시 점심시작</Text></View>
  } else if (date.getHours() < 17 && date.getHours() >= 14) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>17시 저녁시작</Text></View>
  } else {
    return <Text style={styles.nowoff}>미운영</Text>
  }
}


function nsmeal() {
  return m11141719()
}

function nhmeal() {
  return m11141719()
}

function dwgmeal() {
  var date = new Date()
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>주말에는{'\n'}운영안함</Text>
  } else if (date.getHours() >= 11 && date.getHours() < 14) {
    return <Text style={styles.nowon}>운영중{'\n'}14시까지</Text>
  } else if (date.getHours() < 11) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>11시 점심시작</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료</Text>
  }
}

function edumeal() {
  return m11141719()
}

function meal220() {
  return m11141719()
}

function m11141719() {
  var date = new Date()
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>주말에는{'\n'}운영안함</Text>
  } else if (date.getHours() >= 11 && date.getHours() < 14) {
    return <Text style={styles.nowon}>운영중{'\n'}14시까지</Text>
  } else if (date.getHours() >= 17 && date.getHours() < 19) {
    return <Text style={styles.nowon}>운영중{'\n'}19시까지</Text>
  } else if (date.getHours() < 11) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>11시 점심시작</Text></View>
  } else if (date.getHours() < 17 && date.getHours() >= 14) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>17시 저녁시작</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료</Text>
  }
}


function loungeo() {
  var date = new Date()
  if (date.getHours() >= 11 && date.getHours() < 21) {
    return <Text style={styles.nowon}>운영중{'\n'}21시까지</Text>
  } else if (date.getHours() < 11) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>11시 운영시작</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
  }
}

function shaban() {  
  var date = new Date()
  if (date.getDay() == 0) {
    return <Text style={styles.nowoff}>일요일은{'\n'}운영안함</Text>
  } else if (date.getDay() == 6) {
    if (date.getHours() < 11 || (date.getHours() == 11 && date.getMinutes() < 30)) {
      return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>11시30분 점심시작</Text></View>
    } else if ((date.getHours() >= 12 && date.getHours() < 14) || (date.getHours() == 11 && date.getMinutes() >= 30)) {
      return <Text style={styles.nowon}>운영중{'\n'}14시까지</Text>
    } else {
      return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
    }
  } else if (date.getHours() < 11) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>11시 점심시작</Text></View>
  } else if ((date.getHours() >= 11 && date.getHours() < 14) || (date.getHours() == 14 && date.getMinutes() < 30)) {
    return <Text style={styles.nowon}>운영중{'\n'}14시30분까지</Text>
  } else if ((date.getHours() == 14 && date.getMinutes() >= 30) || date.getHours() == 15 || (date.getHours() == 16 && date.getMinutes() < 30)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>16시30분 저녁시작</Text></View>
  } else if ((date.getHours() >= 17 && date.getHours() < 20) || (date.getHours() == 16 && date.getMinutes() >= 30)) {
    return <Text style={styles.nowon}>운영중{'\n'}20시까지</Text>
  } else {
    return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
  }
}

export default Meal;

