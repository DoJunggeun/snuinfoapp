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

         {/* <WebView source={{ uri: 'https://dojunggeun.github.io/snuinfo/meal.html' }} style={{flex:1}} ref={WEBVIEW_REF} onNavigationStateChange={this.onNavigationStateChange.bind(this)} bounces='false'/> */}

      <View style={{flex:1, textAlign:'center'}} >
        <View style={styles.container} >
          <View style={styles.th}><Text style={styles.thtext}>식당</Text></View>
          <View style={styles.th}><Text style={styles.thtext}>위치</Text></View>
          <View style={styles.th}><Text style={styles.thtext}>현재(학기중)</Text></View>
        </View>

         <ScrollView style={{flex:1, backgroundColor:'#f1f1f1'}} bounces='false'>
        <View style={styles.container2}>
          <View style={styles.td}><Text>학생회관 식당</Text></View>
          <View style={styles.td}><Text>학생회관(63동) 1층</Text></View>
          <View style={styles.td}>{hgmeal()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text>학생회관 9번출구</Text></View>
          <View style={styles.td}><Text>{`학생회관(63동)\n지하 1층`}</Text></View>
          <View style={styles.td}><Text>{hgmeal2()}</Text></View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text>자하연식당</Text></View>
          <View style={styles.td}><Text>농협(109동) 2층</Text></View>
          <View style={styles.td}><Text>{nhmeal()}</Text></View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text>예술계식당</Text></View>
          <View style={styles.td}><Text>74동 1층</Text></View>
          <View style={styles.td}><Text>{artmeal()}</Text></View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text>모두의공간 (공깡)</Text></View>
          <View style={styles.td}><Text>30-2동 1층</Text></View>
          <View style={styles.td}><Text>{gongmeal()}</Text></View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text>3식당(농식)</Text></View>
          <View style={styles.td}><Text>75-1동 4층</Text></View>
          <View style={styles.td}><Text>{nsmeal()}</Text></View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text>301동 식당</Text></View>
          <View style={styles.td}><Text>301동 지하1층</Text></View>
          <View style={styles.td}><Text>{eng301meal()}</Text></View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text>302동 식당</Text></View>
          <View style={styles.td}><Text>302동 1층</Text></View>
          <View style={styles.td}><Text>{eng302meal()}</Text></View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text>동원관 식당</Text></View>
          <View style={styles.td}><Text>동원관(113동) 2층</Text></View>
          <View style={styles.td}><Text>{dwgmeal()}</Text></View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text>감골식당</Text></View>
          <View style={styles.td}><Text>{`아시아연구소\n(101동) 1층`}</Text></View>
          <View style={styles.td}><Text>{ggmeal()}</Text></View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text>4식당</Text></View>
          <View style={styles.td}><Text>76동 1층</Text></View>
          <View style={styles.td}><Text>{edumeal()}</Text></View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text>220동 식당</Text></View>
          <View style={styles.td}><Text>220동 지하 1층</Text></View>
          <View style={styles.td}><Text>{meal220()}</Text></View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text>기숙사 식당</Text></View>
          <View style={styles.td}><Text>919동 1층</Text></View>
          <View style={styles.td}><Text>{dormmeal()}</Text></View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text>아워홈 식당</Text></View>
          <View style={styles.td}><Text>901 1층</Text></View>
          <View style={styles.td}><Text>{dormmeal()}</Text></View>
        </View>
        <View style={styles.container2} >
          <View style={styles.td}><Text style={styles.thtext}>학내 음식점</Text></View>
        </View>
        <View style={styles.container}>
          <View style={styles.td}><Text>라운지오</Text></View>
          <View style={styles.td}><Text>동원관(113동) 1층</Text></View>
          <View style={styles.td}><Text>{loungeo()}</Text></View>
        </View>
        <View style={styles.container2}>
          <View style={styles.td}><Text>샤반</Text></View>
          <View style={styles.td}><Text>501동 1층</Text></View>
          <View style={styles.td}><Text>{shaban()}</Text></View>
        </View>
        <View style={styles.container} >
          <View style={styles.td}><Text style={styles.thtext}>추가 예정 : 비비큐카페, 소담마루 등</Text></View>
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
    textAlign: 'center'
  },
  container2: {
    height:60,
    justifyContent: 'space-around',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center'
  },
  th: {
    flex:1, 
    alignItems:'center',
    justifyContent: 'space-around',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    height:60,
    textAlign: 'center'
  },
  thtext: {
    fontSize:15, 
    fontWeight:'600', 
  },
  td: {
    flex:1, 
    alignItems:'center',
    justifyContent: 'space-around',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    height:60,
    textAlign: 'center'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

function dormmeal() {
  var date = new Date()
  if (date.getDay() == 0 || date.getDay() == 6) {
    if (date.getHours() < 8) {
      return <View><Text style={{color:'red'}}>미운영{'\n'}</Text><Text style={{color:'green', fontWeight:'bold'}}>8시부터{'\n'}아침시작</Text></View>
    } else if (date.getHours() == 8 || (date.getHours() == 9 && date.getMinutes() < 30)) {
      return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}9시30분까지</Text>
    } else if ((date.getHours() == 9 && date.getMinutes() >= 30) || date.getHours() == 10 || (date.getHours() == 11 && date.getMinutes() < 30)) {
      return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시30분부터{'\n'}점심시작</Text></View>
    } else if ((date.getHours() == 11 && date.getMinutes() >= 30) || date.getHours() == 12 || (date.getHours() == 13 && date.getMinutes() < 30)) {
      return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}13시30분까지</Text>
    } else if ((date.getHours() == 13 && date.getMinutes() >= 30) || (date.getHours() >= 14 && date.getHours() < 17) || (date.getHours() == 17 && date.getMinutes() < 30)) {
      return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>17시30분부터{'\n'}저녁시작</Text></View>
    } else if ((date.getHours() == 17 && date.getMinutes() >= 30) || date.getHours() == 18 || (date.getHours() == 19 && date.getMinutes() < 30)) {
      return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}19시30분까지</Text>
    } else {
      return <Text style={{color:'red'}}>운영종료{'\n'}오늘은끝</Text>
    }
  } else {
    if (date.getHours() < 7 || (date.getHours() == 7 && date.getMinutes() < 30)) {
      return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>7시30분부터{'\n'}아침시작</Text></View>
    } else if ((date.getHours() == 7 && date.getMinutes() >= 30) || (date.getHours() == 9 && date.getMinutes() < 30)) {
      return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}9시30분까지</Text>
    } else if ((date.getHours() == 9 && date.getMinutes() >= 30) || date.getHours() == 10 || (date.getHours() == 11 && date.getMinutes() < 30)) {
      return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시30분부터{'\n'}점심시작</Text></View>
    } else if ((date.getHours() == 11 && date.getMinutes() >= 30) || date.getHours() == 12 || (date.getHours() == 13 && date.getMinutes() < 30)) {
      return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}13시30분까지</Text>
    } else if ((date.getHours() == 13 && date.getMinutes() >= 30) || (date.getHours() >= 14 && date.getHours() < 17) || (date.getHours() == 17 && date.getMinutes() < 30)) {
      return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>17시30분부터{'\n'}저녁시작</Text></View>
    } else if ((date.getHours() == 17 && date.getMinutes() >= 30) || date.getHours() == 18 || (date.getHours() == 19 && date.getMinutes() < 30)) {
      return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}19시30분까지</Text>
    } else {
      return <Text style={{color:'red'}}>운영종료{'\n'}오늘은끝</Text>
    }
  }
}

