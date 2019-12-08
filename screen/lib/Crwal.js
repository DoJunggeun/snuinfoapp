// import React, {Component} from 'react';
// import { Dimensions, Modal, ScrollView, StyleSheet, Linking, View, Text, TouchableOpacity, Image} from 'react-native';
// import { getStatusBarHeight } from 'react-native-status-bar-height';
// import { WebView } from 'react-native-webview';
// import SafeAreaView from 'react-native-safe-area-view';
// import { NavigationActions } from 'react-navigation';
// const WEBVIEW_REF = "WEBVIEW_REF";

const axios = require("axios");
const cheerio = require("cheerio");

function trim(value){
    value = value.replace(/\s+/, "");//왼쪽 공백제거
    value = value.replace(/\s+$/g, "");//오른쪽 공백제거
    value = value.replace(/\n/g, "");//행바꿈제거
    value = value.replace(/\r/g, "");//엔터제거
    return value;}

async function loadmenu() {
    var html = await axios.get("http://snuco.snu.ac.kr/ko/foodmenu");

    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("table.views-table tbody").children("tr");
    
    $bodyList.each(function (i, elem) {
        ulList[i] = {
            title: $(this).find('td.views-field-field-restaurant').text().trim(),
            breakfast: $(this).find('td.views-field-field-breakfast p').text().trim(),
            lunch: $(this).find('td.views-field-field-lunch p').text().trim(),
            dinner: $(this).find('td.views-field-field-dinner p').text().trim(),
        };
    });
    const data = ulList.filter(n => n.title);
    return data;
}

loadmenu().then(function(result){
    console.log(result);
})

