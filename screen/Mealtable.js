import React, {Component} from 'react';
import {
    Dimensions,
    Modal,
    ScrollView,
    StyleSheet,
    Linking,
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

async function loadmenu() {
    var html = await axios.get("http://snuco.snu.ac.kr/ko/foodmenu");
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

var meallist = ['학생회관식당(880-5543)','자하연식당(880-7888)','예술계식당(876-1006)','소담마루(880-8698)','샤반(871-6933)','라운지오(882-7005)','두레미담(880-9358)','동원관식당(880-8697)','기숙사식당(881-9072)','공대간이식당(889-8956)','감골식당(880-5544)','4식당(889-6946)','3식당(880-5545)','302동식당(880-1939)','301동식당(889-8955','220동식당(875-0240)'];
var menulist = ['\n휴무','\n휴무','\n휴무','\n휴무','\n휴무','\n휴무','\n휴무','\n휴무','\n휴무','\n휴무','\n휴무','\n휴무','\n휴무','\n휴무','\n휴무','\n휴무'];

class Mealtable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: -1,
        };
    }
    setModal(visible) {
        this.setState({menu: visible});
    };
    componentDidMount() {
        loadmenu().then((data) => {
            var today = new Date();
            var menus  = data;
            menus[8].breakfast = menus[8].breakfast.replace('00원', '00원\n');
            menus[8].lunch = menus[8].lunch.replace('00원', '00원\n');
            menus[8].dinner = menus[8].dinner.replaceAll('00원', '00원\n');
            menus[11].lunch = menus[11].lunch.replace('00원', '00원\n');
            menus[11].dinner = menus[11].dinner.replace('00원', '00원\n');
            menus[13].lunch = menus[13].lunch.replace('00원', '00원\n');
            menus[13].dinner = menus[13].dinner.replace('00원', '00원\n');
            menus[9].lunch = menus[9].lunch.replaceAll('00원', '00원\n');
            menus[9].dinner = menus[9].dinner.replaceAll('00원', '00원\n');

            if (today.getDay() == 0){
                menulist[0] = `\n점심\n${data[0].lunch}\n\n저녁\n${data[0].dinner}\n\n`;
                menulist[5] = `\n점심\n${data[1].lunch}\n\n저녁\n${data[1].dinner}\n\n`;
                menulist[8] = `\n아침\n${data[2].breakfast}\n\n점심\n${data[2].lunch}\n\n저녁\n${data[2].dinner}\n\n`;

            } else if (today.getDay() == 6){
                menulist[0] = `\n점심\n${data[0].lunch}\n\n저녁\n${data[0].dinner}\n\n`;
                menulist[3] = `\n점심\n${data[1].lunch}\n\n저녁\n${data[1].dinner}\n\n`;
                menulist[4] = `\n점심\n${data[2].lunch}\n\n저녁\n${data[2].dinner}\n\n`;
                menulist[5] = `\n점심\n${data[3].lunch}\n\n저녁\n${data[3].dinner}\n\n`;
                menulist[6] = `\n점심\n${data[4].lunch}\n\n저녁\n${data[4].dinner}\n\n`;
                menulist[8] = `\n아침\n${data[5].breakfast}\n\n점심\n${data[5].lunch}\n\n저녁\n${data[5].dinner}\n\n`;

            } else {
                for (var i = 0; i < data.length; i++) {
                    menulist[i] = `\n점심\n${data[i].lunch}\n\n저녁\n${data[i].dinner}\n\n`;
                }
                menulist[0] = `\n아침\n${data[0].breakfast}\n\n점심\n${data[0].lunch}\n\n저녁\n${data[0].dinner}\n\n`;
                menulist[8] = `\n아침\n${data[8].breakfast}\n\n점심\n${data[8].lunch}\n\n저녁\n${data[8].dinner}\n\n`;
                menulist[7] = `\n점심\n${data[7].lunch}\n\n`;
            }


        })
    }
    Modals(number) {
        return (
            <Modal
            animationType="slide"
            transparent={true}
            visible={(this.state.menu == number)}
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
    
                    <ScrollView style={styles.modalinside}>
                        <Text style={styles.modalhead}>{meallist[number]}</Text>
                        <Text style={styles.modaltext}>{menulist[number]}</Text>
                    </ScrollView>
    
                    <TouchableOpacity
                        style={{
                        height: 50,
                        backgroundColor: 'rgb(176,155,222)',
                        borderBottomLeftRadius: 15,
                        borderBottomRightRadius: 15
                    }}
                        onPress={() => {
                        this.setModal(-1)
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

    render() {
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
                            <Text style={styles.tdtext}>라운지오</Text>
                        </View>
                        <View style={styles.td}>{loungeo()}</View>
                        <View style={styles.td}>
                            <Text style={styles.menu}>경양식</Text>
                        </View>
                    </View>

                    <View style={styles.container2}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>샤반</Text>
                        </View>
                        <View style={styles.td}>{shaban()}</View>
                        <View style={styles.td}>
                            <Text style={styles.menu}>한식</Text>
                        </View>
                    </View>

                    <View style={styles.container}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>롯데리아</Text>
                        </View>
                        <View style={styles.td}>{lotte()}</View>
                        <View style={styles.td}>
                            <Text style={styles.menu}>햄버거</Text>
                        </View>
                    </View>

                    <View style={styles.container2}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>휴김밥</Text>
                        </View>
                        <View style={styles.td}>{hyu()}</View>
                        <View style={styles.td}>
                            <Text style={styles.menu}>분식</Text>
                            </View>
                        </View>

                        <View style={styles.container}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>BBQ</Text>
                        </View>
                        <View style={styles.td}>{bbq()}</View>
                        <View style={styles.td}>
                            <Text style={styles.menu}>치킨 등</Text>
                        </View>
                    </View>
                    <View style={styles.container2}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>텐카이핀</Text>
                        </View>
                        <View style={styles.td}>{tenk()}</View>
                        <View style={styles.td}>
                            <Text style={styles.menu}>일식</Text>
                            </View>
                        </View>

                        <View style={styles.container}>
                        <View style={styles.td}>
                            <Text style={styles.tdtext}>포포인</Text>
                        </View>
                        <View style={styles.td}>{pho()}</View>
                        <View style={styles.td}>
                            <Text style={styles.menu}>쌀국수 등</Text>
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
        height: '60%',
        width: '92%',
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
        padding: 20
    },
    modalhead: {
        fontSize: 20,
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

function dormmeal() {
    var date = new Date()
    var day = date.getDay()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    if (day == 0 || day == 6) {
        if (hours < 8) {
            return <View>
                <Text style={styles.nowoff}>미운영</Text>
                <Text style={styles.nowwait}>8시 아침시작</Text>
            </View>
        } else if (hours == 8 || (hours == 9 && minutes < 30)) {
            return <Text style={styles.nowon}>운영중{'\n'}9시30분까지</Text>
        } else if ((hours == 9 && minutes >= 30) || hours == 10 || (hours == 11 && minutes < 30)) {
            return <View>
                <Text style={styles.nowoff}>미운영</Text>
                <Text style={styles.nowwait}>11시30분 점심시작</Text>
            </View>
        } else if ((hours == 11 && minutes >= 30) || hours == 12 || (hours == 13 && minutes < 30)) {
            return <Text style={styles.nowon}>운영중{'\n'}13시30분까지</Text>
        } else if ((hours == 13 && minutes >= 30) || (hours >= 14 && hours < 17) || (hours == 17 && minutes < 30)) {
            return <View>
                <Text style={styles.nowoff}>미운영</Text>
                <Text style={styles.nowwait}>17시30분 저녁시작</Text>
            </View>
        } else if ((hours == 17 && minutes >= 30) || hours == 18 || (hours == 19 && minutes < 30)) {
            return <Text style={styles.nowon}>운영중{'\n'}19시30분까지</Text>
        } else {
            return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
        }
    } else {
        if (hours < 7 || (hours == 7 && minutes < 30)) {
            return <View>
                <Text style={styles.nowoff}>미운영</Text>
                <Text style={styles.nowwait}>7시30분 아침시작</Text>
            </View>
        } else if ((hours == 7 && minutes >= 30) || (hours == 9 && minutes < 30)) {
            return <Text style={styles.nowon}>운영중{'\n'}9시30분까지</Text>
        } else if ((hours == 9 && minutes >= 30) || hours == 10 || (hours == 11 && minutes < 30)) {
            return <View>
                <Text style={styles.nowoff}>미운영</Text>
                <Text style={styles.nowwait}>11시30분 점심시작</Text>
            </View>
        } else if ((hours == 11 && minutes >= 30) || hours == 12 || (hours == 13 && minutes < 30)) {
            return <Text style={styles.nowon}>운영중{'\n'}13시30분까지</Text>
        } else if ((hours == 13 && minutes >= 30) || (hours >= 14 && hours < 17) || (hours == 17 && minutes < 30)) {
            return <View>
                <Text style={styles.nowoff}>미운영</Text>
                <Text style={styles.nowwait}>17시30분 저녁시작</Text>
            </View>
        } else if ((hours == 17 && minutes >= 30) || hours == 18 || (hours == 19 && minutes < 30)) {
            return <Text style={styles.nowon}>운영중{'\n'}19시30분까지</Text>
        } else {
            return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
        }
    }
}

function hgmeal() {
    var date = new Date()
    var day = date.getDay()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    if (day > 0 && day < 6) {
        if (hours < 8) {
            return <View>
                <Text style={styles.nowoff}>미운영</Text>
                <Text style={styles.nowwait}>8시 아침시작</Text>
            </View>
        } else if (hours >= 8 && hours < 10) {
            return <Text
                style={{
                color: 'blue',
                fontWeight: 'bold',
                textAlign: 'center'
            }}>운영중{'\n'}10시까지</Text>
        } else if (hours == 10) {
            return <View>
                <Text style={styles.nowoff}>미운영</Text>
                <Text style={styles.nowwait}>11시 점심시작</Text>
            </View>
        } else if (hours >= 11 && hours < 15) {
            return <Text style={styles.nowon}>운영중{'\n'}15시까지</Text>
        } else if (hours == 16) {
            return <View>
                <Text style={styles.nowoff}>미운영</Text>
                <Text
                    style={{
                    color: 'green',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>17시 저녁시작</Text>
            </View>
        } else if (hours == 17 || hours == 18 || (hours == 19 && minutes < 1)) {
            return <Text
                style={{
                color: 'blue',
                fontWeight: 'bold',
                textAlign: 'center'
            }}>운영중{'\n'}19시까지</Text>
        } else {
            return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
        }
    } else {
        if (hours < 11 || (hours == 11 && minutes < 30)) {
            return <View>
                <Text style={styles.nowoff}>미운영</Text>
                <Text style={styles.nowwait}>11시30분 점심시작</Text>
            </View>
        } else if ((hours == 11 && minutes >= 30) || hours == 12 || hours == 13) {
            return <Text
                style={{
                color: 'blue',
                fontWeight: 'bold',
                textAlign: 'center'
            }}>운영중{'\n'}14시까지</Text>
        } else if (hours >= 14 && hours < 17) {
            return <View>
                <Text style={styles.nowoff}>미운영</Text>
                <Text
                    style={{
                    color: 'green',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>17시 저녁시작</Text>
            </View>
        } else if (hours >= 17 && hours < 19) {
            return <Text
                style={{
                color: 'blue',
                fontWeight: 'bold',
                textAlign: 'center'
            }}>운영중{'\n'}19시까지</Text>
        } else {
            return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
        }
    }
}

function hgmeal2() {
    var date = new Date()
    var day = date.getDay()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    if (day == 0 || day == 6) {
        return <Text style={styles.nowoff}>주말에는{'\n'}운영안함</Text>
    } else if ((hours >= 11 && hours < 13) || (hours == 13 && minutes < 30)) {
        return <Text
            style={{
            textAlign: 'center',
            color: 'blue',
            fontWeight: 'bold',
            textAlign: 'center'
        }}>운영중{'\n'}13시30분까지</Text>
    } else if ((day > 0 && day < 6) && (hours >= 14 && hours < 18)) {
        return <Text style={styles.nowon}>운영중(분식){'\n'}18시까지</Text>
    } else if (hours < 11) {
        return <View>
            <Text style={styles.nowoff}>미운영</Text>
            <Text style={styles.nowwait}>11시 점심시작</Text>
        </View>
    } else if (hours == 13) {
        return <View>
            <Text style={styles.nowoff}>미운영</Text>
            <Text style={styles.nowwait}>14시 9출시작</Text>
        </View>
    } else {
        return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
    }
}

function gongmeal() {
    var date = new Date()
    var day = date.getDay()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    if (day == 0 || day == 6) {
        return <Text style={styles.nowoff}>주말에는{'\n'}운영안함</Text>
    } else if (hours >= 11 && hours < 19) {
        return <Text style={styles.nowon}>운영중{'\n'}19시까지</Text>
    } else if (hours < 11) {
        return <View>
            <Text style={styles.nowoff}>미운영</Text>
            <Text style={styles.nowwait}>11시 운영시작</Text>
        </View>
    } else {
        return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
    }
}

function eng302meal() {
    var date = new Date()
    var day = date.getDay()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    if (day == 0 || day == 6) {
        return <Text style={styles.nowoff}>주말에는{'\n'}운영안함</Text>
    } else if ((hours > 11 && hours < 14) || (hours == 11 && minutes >= 15)) {
        return <Text style={styles.nowon}>운영중{'\n'}14시까지</Text>
    } else if (hours >= 17 && hours < 19) {
        return <Text style={styles.nowon}>운영중{'\n'}19시까지</Text>
    } else if (hours < 11 || (hours == 11 && minutes < 15)) {
        return <View>
            <Text style={styles.nowoff}>미운영</Text>
            <Text style={styles.nowwait}>11시15분 점심시작</Text>
        </View>
    } else if (hours < 17 && hours >= 14) {
        return <View>
            <Text style={styles.nowoff}>미운영</Text>
            <Text style={styles.nowwait}>17시 저녁시작</Text>
        </View>
    } else {
        return <Text style={styles.nowoff}>운영종료</Text>
    }
}

function eng301meal() {
    var date = new Date()
    var day = date.getDay()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    if (day == 0 || day == 6) {
        return <Text style={styles.nowoff}>주말에는{'\n'}운영안함</Text>
    } else if (hours >= 11 && hours < 14) {
        return <Text style={styles.nowon}>운영중{'\n'}14시까지</Text>
    } else if (hours >= 17 && hours < 19) {
        return <Text style={styles.nowon}>운영중{'\n'}19시까지</Text>
    } else if (hours < 11) {
        return <View>
            <Text style={styles.nowoff}>미운영</Text>
            <Text style={styles.nowwait}>11시 점심시작</Text>
        </View>
    } else if (hours < 17 && hours >= 14) {
        return <View>
            <Text style={styles.nowoff}>미운영</Text>
            <Text style={styles.nowwait}>17시 저녁시작</Text>
        </View>
    } else {
        return <Text style={styles.nowoff}>운영종료</Text>
    }
}

function artmeal() {
    var date = new Date()
    var day = date.getDay()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    if (day == 0 || day == 6) {
        return <Text style={styles.nowoff}>주말에는{'\n'}운영안함</Text>
    } else if ((hours == 11 && minutes >= 30) || (hours > 11 && hours < 14)) {
        return <Text style={styles.nowon}>운영중{'\n'}14시까지</Text>
    } else if (hours >= 17 && hours < 19) {
        return <Text style={styles.nowon}>운영중{'\n'}19시까지</Text>
    } else if (hours < 11 || (hours == 11 && minutes < 30)) {
        return <View>
            <Text style={styles.nowoff}>미운영</Text>
            <Text style={styles.nowwait}>11시30분 점심시작</Text>
        </View>
    } else if (hours < 17 && hours >= 14) {
        return <View>
            <Text style={styles.nowoff}>미운영</Text>
            <Text style={styles.nowwait}>17시 저녁시작</Text>
        </View>
    } else {
        return <Text style={styles.nowoff}>운영종료</Text>
    }
}

function ggmeal() {
    var date = new Date()
    var day = date.getDay()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    if (day == 0 || day == 6) {
        return <Text style={styles.nowoff}>주말에는{'\n'}운영안함</Text>
    } else if (hours >= 11 && hours < 14) {
        return <Text style={styles.nowon}>운영중{'\n'}14시까지</Text>
    } else if ((hours >= 17 && hours < 18) || (hours == 18 && minutes < 30)) {
        return <Text style={styles.nowon}>운영중{'\n'}18시30분까지</Text>
    } else if (hours < 11) {
        return <View>
            <Text style={styles.nowoff}>미운영</Text>
            <Text style={styles.nowwait}>11시 점심시작</Text>
        </View>
    } else if (hours < 17 && hours >= 14) {
        return <View>
            <Text style={styles.nowoff}>미운영</Text>
            <Text style={styles.nowwait}>17시 저녁시작</Text>
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
    var date = new Date()
    var day = date.getDay()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    if (day == 0 || day == 6) {
        return <Text style={styles.nowoff}>주말에는{'\n'}운영안함</Text>
    } else if (hours >= 11 && hours < 14) {
        return <Text style={styles.nowon}>운영중{'\n'}14시까지</Text>
    } else if (hours < 11) {
        return <View>
            <Text style={styles.nowoff}>미운영</Text>
            <Text style={styles.nowwait}>11시 점심시작</Text>
        </View>
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
    var day = date.getDay()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    if (day == 0 || day == 6) {
        return <Text style={styles.nowoff}>주말에는{'\n'}운영안함</Text>
    } else if (hours >= 11 && hours < 14) {
        return <Text style={styles.nowon}>운영중{'\n'}14시까지</Text>
    } else if (hours >= 17 && hours < 19) {
        return <Text style={styles.nowon}>운영중{'\n'}19시까지</Text>
    } else if (hours < 11) {
        return <View>
            <Text style={styles.nowoff}>미운영</Text>
            <Text style={styles.nowwait}>11시 점심시작</Text>
        </View>
    } else if (hours < 17 && hours >= 14) {
        return <View>
            <Text style={styles.nowoff}>미운영</Text>
            <Text style={styles.nowwait}>17시 저녁시작</Text>
        </View>
    } else {
        return <Text style={styles.nowoff}>운영종료</Text>
    }
}

function loungeo() {
    var date = new Date()
    var day = date.getDay()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    if (hours >= 11 && hours < 21) {
        return <Text style={styles.nowon}>운영중{'\n'}21시까지</Text>
    } else if (hours < 11) {
        return <View>
            <Text style={styles.nowoff}>미운영</Text>
            <Text style={styles.nowwait}>11시 운영시작</Text>
        </View>
    } else {
        return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
    }
}

function shaban() {
    var date = new Date()
    var day = date.getDay()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    if (day == 0) {
        return <Text style={styles.nowoff}>일요일은{'\n'}운영안함</Text>
    } else if (day == 6) {
        if (hours < 11 || (hours == 11 && minutes < 30)) {
            return <View>
                <Text style={styles.nowoff}>미운영</Text>
                <Text style={styles.nowwait}>11시30분{'\n'}점심시작</Text>
            </View>
        } else if ((hours >= 12 && hours < 14) || (hours == 11 && minutes >= 30)) {
            return <Text style={styles.nowon}>운영중{'\n'}14시까지</Text>
        } else {
            return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
        }
    } else if (hours < 11) {
        return <View>
            <Text style={styles.nowoff}>미운영</Text>
            <Text style={styles.nowwait}>11시 점심시작</Text>
        </View>
    } else if ((hours >= 11 && hours < 14) || (hours == 14 && minutes < 30)) {
        return <Text style={styles.nowon}>운영중{'\n'}14시30분까지</Text>
    } else if ((hours == 14 && minutes >= 30) || hours == 15 || (hours == 16 && minutes < 30)) {
        return <View>
            <Text style={styles.nowoff}>미운영</Text>
            <Text style={styles.nowwait}>16시30분{'\n'}저녁시작</Text>
        </View>
    } else if ((hours >= 17 && hours < 20) || (hours == 16 && minutes >= 30)) {
        return <Text style={styles.nowon}>운영중{'\n'}20시까지</Text>
    } else {
        return <Text style={styles.nowoff}>운영종료{'\n'}오늘은끝</Text>
    }
}

function lotte() {
    var date = new Date()
    var day = date.getDay()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    if (hours < 8){
        return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시부터</Text></View>
      } else if (hours < 22) {
        return <Text style={styles.nowon}>{`운영중\n22시까지`}</Text>
      } else {
        return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
      }
    }

function hyu() {
    var date = new Date()
    var day = date.getDay()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    if ( (hours < 9) || (hours == 9 && minutes < 20 )  ){
        return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9시 20분부터</Text></View>
      } else if (hours < 22) {
        return <Text style={styles.nowon}>{`운영중\n22시까지`}</Text>
      } else {
        return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
      }
    }
function bbq(){
    var date = new Date()
    var day = date.getDay()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    if (hours < 9){
        return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9시부터</Text></View>
      } else if (hours < 21) {
        return <Text style={styles.nowon}>{`운영중\n21시까지`}</Text>
      } else {
        return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
      }
}

function tenk(){
    var date = new Date()
    var day = date.getDay()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    if (day == 0) {
        return <Text style={styles.nowoff}>{`일요일은\n운영안함함`}</Text>
    } else {
        if (hours < 11){
            return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>11시부터</Text></View>
          } else if (hours < 20) {
            return <Text style={styles.nowon}>{`운영중\n20시까지`}</Text>
          } else {
            return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
          }    
    }
}

function pho(){
    var date = new Date()
    var day = date.getDay()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    if (hours < 10){
        return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>10시부터</Text></View>
      } else if (hours < 21) {
        return <Text style={styles.nowon}>{`운영중\n21시까지`}</Text>
      } else {
        return <Text style={styles.nowoff}>{`운영종료\n오늘은끝`}</Text>
      }
}

export default Mealtable;