function hgmeal() {
  var date = new Date()
  if (date.getDay() > 0 && date.getDay() < 6) {
    if (date.getHours() < 8) {
      return <View><Text style={{color:'red'}}>미운영</Text>
      <Text style={{color:'green', fontWeight:'bold'}}>8시부터{'\n'}아침시작</Text></View>
    } else if (date.getHours() >= 8 && date.getHours() < 10) {
      return <Text style={{color:'blue',fontWeight:'bold'}}>운영중{'\n'}10시까지</Text>
    } else if (date.getHours() == 10) {
      return <View><Text style={{color:'red'}}>미운영{'\n'}</Text><Text style={{color:'green', fontWeight:'bold'}}>11시부터{'\n'}점심시작</Text></View>
    } else if (date.getHours() >= 11 && date.getHours() < 15) {
      return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}15시까지</Text>
    } else if (date.getHours() == 16) {
      return <View><Text style={{color:'red'}}>미운영{'\n'}</Text><Text style={{color:'green',fontWeight:'bold'}}>17시부터{'\n'}저녁시작</Text></View>
    } else if (date.getHours() == 17 || date.getHours() == 18 || (date.getHours() == 19 && date.getMinutes() < 1)) {
      return <Text style={{color:'blue',fontWeight:'bold'}}>운영중{'\n'}19시까지</Text>
    } else {
      return <Text style={{color:'red'}}>운영종료{'\n'}오늘은끝</Text>
    }
  } else {
    if (date.getHours() < 11 || (date.getHours() == 11 && date.getMinutes() < 30)) {
      return <View><Text style={{color:red}}>미운영{'\n'}</Text><Text style={{color:'green', fontWeight:'bold'}}>11시30분부터{'\n'}점심시작</Text></View>
    } else if ((date.getHours() == 11 && date.getMinutes() >= 30) || date.getHours() == 12 || date.getHours() == 13) {
      return <Text style={{color:'blue',fontWeight:'bold'}}>운영중{'\n'}14시까지</Text>
    } else if (date.getHours() >= 14 && date.getHours() < 17) {
      return <View><Text style={{color:red}}>미운영{'\n'}</Text><Text style={{color:'green',fontWeight:'bold'}}>17시부터{'\n'}저녁시작</Text></View>
    } else if (date.getHours() >= 17 && date.getHours() < 19) {
      return <Text style={{color:'blue',fontWeight:'bold'}}>운영중{'\n'}19시까지</Text>
    } else {
      return <Text style={{color:red}}>운영종료{'\n'}오늘은끝</Text>
    }
  }
} 

