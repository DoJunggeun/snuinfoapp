import React, {Component} from 'react';
import {
    Modal,
    ScrollView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
const axios = require("axios");
const cheerio = require("react-native-cheerio");
global.Buffer = require('buffer').Buffer;
String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
}




var checkmsg = '\n\n\n\n인터넷 연결 상태를 확인하신 후 좌상단의 새로고침 버튼을 눌러주세요!'
var menulist = [checkmsg,checkmsg,checkmsg,checkmsg,checkmsg,checkmsg,checkmsg,checkmsg,checkmsg,checkmsg,checkmsg,checkmsg,checkmsg,checkmsg,checkmsg,checkmsg];
var menulist2 = [checkmsg,checkmsg,checkmsg,checkmsg,checkmsg,checkmsg,checkmsg,checkmsg,checkmsg,checkmsg,checkmsg,checkmsg,checkmsg,checkmsg,checkmsg,checkmsg];
var meallist = ['학생회관식당(880-5543)','자하연식당(880-7888)','예술계식당(876-1006)','소담마루(880-8698)','샤반(871-6933)','라운지오(882-7005)','두레미담(880-9358)','동원관식당(880-8697)','기숙사식당(881-9072)','공대간이식당(889-8956)','감골식당(880-5544)','4식당(889-6946)','3식당(880-5545)','302동식당(880-1939)','301동식당(889-8955','220동식당(875-0240)'];



