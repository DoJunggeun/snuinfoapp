import React, {Component} from 'react';
import {
    Modal,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {WebView} from 'react-native-webview';
// import SafeAreaView from 'react-native-safe-area-view';
import {NavigationActions} from 'react-navigation';
import Mealtable from './Mealtable'
const WEBVIEW_REF = "WEBVIEW_REF";

class Meal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canGoBack: false,
            modalVisible: false,
            menuVisible: false
        };
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    setMenuVisible(visible) {
        this.setState({menuVisible: visible});
    }
    render() {
        const {navigation} = this.props;
        return (
            <View
                style={{
                flex: 1,
                flexDirection: 'column'
            }}>
                <View
                    style={{
                    height: getStatusBarHeight()
                }}/>

                <View
                    style={{
                    height: 50,
                    backgroundColor: 'rgb(176,155,222)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <View style={{flex:1}}>
                    <TouchableOpacity
                        style={{
                        flex: 1,
                        backgroundColor: 'rgb(176,155,222)'
                    }}
                        onPress={() => {
                        this.setModalVisible(true);
                    }}>
                        <View
                            style={{
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 0.5,
                            borderColor: 'darkgray'
                        }}>
                            <Text
                                style={{
                                color: 'white',
                                fontSize: 22,
                                fontWeight: 'bold'
                            }}>생협 식당 운영시간 전체보기</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                </View>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    style={{
                    marginTop: getStatusBarHeight()
                }}>
                    <WebView
                        source={{
                        uri: 'http://snuco.snu.ac.kr/ko/node/20'
                    }}
                        style={{
                        flex: 7
                    }}/>
                    <View
                        style={{
                        height: 50,
                        backgroundColor: 'rgb(176,155,222)',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                        <TouchableOpacity
                            style={{
                            flex: 1,
                            backgroundColor: 'rgb(176,155,222)'
                        }}
                            onPress={() => {
                            this.setModalVisible(false)
                        }}>
                            <View
                                style={{
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center'
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
                </Modal>

                <View style={{
                    flex: 1
                }}>

                    <Mealtable/>

                </View>
            </View>
        );
    }
    onNavigationStateChange(navState) {
        this.setState({canGoBack: navState.canGoBack});
    }
    onBack = () => {
        if (this.state.canGoBack) 
            this.refs[WEBVIEW_REF].goBack();
        }
    }

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
        alignItems: 'center',
        textAlign: 'center'
    },
    tdtext: {
        color: 'black',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500'
    },
    nowon: {
        color: 'blue',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500'
    },
    nowwait: {
        color: 'green',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500'
    },
    nowoff: {
        color: 'red',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500'
    },
    icon: {
        width: 40,
        height: 40
    }
});

export default Meal;