function hgmeal2() {
  var date = new Date()
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={{color:'red'}}>주말에는{'\n'}운영안함</Text>
  } else if ((date.getHours() >= 11 && date.getHours() < 13) || (date.getHours() == 13 && date.getMinutes() < 30)) {
    return <Text style={{alignItems:'center', justifyContent:'center', color:'blue', fontWeight:'bold'}}>운영중{'\n'}13시30분까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 14 && date.getHours() < 18)) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중(분식){'\n'}18시까지</Text>
  } else if (date.getHours() < 11) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시부터{'\n'}점심시작</Text></View>
  } else if (date.getHours() == 13) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>14시부터{'\n'}9출시작</Text></View>
  } else {
    return <Text style={{color:'red'}}>운영종료{'\n'}오늘은끝</Text>
  }
}

function gongmeal() {
  var date = new Date()
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={{color:'red'}}>주말에는{'\n'}운영안함</Text>
  } else if (date.getHours() >= 11 && date.getHours() < 19) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}19시까지</Text>
  } else if (date.getHours() < 11) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시부터{'\n'}운영시작</Text></View>
  } else {
    return <Text style={{color:'red'}}>운영종료{'\n'}오늘은끝</Text>
  }
}

function eng302meal() {
  var date = new Date()
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={{color:'red'}}>주말에는{'\n'}운영안함</Text>
  } else if ((date.getHours() > 11 && date.getHours() < 14) || (date.getHours() == 11 && date.getMinutes() >= 15)) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}14시까지</Text>
  } else if (date.getHours() >= 17 && date.getHours() < 19) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}19시까지</Text>
  } else if (date.getHours() < 11 || (date.getHours() == 11 && date.getMinutes() < 15)) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시15분부터{'\n'}점심시작</Text></View>
  } else if (date.getHours() < 17 && date.getHours() >= 14) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>17시부터{'\n'}저녁시작</Text></View>
  } else {
    return <Text style={{color:'red'}}>운영종료</Text>
  }
}

function eng301meal() {
  var date = new Date()
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={{color:'red'}}>주말에는{'\n'}운영안함</Text>
  } else if (date.getHours() >= 11 && date.getHours() < 14) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}14시까지</Text>
  } else if (date.getHours() >= 17 && date.getHours() < 19) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}19시까지</Text>
  } else if (date.getHours() < 11) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시부터{'\n'}점심시작</Text></View>
  } else if (date.getHours() < 17 && date.getHours() >= 14) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>17시부터{'\n'}저녁시작</Text></View>
  } else {
    return <Text style={{color:'red'}}>운영종료</Text>
  }
}