class Mealtable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: -1,
            menuday: 1
        };
    }
    setModal(visible) {
        this.setState({menu: visible});
    };
    Modals(number) {
        return (
            <Modal
            animationType="slide"
            transparent={true}
            visible={(this.state.menu == number)}
            onRequestClose={() => {
                this.setModal(-1);
                this.setState({menuday:1})
            }}
            style={{
            borderRadius: 15
        }}>
            <View
                style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15
            }}>
    
                <View style={styles.modalbody}>
    
                    {this.setmenuday(number)}
                    
                    <TouchableOpacity
                        style={{
                        height: 50,
                        backgroundColor: 'rgb(176,155,222)',
                        borderBottomLeftRadius: 15,
                        borderBottomRightRadius: 15
                    }}
                        onPress={() => {
                        this.setModal(-1);
                        this.setState({menuday:1})
                    }}>
                        <View
                            style={{
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 15
                        }}>
                            <Text
                                style={{
                                color: 'white',
                                fontSize: 22,
                                fontWeight: '600'
                            }}>닫기</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
        );
    }

    setmenuday(number) {
        var today = new Date();
        var tomorrow = today;
        var months = today.getMonth() +1;
        var days = today.getDate();
        tomorrow.setDate(tomorrow.getDate() + 1)
        var months2 = tomorrow.getMonth() +1;
        var days2 = tomorrow.getDate();
        


        if (this.state.menuday == 1) {
            return <View style={{flex:1}}>
            <View style={{height: 50,justifyContent: 'center',alignItems: 'center', borderTopLeftRadius:15, borderTopRightRadius:15, borderBottomWidth:1, borderColor:'lightgray'}}>
                <Text style={styles.modalhead}>{meallist[number]}</Text>
                <View style={{position:'absolute', left:15}}>
                    <TouchableOpacity onPress={ () => {this.forceUpdate()} } >
                    <Image source={require('./src/reload.png')} style={{width:30, height:30}} />
                    </TouchableOpacity>
                </View>
                <View style={{position:'absolute', right:15}}>
                <TouchableOpacity onPress={ () => {this.state.menuday = 2; this.forceUpdate()} } >
                <Image source={require('./src/next.png')} style={{width:30, height:30}} />
                </TouchableOpacity>
                </View>
            </View>
            <View style={{position:'absolute', top:53, left:3}}><Text style={{fontSize:13}}>{'(*) : vegetarian diet\n(#) : no pork'}</Text></View>    
            <ScrollView style={styles.modalinside}>
            <View style={{flexDirection:'row'}}>
            <View style={{flex:1}}>
            <Text style={{fontSize: 17, fontWeight: '500', textAlign: 'center', lineHeight: 22}}>{'\n'}- {months}월 {days}일 -</Text>
            </View>
            </View>
            <Text style={styles.modaltext}>{menulist[number]}</Text>
        </ScrollView>
        </View>
        } else if (this.state.menuday == 2) {
            return <View style={{flex:1}}>
            <View style={{height: 50,justifyContent: 'center',alignItems: 'center', borderTopLeftRadius:15, borderTopRightRadius:15, borderBottomWidth:1, borderColor:'lightgray'}}>
                <Text style={styles.modalhead}>{meallist[number]}</Text>
                <View style={{position:'absolute', left:15}}>
                    <TouchableOpacity onPress={ () => {this.forceUpdate()} } >
                    <Image source={require('./src/reload.png')} style={{width:30, height:30}} />
                    </TouchableOpacity>
                </View>
                <View style={{position:'absolute', right:15}}>
                <TouchableOpacity onPress={ () => {this.state.menuday = 1; this.forceUpdate()} } >
                <Image source={require('./src/previous.png')} style={{width:30, height:30}} />
                </TouchableOpacity>
                </View>
            </View>
            <View style={{position:'absolute', top:53, left:3}}><Text style={{fontSize:13}}>{'(*) : vegetarian diet\n(#) : no pork'}</Text></View>    
            <ScrollView style={styles.modalinside}>
            <View style={{flexDirection:'row'}}>
            <View style={{flex:1}}>
            <Text style={{fontSize: 17, fontWeight: '500', textAlign: 'center', lineHeight: 22}}>{'\n'}- {months2}월 {days2}일 -</Text>
            </View>
            </View>
            <Text style={styles.modaltext}>{menulist2[number]}</Text>
        </ScrollView>
        </View>
        }
    }
    

    render() {
        var today = new Date();
        var day = today.getDay()
        var hours = today.getHours()
        var minutes = today.getMinutes()
        var days = today.getDate()
        var months = today.getMonth() + 1
        var years = today.getFullYear()

        var tomorrow = new Date()
        tomorrow.setDate(today.getDate() + 1)
        var day2 = tomorrow.getDay()
        var days2 = tomorrow.getDate()
        var months2 = tomorrow.getMonth() + 1
        var years2 = tomorrow.getFullYear()


        async function loadmenu(months, days, years, day) {
            var url_todaymenu = 'http://snuco.snu.ac.kr/ko/foodmenu?field_menu_date_value_1[value][date]=&field_menu_date_value[value][date]=' + months + '/' + days + '/' + years
            var html = await axios.get(url_todaymenu);
            let ulList = [];
            const $ = await cheerio.load(html.data);
            const $bodyList = await $("table.views-table tbody").children("tr");
            await $bodyList.each(function (i, elem) {
                ulList[i] = {
                    title: $(this)
                        .find('td.views-field-field-restaurant')
                        .text()
                        .trim(),
                    breakfast: $(this)
                        .find('td.views-field-field-breakfast p')
                        .text()
                        .trim(),
                    lunch: $(this)
                        .find('td.views-field-field-lunch p')
                        .text()
                        .trim(),
                    dinner: $(this)
                        .find('td.views-field-field-dinner p')
                        .text()
                        .trim()
                };
            });
            const data = ulList.filter(n => n.title);
            return data;
        };
        
        function dormmeal() {
            if (day == 0 || day == 6) {
                if (hours < 8) {
                    return <View>
                        <Text style={styles.nowoff}>미운영</Text>
                        <Text style={styles.nowwait}>8:00 아침시작</Text>
                    </View>
                } else if (hours == 8 || (hours == 9 && minutes < 30)) {
                    return <Text style={styles.nowon}>운영중{'\n'}9:30 아침종료</Text>
                } else if ((hours == 9 && minutes >= 30) || hours == 10 || (hours == 11 && minutes < 30)) {
                    return <View>
                        <Text style={styles.nowoff}>미운영</Text>
                        <Text style={styles.nowwait}>11:30 점심시작</Text>
                    </View>
                } else if ((hours == 11 && minutes >= 30) || hours == 12 || (hours == 13 && minutes < 30)) {
                    return <Text style={styles.nowon}>운영중{'\n'}13:30 점심종료</Text>
                } else if ((hours == 13 && minutes >= 30) || (hours >= 14 && hours < 17) || (hours == 17 && minutes < 30)) {
                    return <View>
                        <Text style={styles.nowoff}>미운영</Text>
                        <Text style={styles.nowwait}>17:30 저녁시작</Text>
                    </View>
                } else if ((hours == 17 && minutes >= 30) || hours == 18 || (hours == 19 && minutes < 30)) {
                    return <Text style={styles.nowon}>운영중{'\n'}19:30 종료</Text>
                } else {
                    return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
                }
            } else {
                if (hours < 7 || (hours == 7 && minutes < 30)) {
                    return <View>
                        <Text style={styles.nowoff}>미운영</Text>
                        <Text style={styles.nowwait}>7:30 아침시작</Text>
                    </View>
                } else if ((hours == 7 && minutes >= 30) || (hours == 9 && minutes < 30)) {
                    return <Text style={styles.nowon}>운영중{'\n'}9:30 아침종료</Text>
                } else if ((hours == 9 && minutes >= 30) || hours == 10 || (hours == 11 && minutes < 30)) {
                    return <View>
                        <Text style={styles.nowoff}>미운영</Text>
                        <Text style={styles.nowwait}>11:30 점심시작</Text>
                    </View>
                } else if ((hours == 11 && minutes >= 30) || hours == 12 || (hours == 13 && minutes < 30)) {
                    return <Text style={styles.nowon}>운영중{'\n'}13:30 점심종료</Text>
                } else if ((hours == 13 && minutes >= 30) || (hours >= 14 && hours < 17) || (hours == 17 && minutes < 30)) {
                    return <View>
                        <Text style={styles.nowoff}>미운영</Text>
                        <Text style={styles.nowwait}>17:30 저녁시작</Text>
                    </View>
                } else if ((hours == 17 && minutes >= 30) || hours == 18 || (hours == 19 && minutes < 30)) {
                    return <Text style={styles.nowon}>운영중{'\n'}19:30 종료</Text>
                } else {
                    return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
                }
            }
        }
        
        function hgmeal() {
            if (day > 0 && day < 6) {
                if (hours < 8) {
                    return <View>
                        <Text style={styles.nowoff}>미운영</Text>
                        <Text style={styles.nowwait}>8:00 아침시작</Text>
                    </View>
                } else if (hours >= 8 && hours < 10) {
                    return <Text
                        style={styles.nowon}>운영중{'\n'}10:00 아침종료</Text>
                } else if (hours == 10) {
                    return <View>
                        <Text style={styles.nowoff}>미운영</Text>
                        <Text style={styles.nowwait}>11:00 점심시작</Text>
                    </View>
                } else if (hours >= 11 && hours < 15) {
                    return <Text style={styles.nowon}>운영중{'\n'}15:00 점심종료</Text>
                } else if (hours == 16) {
                    return <View>
                        <Text style={styles.nowoff}>미운영</Text>
                        <Text style={styles.nowwait}>17:00 저녁시작</Text>
                    </View>
                } else if (hours == 17 || hours == 18 || (hours == 19 && minutes < 1)) {
                    return <Text
                        style={styles.nowon}>운영중{'\n'}19:00 종료</Text>
                } else {
                    return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
                }
            } else {
                if (hours < 11 || (hours == 11 && minutes < 30)) {
                    return <View>
                        <Text style={styles.nowoff}>미운영</Text>
                        <Text style={styles.nowwait}>11:30 점심시작</Text>
                    </View>
                } else if ((hours == 11 && minutes >= 30) || hours == 12 || hours == 13) {
                    return <Text
                        style={styles.nowon}>운영중{'\n'}14:00 점심종료</Text>
                } else if (hours >= 14 && hours < 17) {
                    return <View>
                        <Text style={styles.nowoff}>미운영</Text>
                        <Text
                            style={styles.nowwait}>17:00 저녁시작</Text>
                    </View>
                } else if (hours >= 17 && hours < 19) {
                    return <Text
                        style={styles.nowon}>운영중{'\n'}19:00 종료</Text>
                } else {
                    return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
                }
            }
        }
        
        function gongmeal() {
            if (day == 0 || day == 6) {
                return <Text style={styles.nowoff}>주말에는{'\n'}운영안함</Text>
            } else if (hours >= 11 && hours < 19) {
                return <Text style={styles.nowon}>운영중{'\n'}19:: 종료</Text>
            } else if (hours < 11) {
                return <View>
                    <Text style={styles.nowoff}>미운영</Text>
                    <Text style={styles.nowwait}>11:00 시작</Text>
                </View>
            } else {
                return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
            }
        }
        
        function eng302meal() {
            if (day == 0 || day == 6) {
                return <Text style={styles.nowoff}>주말에는{'\n'}운영안함</Text>
            } else if ((hours > 11 && hours < 14) || (hours == 11 && minutes >= 15)) {
                return <Text style={styles.nowon}>운영중{'\n'}14:00 점심종료</Text>
            } else if (hours >= 17 && hours < 19) {
                return <Text style={styles.nowon}>운영중{'\n'}19:00 종료</Text>
            } else if (hours < 11 || (hours == 11 && minutes < 15)) {
                return <View>
                    <Text style={styles.nowoff}>미운영</Text>
                    <Text style={styles.nowwait}>11:15 점심시작</Text>
                </View>
            } else if (hours < 17 && hours >= 14) {
                return <View>
                    <Text style={styles.nowoff}>미운영</Text>
                    <Text style={styles.nowwait}>17:00 저녁시작</Text>
                </View>
            } else {
                return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
            }
        }
        
        function eng301meal() {
            if (day == 0 || day == 6) {
                return <Text style={styles.nowoff}>주말에는{'\n'}운영안함</Text>
            } else if (hours >= 11 && hours < 14) {
                return <Text style={styles.nowon}>운영중{'\n'}14:00 점심종료</Text>
            } else if (hours >= 17 && hours < 19) {
                return <Text style={styles.nowon}>운영중{'\n'}19:00 종료</Text>
            } else if (hours < 11) {
                return <View>
                    <Text style={styles.nowoff}>미운영</Text>
                    <Text style={styles.nowwait}>11:00 점심시작</Text>
                </View>
            } else if (hours < 17 && hours >= 14) {
                return <View>
                    <Text style={styles.nowoff}>미운영</Text>
                    <Text style={styles.nowwait}>17:00 저녁시작</Text>
                </View>
            } else {
                return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
            }
        }
        
        function artmeal() {
            if (day == 0 || day == 6) {
                return <Text style={styles.nowoff}>주말에는{'\n'}운영안함</Text>
            } else if ((hours == 11 && minutes >= 30) || (hours > 11 && hours < 14)) {
                return <Text style={styles.nowon}>운영중{'\n'}14:00 점심종료</Text>
            } else if (hours >= 17 && hours < 19) {
                return <Text style={styles.nowon}>운영중{'\n'}19:00 종료</Text>
            } else if (hours < 11 || (hours == 11 && minutes < 30)) {
                return <View>
                    <Text style={styles.nowoff}>미운영</Text>
                    <Text style={styles.nowwait}>11:30 점심시작</Text>
                </View>
            } else if (hours < 17 && hours >= 14) {
                return <View>
                    <Text style={styles.nowoff}>미운영</Text>
                    <Text style={styles.nowwait}>17:00 저녁시작</Text>
                </View>
            } else {
                return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
            }
        }
        
        function ggmeal() {
            if (day == 0 || day == 6) {
                return <Text style={styles.nowoff}>주말에는{'\n'}운영안함</Text>
            } else if (hours >= 11 && hours < 14) {
                return <Text style={styles.nowon}>운영중{'\n'}14:00 점심종료</Text>
            } else if ((hours >= 17 && hours < 18) || (hours == 18 && minutes < 30)) {
                return <Text style={styles.nowon}>운영중{'\n'}18:30 종료</Text>
            } else if (hours < 11) {
                return <View>
                    <Text style={styles.nowoff}>미운영</Text>
                    <Text style={styles.nowwait}>11:00 점심시작</Text>
                </View>
            } else if (hours < 17 && hours >= 14) {
                return <View>
                    <Text style={styles.nowoff}>미운영</Text>
                    <Text style={styles.nowwait}>17:00 저녁시작</Text>
                </View>
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
            if (day == 0 || day == 6) {
                return <Text style={styles.nowoff}>주말에는{'\n'}운영안함</Text>
            } else if (hours >= 11 && hours < 14) {
                return <Text style={styles.nowon}>운영중{'\n'}14:00 종료</Text>
            } else if (hours < 11) {
                return <View>
                    <Text style={styles.nowoff}>미운영</Text>
                    <Text style={styles.nowwait}>11:00 점심시작</Text>
                </View>
            } else {
                return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
            }
        }
        
        function edumeal() {
            return m11141719()
        }
        
        function meal220() {
            return m11141719()
        }
        
        function m11141719() {
            if (day == 0 || day == 6) {
                return <Text style={styles.nowoff}>주말에는{'\n'}운영안함</Text>
            } else if (hours >= 11 && hours < 14) {
                return <Text style={styles.nowon}>운영중{'\n'}14:00 점심종료</Text>
            } else if (hours >= 17 && hours < 19) {
                return <Text style={styles.nowon}>운영중{'\n'}19:00 종료</Text>
            } else if (hours < 11) {
                return <View>
                    <Text style={styles.nowoff}>미운영</Text>
                    <Text style={styles.nowwait}>11:00 점심시작</Text>
                </View>
            } else if (hours < 17 && hours >= 14) {
                return <View>
                    <Text style={styles.nowoff}>미운영</Text>
                    <Text style={styles.nowwait}>17:00 저녁시작</Text>
                </View>
            } else {
                return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
            }
        }
        
        function loungeo() {
            if (hours >= 11 && hours < 21) {
                return <Text style={styles.nowon}>운영중{'\n'}21:00 종료</Text>
            } else if (hours < 11) {
                return <View>
                    <Text style={styles.nowoff}>미운영</Text>
                    <Text style={styles.nowwait}>11:00 시작</Text>
                </View>
            } else {
                return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
            }
        }
        
        function shaban() {
            if (day == 0) {
                return <Text style={styles.nowoff}>일요일은{'\n'}운영안함</Text>
            } else if (day == 6) {
                if (hours < 11 || (hours == 11 && minutes < 30)) {
                    return <View>
                        <Text style={styles.nowoff}>미운영</Text>
                        <Text style={styles.nowwait}>11:30 시작</Text>
                    </View>
                } else if ((hours >= 12 && hours < 14) || (hours == 11 && minutes >= 30)) {
                    return <Text style={styles.nowon}>운영중{'\n'}14:00 종료</Text>
                } else {
                    return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
                }
            } else if (hours < 11) {
                return <View>
                    <Text style={styles.nowoff}>미운영</Text>
                    <Text style={styles.nowwait}>11:00 점심시작</Text>
                </View>
            } else if ((hours >= 11 && hours < 14) || (hours == 14 && minutes < 30)) {
                return <Text style={styles.nowon}>운영중{'\n'}14:30 점심종료</Text>
            } else if ((hours == 14 && minutes >= 30) || hours == 15 || (hours == 16 && minutes < 30)) {
                return <View>
                    <Text style={styles.nowoff}>미운영</Text>
                    <Text style={styles.nowwait}>16:30{'\n'}저녁시작</Text>
                </View>
            } else if ((hours >= 17 && hours < 20) || (hours == 16 && minutes >= 30)) {
                return <Text style={styles.nowon}>운영중{'\n'}20:00 종료</Text>
            } else {
                return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
            }
        }
        
        function lotte() {
            if (hours < 8){
                return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8:00 시작</Text></View>
              } else if (hours < 22) {
                return <Text style={styles.nowon}>{`운영중\n22:00 종료`}</Text>
              } else {
                return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
              }
            }
        
        function hyu() {
            if ( (hours < 9) || (hours == 9 && minutes < 20 )  ){
                return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9:20 시작</Text></View>
              } else if (hours < 22) {
                return <Text style={styles.nowon}>{`운영중\n22:00 종료`}</Text>
              } else {
                return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
              }
            }
        function bbq(){
            if (hours < 11){
                return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>11:00 시작</Text></View>
              } else if (hours < 21) {
                return <Text style={styles.nowon}>{`운영중\n21:00 종료`}</Text>
              } else {
                return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
              }
        }
        
        function tenk(){
            if (day == 0) {
                return <Text style={styles.nowoff}>{`일요일은\n운영함함`}</Text>
            } else {
                if (hours < 11){
                    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>11:00 시작</Text></View>
                  } else if (hours < 20) {
                    return <Text style={styles.nowon}>{`운영중\n20:00 종료`}</Text>
                  } else {
                    return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
                  }    
            }
        }
        
        function pho(){
            if (hours < 10){
                return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>10:00 시작</Text></View>
              } else if (hours < 21) {
                return <Text style={styles.nowon}>{`운영중\n21:00 종료`}</Text>
              } else {
                return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
              }
        }
        
        function quiz() {
            if ((day == 0 || day == 6) && (hours >= 9 && hours < 19)) {
              return <Text style={styles.nowon}>{`운영중\n19:00 종료`}</Text>
            } else if ((day > 0 && day < 6) && (hours >= 7 && hours < 20)) {
              return <Text style={styles.nowon}>{`운영중\n20:00 종료`}</Text>
            } else if ((day == 0 || day == 6) && (hours < 9)) {
              return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9:00 시작</Text></View>
            } else if ((day > 0 && day < 6) && (hours < 7)) {
              return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>7:00 시작</Text></View>
            } else {
              return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
            }
          }
        
        loadmenu(months, days, years, day).then((data) => {
            var menus  = data;
            var firstletter = ['?', '자', '예', '소', '?', '?', '?', '?', '?', '공', '감', '4', '?', '?', '?', '2']

            if (day == 0 || day == 6) {
                var weekendmsg = '\n\n\n\n휴무'
                menulist = [weekendmsg,weekendmsg,weekendmsg,weekendmsg,weekendmsg,weekendmsg,weekendmsg,weekendmsg,weekendmsg,weekendmsg,weekendmsg,weekendmsg,weekendmsg,weekendmsg,weekendmsg,weekendmsg];
                for (var i = 0; i < menus.length; i++) {
                    if (menus[i].title.charAt(0) == '학'){
                        menulist[0] = `\n점심\n${menus[i].lunch}\n\n저녁\n${menus[i].dinner}\n\n`;
                    } else if (menus[i].title.charAt(0) == '기'){
                        menus[i].lunch = menus[i].lunch.replace('00원', '00원\n');
                        menulist[8] = `\n아침\n${menus[i].breakfast}\n\n점심\n${menus[i].lunch}\n\n저녁\n${menus[i].dinner}\n\n`;
                    } 
                }
                } else {
                    var checkmsg2 = '\n\n\n\n해당 식단의 휴무 혹은 식단 정보의 오류로 메뉴 정보가 없습니다.'
                    menulist2 = [checkmsg2,checkmsg2,checkmsg2,checkmsg2,checkmsg2,checkmsg2,checkmsg2,checkmsg2,checkmsg2,checkmsg2,checkmsg2,checkmsg2,checkmsg2,checkmsg2,checkmsg2,checkmsg2];        
            for (var i = 0; i < menus.length; i++) {
                if (menus[i].title.charAt(0) == '4'){
                    menus[i].lunch = menus[i].lunch.replace('00원', '00원\n');
                    menus[i].dinner = menus[i].dinner.replace('00원', '00원\n');        
                } else if (menus[i].title.charAt(0) == '공') {
                    menus[i].lunch = menus[i].lunch.replaceAll('00원', '00원\n');
                    menus[i].dinner = menus[i].dinner.replaceAll('00원', '00원\n');        
                }
                if (menus[i].title.charAt(0) == '3') {
                    if (menus[i].title.charAt(2) == '당') {
                        menulist[12] = `\n점심\n${menus[i].lunch}\n\n저녁\n${menus[i].dinner}\n\n`;
                    } else if (menus[i].title.charAt(2) == '2') {
                        menus[i].lunch = menus[i].lunch.replace('00원', '00원\n');
                        menus[i].dinner = menus[i].dinner.replace('00원', '00원\n');            
                        menulist[13] = `\n점심\n${menus[i].lunch}\n\n저녁\n${menus[i].dinner}\n\n`;
                    } else if (menus[i].title.charAt(2) == '1') {
                        menulist[14] = `\n점심\n${menus[i].lunch}\n\n저녁\n${menus[i].dinner}\n\n`;
                    }
                } else if (menus[i].title.charAt(0) == '학'){
                    menulist[0] = `\n아침\n${menus[i].breakfast}\n\n점심\n${menus[i].lunch}\n\n저녁\n${menus[i].dinner}\n\n`;
                } else if (menus[i].title.charAt(0) == '기'){
                    menus[i].breakfast = menus[i].breakfast.replace('00원', '00원\n');
                    menus[i].lunch = menus[i].lunch.replace('00원', '00원\n');
                    menus[i].dinner = menus[i].dinner.replaceAll('00원', '00원\n');        
                    menulist[8] = `\n아침\n${menus[i].breakfast}\n\n점심\n${menus[i].lunch}\n\n저녁\n${menus[i].dinner}\n\n`;
                } else if (menus[i].title.charAt(0) == '동') {
                    menulist[7] = `\n점심\n${menus[i].lunch}\n\n`;
                }
                for (var j = 0; j < firstletter.length ; j++){
                    if ( menus[i].title.charAt(0) == firstletter[j]) {
                        menulist[j] = `\n점심\n${menus[i].lunch}\n\n저녁\n${menus[i].dinner}\n\n`;
                }
                }
            }
        }
        })

        loadmenu(months2, days2, years2, day2).then((data) => {

            var menus  = data;
            var firstletter = ['?', '자', '예', '소', '?', '?', '?', '?', '?', '공', '감', '4', '?', '?', '?', '2']

            if (day2 == 0 || day2 == 6) { 
                var weekendmsg = '\n\n\n\n휴무'
                menulist2 = [weekendmsg,weekendmsg,weekendmsg,weekendmsg,weekendmsg,weekendmsg,weekendmsg,weekendmsg,weekendmsg,weekendmsg,weekendmsg,weekendmsg,weekendmsg,weekendmsg,weekendmsg,weekendmsg];
                for (var i = 0; i < menus.length; i++) {
                if (menus[i].title.charAt(0) == '학'){
                    menulist2[0] = `\n점심\n${menus[i].lunch}\n\n저녁\n${menus[i].dinner}\n\n`;
                } else if (menus[i].title.charAt(0) == '기'){
                    menus[i].lunch = menus[i].lunch.replace('00원', '00원\n');
                    menulist2[8] = `\n아침\n${menus[i].breakfast}\n\n점심\n${menus[i].lunch}\n\n저녁\n${menus[i].dinner}\n\n`;
                } 
            }
         } else {
            var checkmsg2 = '\n\n\n\n해당 식단의 휴무 혹은 식단 정보의 오류로 메뉴 정보가 없습니다.'
            menulist2 = [checkmsg2,checkmsg2,checkmsg2,checkmsg2,checkmsg2,checkmsg2,checkmsg2,checkmsg2,checkmsg2,checkmsg2,checkmsg2,checkmsg2,checkmsg2,checkmsg2,checkmsg2,checkmsg2];    
            for (var i = 0; i < menus.length; i++) {
                if (menus[i].title.charAt(0) == '4'){
                    menus[i].lunch = menus[i].lunch.replace('00원', '00원\n');
                    menus[i].dinner = menus[i].dinner.replace('00원', '00원\n');        
                } else if (menus[i].title.charAt(0) == '공') {
                    menus[i].lunch = menus[i].lunch.replaceAll('00원', '00원\n');
                    menus[i].dinner = menus[i].dinner.replaceAll('00원', '00원\n');        
                }
                if (menus[i].title.charAt(0) == '3') {
                    if (menus[i].title.charAt(2) == '당') {
                        menulist2[12] = `\n점심\n${menus[i].lunch}\n\n저녁\n${menus[i].dinner}\n\n`;
                    } else if (menus[i].title.charAt(2) == '2') {
                        menus[i].lunch = menus[i].lunch.replace('00원', '00원\n');
                        menus[i].dinner = menus[i].dinner.replace('00원', '00원\n');            
                        menulist2[13] = `\n점심\n${menus[i].lunch}\n\n저녁\n${menus[i].dinner}\n\n`;
                    } else if (menus[i].title.charAt(2) == '1') {
                        menulist2[14] = `\n점심\n${menus[i].lunch}\n\n저녁\n${menus[i].dinner}\n\n`;
                    }
                } else if (menus[i].title.charAt(0) == '학'){
                    menulist2[0] = `\n아침\n${menus[i].breakfast}\n\n점심\n${menus[i].lunch}\n\n저녁\n${menus[i].dinner}\n\n`;
                } else if (menus[i].title.charAt(0) == '기'){
                    menus[i].breakfast = menus[i].breakfast.replace('00원', '00원\n');
                    menus[i].lunch = menus[i].lunch.replace('00원', '00원\n');
                    menus[i].dinner = menus[i].dinner.replaceAll('00원', '00원\n');        
                    menulist2[8] = `\n아침\n${menus[i].breakfast}\n\n점심\n${menus[i].lunch}\n\n저녁\n${menus[i].dinner}\n\n`;
                } else if (menus[i].title.charAt(0) == '동') {
                    menulist2[7] = `\n점심\n${menus[i].lunch}\n\n`;
                }
                for (var j = 0; j < firstletter.length ; j++){
                    if ( menus[i].title.charAt(0) == firstletter[j]) {
                        menulist2[j] = `\n점심\n${menus[i].lunch}\n\n저녁\n${menus[i].dinner}\n\n`;
                }
                }
            }
        }
        })

        return (
            <View style={{
                flex: 1
            }}>
                <View style={styles.containerhead}>
                    <View style={styles.th}>
                        <Text style={styles.thtext}>식당</Text>
                    </View>
                    <View style={styles.th}>
                        <Text style={styles.thtext}>{`운영시간\n(학기중)`}</Text>
                    </View>
                    <View style={styles.th}>
                        <Text style={styles.thtext}>오늘의식단</Text>
                    </View>
                </View>

                <ScrollView style={styles.scroll}>
                    <View style={styles.container2}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>학생회관 식당</Text>
                        </View>
                        <View style={styles.td}>{hgmeal()}</View>
                        <TouchableOpacity
                            style={styles.td}
                            onPress={() => {
                            this.setModal(0);
                        }}>
                            <Text style={styles.menuon}>메뉴보기</Text>
                        </TouchableOpacity>
                        {this.Modals(0)}
                    </View>

                    <View style={styles.container}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>자하연식당</Text>
                        </View>
                        <View style={styles.td}>{nhmeal()}</View>
                        <TouchableOpacity
                            style={styles.td}
                            onPress={() => {
                            this.setModal(1);
                        }}>
                            <Text style={styles.menuon}>메뉴보기</Text>
                        </TouchableOpacity>
                        {this.Modals(1)}
                    </View>

                    <View style={styles.container2}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>예술계식당</Text>
                        </View>
                        <View style={styles.td}>{artmeal()}</View>
                        <TouchableOpacity
                            style={styles.td}
                            onPress={() => {
                            this.setModal(2);
                        }}>
                            <Text style={styles.menuon}>메뉴보기</Text>
                        </TouchableOpacity>
                        {this.Modals(2)}
                    </View>

                    <View style={styles.container}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>모두의공간 (공깡)</Text>
                        </View>
                        <View style={styles.td}>{gongmeal()}</View>
                        <TouchableOpacity
                            style={styles.td}
                            onPress={() => {
                            this.setModal(9);
                        }}>
                            <Text style={styles.menuon}>메뉴보기</Text>
                        </TouchableOpacity>
                        {this.Modals(9)}
                    </View>

                    <View style={styles.container2}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>3식당(농식)</Text>
                        </View>
                        <View style={styles.td}>{nsmeal()}</View>
                        <TouchableOpacity
                            style={styles.td}
                            onPress={() => {
                            this.setModal(12);
                        }}>
                            <Text style={styles.menuon}>메뉴보기</Text>
                        </TouchableOpacity>
                        {this.Modals(12)}
                    </View>

                    <View style={styles.container}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>301동 식당</Text>
                        </View>
                        <View style={styles.td}>{eng301meal()}</View>
                        <TouchableOpacity
                            style={styles.td}
                            onPress={() => {
                            this.setModal(14);
                        }}>
                            <Text style={styles.menuon}>메뉴보기</Text>
                        </TouchableOpacity>
                        {this.Modals(14)}
                    </View>

                    <View style={styles.container2}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>302동 식당</Text>
                        </View>
                        <View style={styles.td}>{eng302meal()}</View>
                        <TouchableOpacity
                            style={styles.td}
                            onPress={() => {
                            this.setModal(13);
                        }}>
                            <Text style={styles.menuon}>메뉴보기</Text>
                        </TouchableOpacity>
                        {this.Modals(13)}
                    </View>

                    <View style={styles.container}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>동원관 식당</Text>
                        </View>
                        <View style={styles.td}>{dwgmeal()}</View>
                        <TouchableOpacity
                            style={styles.td}
                            onPress={() => {
                            this.setModal(7);
                        }}>
                            <Text style={styles.menuon}>메뉴보기</Text>
                        </TouchableOpacity>
                        {this.Modals(7)}
                    </View>

                    <View style={styles.container2}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>감골식당</Text>
                        </View>
                        <View style={styles.td}>{ggmeal()}</View>
                        <TouchableOpacity
                            style={styles.td}
                            onPress={() => {
                            this.setModal(10);
                        }}>
                            <Text style={styles.menuon}>메뉴보기</Text>
                        </TouchableOpacity>
                        {this.Modals(10)}
                    </View>

                    <View style={styles.container}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>4식당</Text>
                        </View>
                        <View style={styles.td}>{edumeal()}</View>
                        <TouchableOpacity
                            style={styles.td}
                            onPress={() => {
                            this.setModal(11);
                        }}>
                            <Text style={styles.menuon}>메뉴보기</Text>
                        </TouchableOpacity>
                        {this.Modals(11)}
                    </View>

                    <View style={styles.container2}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>220동 식당</Text>
                        </View>
                        <View style={styles.td}>{meal220()}</View>
                        <TouchableOpacity
                            style={styles.td}
                            onPress={() => {
                            this.setModal(15);
                        }}>
                            <Text style={styles.menuon}>메뉴보기</Text>
                        </TouchableOpacity>
                        {this.Modals(15)}
                    </View>

                    <View style={styles.container}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>{`기숙사 식당\n(919동)`}</Text>
                        </View>
                        <View style={styles.td}>{dormmeal()}</View>
                        <TouchableOpacity
                            style={styles.td}
                            onPress={() => {
                            this.setModal(8);
                        }}>
                            <Text style={styles.menuon}>메뉴보기</Text>
                        </TouchableOpacity>
                        {this.Modals(8)}
                    </View>

                    <View style={styles.container2}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>{`아워홈 식당\n(901동)`}</Text>
                        </View>
                        <View style={styles.td}>{dormmeal()}</View>
                        <View
                            style={styles.td}>
                            <Text style={[styles.menuon, {color:'red'}]}>{`메뉴보기\n미지원`}</Text>
                        </View>
                    </View>

                    <View style={styles.containerhead}>
                        <View style={styles.td}>
                            <Text style={styles.thtext}>학내 음식점</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>라운지오{'\n'}(동원관)</Text>
                        </View>
                        <View style={styles.td}>{loungeo()}</View>
                        <View style={styles.td}>
                            <Text style={styles.menu}>경양식</Text>
                        </View>
                    </View>

                    <View style={styles.container2}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>샤반{'\n'}(500동)</Text>
                        </View>
                        <View style={styles.td}>{shaban()}</View>
                        <View style={styles.td}>
                            <Text style={styles.menu}>한식</Text>
                        </View>
                    </View>

                    <View style={styles.container}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>롯데리아{'\n'}(도서관)</Text>
                        </View>
                        <View style={styles.td}>{lotte()}</View>
                        <View style={styles.td}>
                            <Text style={styles.menu}>햄버거</Text>
                        </View>
                    </View>

                    <View style={styles.container2}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>휴김밥{'\n'}(도서관)</Text>
                        </View>
                        <View style={styles.td}>{hyu()}</View>
                        <View style={styles.td}>
                            <Text style={styles.menu}>분식</Text>
                            </View>
                        </View>

                        <View style={styles.container}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>BBQ{'\n'}(공대해동)</Text>
                        </View>
                        <View style={styles.td}>{bbq()}</View>
                        <View style={styles.td}>
                            <Text style={styles.menu}>치킨 등</Text>
                        </View>
                    </View>
                    <View style={styles.container2}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>BBQ 프리미엄{'\n'}(38동)</Text>
                        </View>
                        <View style={styles.td}>{bbq()}</View>
                        <View style={styles.td}>
                            <Text style={styles.menu}>치킨 등</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>텐카이핀{'\n'}(대림국제관)</Text>
                        </View>
                        <View style={styles.td}>{tenk()}</View>
                        <View style={styles.td}>
                            <Text style={styles.menu}>일식</Text>
                            </View>
                        </View>

                        <View style={styles.container2}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>포포인{'\n'}(CJ어학관)</Text>
                        </View>
                        <View style={styles.td}>{pho()}</View>
                        <View style={styles.td}>
                            <Text style={styles.menu}>쌀국수 등</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>퀴즈노스{'\n'}(301동)</Text>
                        </View>
                        <View style={styles.td}>{quiz()}</View>
                        <View style={styles.td}>
                            <Text style={styles.menu}>샌드위치</Text>
                        </View>
                    </View>

                </ScrollView>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    containerhead: {
        height: 60,
        justifyContent: 'space-around',
        backgroundColor: 'rgb(218,218,218)',
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        height: 60,
        justifyContent: 'space-around',
        backgroundColor: 'rgb(244,244,244)',
        flexDirection: 'row',
        alignItems: 'center'
    },
    container2: {
        height: 60,
        justifyContent: 'space-around',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    scroll: {
        flex: 1,
        backgroundColor: '#f1f1f1'
    },
    th: {
        flex: 1,
        height: 60,
        justifyContent: 'space-around',
        borderWidth: 0.5,
        borderColor: 'rgb(218,218,218)',
        alignItems: 'center'
    },
    thtext: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: '800'
    },
    td: {
        flex: 1,
        height: 60,
        justifyContent: 'space-around',
        borderWidth: 0.5,
        borderColor: 'rgb(218,218,218)',
        alignItems: 'stretch',
        textAlign: 'center'
    },
    tdtext: {
        color: 'black',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500'
    },
    menuon: {
        color: 'blue',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '600'
        },
    nowon: {
        color: 'blue',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500'
    },
    nowwait: {
        color: 'green',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500'
    },
    nowoff: {
        color: 'red',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500'
    },
    menu: {
        color: 'black',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500'
    },

    icon: {
        width: 40,
        height: 40
    },
    modalbody: {
        height: '65%',
        width: '96%',
        minHeight: 400,
        minWidth: 300,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'rgb(244,244,244)',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 3
        },
        shadowOpacity: 0.4,
        shadowRadius: 4.5,
        elevation: 5
    },
    modalinside: {
        flex: 1,
        borderRadius: 15,
        padding: 20,
    },
    modalhead: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: 22
    },
    modaltext: {
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        lineHeight: 22
    }
});
  
export default Mealtable;
