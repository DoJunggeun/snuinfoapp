import React, {Component} from 'react';
import { Dimensions, Modal, ScrollView, StyleSheet, Linking, View, Text, TouchableOpacity, Image} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { WebView } from 'react-native-webview';
import SafeAreaView from 'react-native-safe-area-view';
import { NavigationActions } from 'react-navigation';

const WEBVIEW_REF = "WEBVIEW_REF";


class Contact extends Component { 
    constructor(props) {
        super(props);
        this.state = { canGoBack: false , 
          printVisible: false,
          bankVisible: false,
          libVisible: false,
          postVisible: false,
          syVisible: false,
          dormVisible: false
        };
      }
      setprintVisible(visible) {
        this.setState({printVisible: visible});
      }
      setbankVisible(visible) {
        this.setState({bankVisible: visible});
      }
      setlibVisible(visible) {
        this.setState({libVisible: visible});
      }
      setpostVisible(visible) {
        this.setState({postVisible: visible});
      }
      setsyVisible(visible) {
        this.setState({syVisible: visible});
      }
      setdormVisible(visible) {
        this.setState({dormVisible: visible});
      }

    render() {
        const {navigation} = this.props;
        return ( 
        <View style={{flex:1, flexDirection:'column', backgroundColor:'rgb(244,244,244)'}}> 
          <View style={{height:getStatusBarHeight()}}/>
          <View style={{height:50, backgroundColor:'rgb(176,155,222)', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
           <Text style={{fontSize:22, color:'white', fontWeight:'bold'}}>기타 편의정보</Text>
         </View>

         <ScrollView contentContainerStyle={{flex:1, justifyContent:'center', alignItems:'center', borderRadius:15}}>

         <View style={styles.menu}>
             <TouchableOpacity style={{flex:1, backgroundColor: 'rgba(176,155,222,0.45)', justifyContent:'center', alignItems:'center', borderRadius:15}} onPress={() => {this.setprintVisible(true);}}>
         <View style={{justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:20, fontWeight:'500',color:'black'}}>학내 인쇄소 정보</Text></View>
         </TouchableOpacity>
         <Modal animationType="slide" transparent={true} visible={this.state.printVisible} style={{justifyContent:'center', alignItems:'center'}}>
           <View style={{height:'100%', width:'100%', justifyContent:'center', alignItems:'center', alignSelf:'center'}}> 
           <View style={{height:'80%', width:'95%', backgroundColor:'rgb(240,235,248)', padding:15, borderRadius:15,
                  shadowColor: "#000",
                  shadowOffset: {
                      width: 1,
                      height: 3
                  },
                  shadowOpacity: 0.4,
                  shadowRadius: 4.5,
                  elevation: 5}}>
             <ScrollView style={{flex:1, paddingTop:10}}>
             <View style={{flex:1, alignItems:'center', justifyContent:'center', borderBottomWidth:2, borderColor:'lightgray', paddingBottom:10}}>
             <Text style={{fontSize:20, alignSelf:'center'}}>학내 인쇄소 정보</Text>
             </View>

             <View style={styles.printmodal}>
              <View style={styles.printth}><Text>위치</Text></View>
              <View style={styles.printtd}><Text>운영시간</Text></View>
             </View>
             <View style={styles.printmodal}>
              <View style={styles.printth}><Text>학생회관 2층 CP게이트 </Text></View>
              <View style={styles.printtd}><Text>24시간 운영</Text></View>
             </View>
             <View style={styles.printmodal}>
              <View style={styles.printth}><Text>사회대 16동 2층 CP게이트 </Text></View>
              <View style={styles.printtd}><Text>24시간 운영</Text></View>
             </View>
             <View style={styles.printmodal}>
              <View style={styles.printth}><Text>공대 신양(44-1동) 2층</Text></View>
              <View style={styles.printtd}><Text>24시간 운영</Text></View>
             </View>
             <View style={styles.printmodal}>
              <View style={styles.printth}><Text>기숙사 920동 1층 사랑채</Text></View>
              <View style={styles.printtd}><Text>24시간 운영</Text></View>
             </View>


             <View style={styles.printmodal}>
              <View style={styles.printth}><Text>중앙도서관 4층 CP게이트</Text></View>
              <View style={styles.printtd}><Text>평일 9-18</Text></View>
             </View>

             <View style={styles.printmodal}>
              <View style={styles.printth}><Text>사범대 12동 1층 CP게이트</Text></View>
              <View style={styles.printtd}><Text>평일 9-18</Text></View>
             </View>
             <View style={styles.printmodal}>
              <View style={styles.printth}><Text>동원관  CP게이트</Text></View>
              <View style={styles.printtd}><Text>평일 9-18</Text></View>
             </View>
             <View style={styles.printmodal}>
              <View style={styles.printth}><Text>법대 CP게이트</Text></View>
              <View style={styles.printtd}><Text>평일 9-18</Text></View>
             </View>

             <View style={styles.printmodal}>
              <View style={styles.printth}><Text>기숙사 900동 지하 2층 문구점</Text></View>
                <View style={styles.printtd}><Text>평일 8-24{`\n`}주말 13-19</Text></View>
             </View>
             <View style={styles.printmodal}>
              <View style={styles.printth}><Text>301동 복사실</Text></View>
              <View style={styles.printtd}><Text>평일 9-18</Text></View>
             </View>
             <View style={styles.printmodal}>
              <View style={styles.printth}><Text>사범대 11동 1층 검색출력실</Text></View>
              <View style={styles.printtd}><Text>평일 9-22</Text></View>
             </View>
             <View style={styles.printmodal}>
              <View style={styles.printth}><Text>인문대 4동 2층 PC 이용실</Text></View>
              <View style={styles.printtd}><Text>?</Text></View>
             </View>
             <View style={styles.printmodal}>
              <View style={styles.printth}><Text>인문대 5동 1층 전산검색실</Text></View>
              <View style={styles.printtd}><Text>?</Text></View>
             </View>
             <View style={styles.printmodal}>
              <View style={styles.printth}><Text>음대 54동 1층 복사실</Text></View>
              <View style={styles.printtd}><Text>?</Text></View>
             </View>
             <View style={{height:30}}/>

            </ScrollView>
           <View style={{height:50, backgroundColor:'rgb(176,155,222)', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
         <TouchableOpacity style={{flex:1, backgroundColor:'rgb(176,155,222)'}} onPress={() => {this.setprintVisible(false) }}>
          <View style={{height:50,justifyContent:'center', alignItems:'center'}}><Text style={{color:'white', fontSize:22, fontWeight:'600'}}>닫기</Text></View>
           </TouchableOpacity></View></View>
           </View>
           </Modal>
         </View>

         <View style={styles.menu}>
             <TouchableOpacity style={{flex:1, backgroundColor: 'rgba(176,155,222,0.45)', justifyContent:'center', alignItems:'center', borderRadius:15}} onPress={() => {this.setbankVisible(true);}}>
         <View style={{justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:20, fontWeight:'500',color:'black'}}>학내 은행·ATM 정보</Text></View>
         </TouchableOpacity>
         <Modal animationType="slide" transparent={true} visible={this.state.bankVisible} style={{justifyContent:'center', alignItems:'center'}}>
           <View style={{height:'100%', width:'100%', justifyContent:'center', alignItems:'center', alignSelf:'center'}}> 
           <View style={{height:'80%', width:'95%', backgroundColor:'rgb(240,235,248)', padding:15, borderRadius:15,
                  shadowColor: "#000",
                  shadowOffset: {
                      width: 1,
                      height: 3
                  },
                  shadowOpacity: 0.4,
                  shadowRadius: 4.5,
                  elevation: 5}}>
             <ScrollView style={{flex:1, paddingTop:10}}>
             <View style={{flex:1, alignItems:'center', justifyContent:'center', borderBottomWidth:2, borderColor:'lightgray', paddingBottom:10}}>
             <Text style={{fontSize:20, alignSelf:'center'}}>학내 은행·ATM 정보</Text>
             </View>
             <View style={styles.printmodal}>
              <View style={{flex:2, alignItems:'center', justifyContent:'center', margin:7}}><Text>은행</Text></View>
              <View style={styles.banktd}><Text>위치</Text></View>
              </View>

                  {banks()}
                  <View style={{height:30}}/>
            </ScrollView>
           <View style={{height:50, backgroundColor:'rgb(176,155,222)', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
         <TouchableOpacity style={{flex:1, backgroundColor:'rgb(176,155,222)'}} onPress={() => {this.setbankVisible(false) }}>
          <View style={{height:50,justifyContent:'center', alignItems:'center'}}><Text style={{color:'white', fontSize:22, fontWeight:'600'}}>닫기</Text></View>
           </TouchableOpacity></View></View>
           </View>
           </Modal>
         </View>

         <View style={styles.menu}>
             <TouchableOpacity style={{flex:1, backgroundColor: 'rgba(176,155,222,0.45)', justifyContent:'center', alignItems:'center', borderRadius:15}} onPress={() => {this.setpostVisible(true);}}>
         <View style={{justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:20, fontWeight:'500',color:'black'}}>우체국 운영 정보</Text></View>
         </TouchableOpacity>

         <Modal animationType="slide" transparent={true} visible={this.state.postVisible} style={{justifyContent:'center', alignItems:'center'}}>
           <View style={{height:'100%', width:'100%', justifyContent:'center', alignItems:'center', alignSelf:'center'}}> 
           <View style={{height:'50%', width:'95%', backgroundColor:'rgb(240,235,248)', padding:15, borderRadius:15,
                  shadowColor: "#000",
                  shadowOffset: {
                      width: 1,
                      height: 3
                  },
                  shadowOpacity: 0.4,
                  shadowRadius: 4.5,
                  elevation: 5}}>
             <View style={{flex:1}}>
             <Text style={{fontSize:20, alignSelf:'center'}}>우체국 운영 정보</Text>
            <Text style={{fontSize:15, lineHeight:30}}>{`\n`}
            1. 위치 : 행정관 1층 (학생회관 식당 앞){`\n`}
2. 운영 시간 : 평일 09:00~18:00{`\n`}
   (금융서비스는 09:00 ~ 16:30){`\n`}
3. 연락처 : 02-889-0205
            </Text>
            </View>
           <View style={{height:50, backgroundColor:'rgb(176,155,222)', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
         <TouchableOpacity style={{flex:1, backgroundColor:'rgb(176,155,222)'}} onPress={() => {this.setpostVisible(false) }}>
          <View style={{height:50,justifyContent:'center', alignItems:'center'}}><Text style={{color:'white', fontSize:22, fontWeight:'600'}}>닫기</Text></View>
           </TouchableOpacity></View></View>
           </View>
           </Modal>

         </View>

         <View style={styles.menu}>
             <TouchableOpacity style={{flex:1, backgroundColor: 'rgba(176,155,222,0.45)', justifyContent:'center', alignItems:'center', borderRadius:15}} onPress={() => {this.setlibVisible(true);}}>
         <View style={{justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:20, fontWeight:'500',color:'black'}}>도서관 운영시간</Text></View>
         </TouchableOpacity>
         <Modal animationType="slide" transparent={false} visible={this.state.libVisible} style={{marginTop :getStatusBarHeight()}}>
           <WebView source={{uri: 'http://lib.snu.ac.kr/hours'}} style={{flex:7}}/>
           <View style={{height:50, backgroundColor:'rgb(176,155,222)', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
         <TouchableOpacity style={{flex:1, backgroundColor:'rgb(176,155,222)'}} onPress={() => {this.setlibVisible(false) }}>
          <View style={{height:50,justifyContent:'center', alignItems:'center'}}><Text style={{color:'white', fontSize:22, fontWeight:'600'}}>닫기</Text></View>
           </TouchableOpacity></View>
           </Modal>
         </View>

         <View style={styles.menu}>
             <TouchableOpacity style={{flex:1, backgroundColor: 'rgba(176,155,222,0.45)', justifyContent:'center', alignItems:'center', borderRadius:15}} onPress={() => {this.setdormVisible(true);}}>
         <View style={{justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:20, fontWeight:'500',color:'black'}}>기숙사 편의시설</Text></View>
         </TouchableOpacity>
         <Modal animationType="slide" transparent={false} visible={this.state.dormVisible} style={{marginTop :getStatusBarHeight()}}>
           <WebView source={{uri: 'https://dorm.snu.ac.kr/dk_board/dk_dormitory/dorm_content.php?ht_id=snu2_1_1'}} style={{flex:7}}/>
           <View style={{height:50, backgroundColor:'rgb(176,155,222)', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
         <TouchableOpacity style={{flex:1, backgroundColor:'rgb(176,155,222)'}} onPress={() => {this.setdormVisible(false) }}>
          <View style={{height:50,justifyContent:'center', alignItems:'center'}}><Text style={{color:'white', fontSize:22, fontWeight:'600'}}>닫기</Text></View>
           </TouchableOpacity></View>
           </Modal>
         </View>

         </ScrollView>



                 

         <View style={{height:50, backgroundColor:'rgb(176,155,222)', justifyContent:'center', alignItems:'center'}}>
           <TouchableOpacity style={{height:40, width:'20%', position:'absolute', left:0}} onPress={()=> {this.props.navigation.dispatch(NavigationActions.navigate({routeName: 'Home'}));}}>
           <Image source={require('./src/home.png')} style={{height:40, width:40, alignSelf:'center'}} />
           </TouchableOpacity>
           <Text style={{fontSize:12, color:'white', alignSelf:'center'}}>© 2019 도정근 All Rights Reserved</Text>
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
  menu: {
    width:320, height:80, backgroundColor: 'white', justifyContent:'center', alignItems:'stretch', borderRadius:15,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10
  },
  menufont:{
    fontSize:15
  },
  printmodal: {
    flex:1, alignItems:'center', justifyContent:'center', flexDirection:'row', borderBottomWidth:1, borderColor:'lightgray'
  },
  printtd: {
    flex:1, alignItems:'center', justifyContent:'center', margin:7
  },
  printth: {
    flex:2, alignItems:'center', justifyContent:'center', margin:7
  },
  printtext: {
    fontSize:14
  },
  banktd:{
    flex:4, alignItems:'center', justifyContent:'center', margin:7
  },
  bankth: {
    flex:1, alignItems:'center', justifyContent:'center', margin:7
  }, 
  banktext:{
    fontSize:14
  }
});

var banklist = 
[ 
  ['우리', '은행', '인문대 신양(4동) 1층'],
  ['우리', 'ATM', '인문대 신양(4동) 1층'],
  ['우리', 'ATM', '학생회관 1층 앞'],
  ['우리', 'ATM', '기숙사 900동 지하1층 복도'],
  ['우리', 'ATM', '공대 해동(32-1동) 1층'],
  ['우리', 'ATM', '공대 302동 1층'],
  ['농협', '은행', '자하연(109동) 1층'],
  ['농협', '은행', '공대 39동 1층'],
  ['농협', '은행', '공대 301동 지하1층'],
  ['농협', '은행', '농생대 200동'],
  ['농협', 'ATM', '자하연(109동) 1층'],
  ['농협', 'ATM', '공대 301동 지하1층'],
  ['농협', 'ATM', '농생대 200동'],
  ['농협', 'ATM', '학생회관 1층 앞'],
  ['농협', 'ATM', '행정관 1층 학사과 입구'],
  ['농협', 'ATM', '기숙사 900동 지하 2층 출입구'],
  ['농협', 'ATM', '기숙사 919동 1층 식당 앞'],
  ['농협', 'ATM', '경영대 58동 앞'],
  ['농협', 'ATM', '공대 39동 1층 '],
  ['농협', 'ATM', '공대 301동 2층 '],
  ['농협', 'ATM', '공대 302동 2층 '],
  ['농협', 'ATM', '수의대 85동 5층 '],
  ['농협', 'ATM', '사범대 11동 '],
  ['농협', 'ATM', '사회대 16동 2층 '],
  ['농협', 'ATM', '음대 53동 1층 '],
  ['농협', 'ATM', '자연대 500동 1층'],
  ['농협', 'ATM', '약대 143동 1층 '],
  ['신한', '은행', '학생회관 1.5층'],
  ['신한', '은행', '공대 신양(44-1동) 1층'],
  ['신한', 'ATM', '학생회관 1.5층'],
  ['신한', 'ATM', '공대 신양(44-1동) 1층'],
  ['신한', 'ATM', '기숙사 900동 지하 2층 출입구'],
  ['신한', 'ATM', '기숙사 919동 1층 매점 옆'],
  ['신한', 'ATM', '공대 301동 2층'],
  ['신한', 'ATM', '220동 2층'],
  ['신한', 'ATM', '사회대 16동 2층'],
  ['신한', 'ATM', '약대 143동 1층']
];

function banks() {
  var n = banklist.length;
  var res = [];
  for (var i = 0; i<n ; i++){
    var temp1 = banklist[i][0];
    var temp2 = banklist[i][1];
    var temp3 = banklist[i][2];
    res.push(
    <View key={i} style={styles.printmodal}>
      <View style={styles.bankth}>
        <Text>{temp1}</Text>
      </View>
      <View style={styles.bankth}>
       <Text>{temp2}</Text>
      </View>
      <View style={styles.banktd}>
        <Text>{temp3}</Text>
      </View>
    </View>)
  }

  return res
}

export default Contact;