function artmeal() {
  var date = new Date()
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={{color:'red'}}>주말에는{'\n'}운영안함</Text>
  } else if ((date.getHours() == 11 && date.getMinutes() >= 30) || (date.getHours() > 11 && date.getHours() < 14)) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}14시까지</Text>
  } else if (date.getHours() >= 17 && date.getHours() < 19) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}19시까지</Text>
  } else if (date.getHours() < 11 || (date.getHours() == 11 && date.getMinutes() < 30)) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시30분부터{'\n'}점심시작</Text></View>
  } else if (date.getHours() < 17 && date.getHours() >= 14) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>17시부터{'\n'}저녁시작</Text></View>
  } else {
    return <Text style={{color:'red'}}>운영종료</Text>
  }
}


function ggmeal() {
  var date = new Date()
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={{color:'red'}}>주말에는{'\n'}운영안함</Text>
  } else if (date.getHours() >= 11 && date.getHours() < 14) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}14시까지</Text>
  } else if ((date.getHours() >= 17 && date.getHours() < 18) || (date.getHours() == 18 && date.getMinutes() < 30)) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}18시30분까지</Text>
  } else if (date.getHours() < 11) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시부터{'\n'}점심시작</Text></View>
  } else if (date.getHours() < 17 && date.getHours() >= 14) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>17시부터{'\n'}저녁시작</Text></View>
  } else {
    return <Text style={{color:'red'}}>미운영</Text>
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
    return <Text style={{color:'red'}}>주말에는{'\n'}운영안함</Text>
  } else if (date.getHours() >= 11 && date.getHours() < 14) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}14시까지</Text>
  } else if (date.getHours() < 11) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시부터{'\n'}점심시작</Text></View>
  } else {
    return <Text style={{color:'red'}}>운영종료</Text>
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
    return <Text style={{color:'red'}}>주말에는{'\n'}운영안함</Text>
  } else if (date.getHours() >= 11 && date.getHours() < 14) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}14시까지</Text>
  } else if (date.getHours() >= 17 && date.getHours() < 19) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}19시까지</Text>
  } else if (date.getHours() < 11) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시부터{'\n'}점심시작</Text></View>
  } else if (date.getHours() < 17 && date.getHours() >= 14) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>17시부터{'\n'}저녁시작</Text></View>
  } else {
    return <Text style={{color:'red'}}>운영종료</Text>
  }
}


function loungeo() {
  var date = new Date()
  if (date.getHours() >= 11 && date.getHours() < 21) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}21시까지</Text>
  } else if (date.getHours() < 11) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시부터{'\n'}운영시작</Text></View>
  } else {
    return <Text style={{color:'red'}}>운영종료{'\n'}오늘은끝</Text>
  }
}

function shaban() {  
  var date = new Date()
  if (date.getDay() == 0) {
    return <Text style={{color:'red'}}>일요일은{'\n'}운영안함</Text>
  } else if (date.getDay() == 6) {
    if (date.getHours() < 11 || (date.getHours() == 11 && date.getMinutes() < 30)) {
      return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시30분부터{'\n'}점심시작</Text></View>
    } else if ((date.getHours() >= 12 && date.getHours() < 14) || (date.getHours() == 11 && date.getMinutes() >= 30)) {
      return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}14시까지</Text>
    } else {
      return <Text style={{color:'red'}}>운영종료{'\n'}오늘은끝</Text>
    }
  } else if (date.getHours() < 11) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시부터{'\n'}점심시작</Text></View>
  } else if ((date.getHours() >= 11 && date.getHours() < 14) || (date.getHours() == 14 && date.getMinutes() < 30)) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}14시30분까지</Text>
  } else if ((date.getHours() == 14 && date.getMinutes() >= 30) || date.getHours() == 15 || (date.getHours() == 16 && date.getMinutes() < 30)) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>16시30분부터{'\n'}저녁시작</Text></View>
  } else if ((date.getHours() >= 17 && date.getHours() < 20) || (date.getHours() == 16 && date.getMinutes() >= 30)) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}20시까지</Text>
  } else {
    return <Text style={{color:'red'}}>운영종료{'\n'}오늘은끝</Text>
  }
}

export default Meal;

