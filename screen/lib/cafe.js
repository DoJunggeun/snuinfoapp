function musicnn() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>주말에는 운영안함</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 9 && date.getHours() < 19)) {
    return <Text style={styles.nowon}>운영중 19시까지</Text>
  } else if (date.getHours() < 9) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>9시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료 오늘은끝</Text>
  }
}

function jhynn() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>주말에는 운영안함</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 9 && date.getHours() < 19) || (date.getHours() == 8 && date.getMinutes() >= 30))) {
    return <Text style={styles.nowon}>운영중 19시까지</Text>
  } else if (date.getHours() < 8 || (date.getHours() == 8 && date.getMinutes() < 30)) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>8시30분부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료 오늘은끝</Text>
  }
}


function cafe104() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>주말에는 운영안함</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 9 && date.getHours() < 18) || (date.getHours() == 8 && date.getMinutes() >= 30) || (date.getHours() == 18 && date.getMinutes() < 30))) {
    return <Text style={styles.nowon}>운영중 18시30분까지</Text>
  } else if (date.getHours() < 8 || (date.getHours() == 8 && date.getMinutes() < 30)) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>8시30분부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료 오늘은끝</Text>
  }
}

function moaart() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>주말에는 운영안함</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 8 && date.getHours() < 17)) {
    return <Text style={styles.nowon}>운영중 17시까지</Text>
  } else if (date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료 오늘은끝</Text>
  }
}

function tea() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>주말에는 운영안함</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 10 && date.getHours() < 17) || (date.getHours() == 17 && date.getMinutes() < 30))) {
    return <Text style={styles.nowon}>운영중 17시30분까지</Text>
  } else if (date.getHours() < 10) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>10시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료 오늘은끝</Text>
  }
}

function lannn() {
  var date = new Date();
  if ((date.getDay() == 6) && ((date.getHours() > 9 && date.getHours() < 16) || (date.getHours() == 9 && date.getMinutes() >= 30))) {
    return <Text style={styles.nowon}>운영중 16시까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 8 && date.getHours() < 19)) {
    return <Text style={styles.nowon}>운영중 19시까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>8시부터</Text></View>
  } else if (date.getDay() == 6 && date.getHours() < 10) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>9시30분부터</Text></View>
  } else if (date.getDay() == 0) {
    return <Text style={styles.nowoff}>일요일은 운영안함</Text>
  } else {
    return <Text style={styles.nowoff}>운영종료 오늘은끝</Text>
  }
}

function dwgnn() {
  var date = new Date();
  if ((date.getDay() == 6) && (date.getHours() >= 9 && date.getHours() < 16)) {
    return <Text style={styles.nowon}>운영중 16시까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() > 8 && date.getHours() < 19) || (date.getHours() == 8 && date.getMinutes() >= 30))) {
    return <Text style={styles.nowon}>운영중 19시까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 8 || (date.getHours() == 8 && date.getMinutes() < 30))) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>8시30분부터</Text></View>
  } else if (date.getDay() == 6 && date.getHours() < 9) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>9시부터</Text></View>
  } else if (date.getDay() == 0) {
    return <Text style={styles.nowoff}>일요일은 운영안함</Text>
  } else {
    return <Text style={styles.nowoff}>운영종료 오늘은끝</Text>
  }
}

function belepi() {
  var date = new Date();
  if ((date.getDay() == 6) && (date.getHours() >= 8 && date.getHours() < 18)) {
    return <Text style={styles.nowon}>운영중 18시까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 8 && date.getHours() < 20)) {
    return <Text style={styles.nowon}>운영중 20시까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>8시부터</Text></View>
  } else if (date.getDay() == 6 && date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>8시부터</Text></View>
  } else if (date.getDay() == 0) {
    return <Text style={styles.nowoff}>일요일은 운영안함</Text>
  } else {
    return <Text style={styles.nowoff}>운영종료 오늘은끝</Text>
  }
}

function eyagi() {
  var date = new Date();
  if ((date.getDay() == 6) && (date.getHours() >= 10 && date.getHours() < 18)) {
    return <Text style={styles.nowon}>운영중 18시까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 8 && date.getHours() < 19) || (date.getHours() == 19 && date.getMinutes() < 30))) {
    return <Text style={styles.nowon}>운영중 19시30분까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>8시부터</Text></View>
  } else if (date.getDay() == 6 && date.getHours() < 10) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>10시부터</Text></View>
  } else if (date.getDay() == 0) {
    return <Text style={styles.nowoff}>일요일은 운영안함</Text>
  } else {
    return <Text style={styles.nowoff}>운영종료 오늘은끝</Text>
  }
}

function snack() {
  var date = new Date();
  if ((date.getDay() == 6) && ((date.getHours() >= 8 && date.getHours() < 15) || (date.getHours() == 7 && date.getMinutes() >= 30))) {
    return <Text style={styles.nowon}>운영중 15시까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 8 && date.getHours() < 19) || (date.getHours() == 7 && date.getMinutes() >= 30))) {
    return <Text style={styles.nowon}>운영중 19시까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 7 || (date.getHours() == 7 && date.getMinutes() >= 30))) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>7시30분부터</Text></View>
  } else if (date.getDay() == 6 && (date.getHours() < 7 || (date.getHours() == 7 && date.getMinutes() >= 30))) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>7시30분부터</Text></View>
  } else if (date.getDay() == 0) {
    return <Text style={styles.nowoff}>일요일은 운영안함</Text>
  } else {
    return <Text style={styles.nowoff}>운영종료 오늘은끝</Text>
  }
}

function vetsnack() {
  var date = new Date();
  if ((date.getDay() == 6) && (date.getHours() >= 9 && date.getHours() < 14)) {
    return <Text style={styles.nowon}>운영중 14시까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 9 && date.getHours() < 19)) {
    return <Text style={styles.nowon}>운영중 19시까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && date.getHours() < 9) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>9시부터</Text></View>
  } else if (date.getDay() == 6 && date.getHours() < 9) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>9시부터</Text></View>
  } else if (date.getDay() == 0) {
    return <Text style={styles.nowoff}>일요일은 운영안함</Text>
  } else {
    return <Text style={styles.nowoff}>운영종료 오늘은끝</Text>
  }
}

function libnn() {
  var date = new Date();
  if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() >= 11 && date.getHours() < 19)) {
    return <Text style={styles.nowon}>운영중 19시까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 8 && date.getHours() < 19) || (date.getHours() == 19 && date.getMinutes() < 30))) {
    return <Text style={styles.nowon}>운영중 19시30분까지</Text>
  } else if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() < 11)) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>11시부터</Text></View>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 8)) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료 오늘은끝</Text>
  }
}

function fluid() {
  var date = new Date();
  if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() >= 10 && date.getHours() < 15)) {
    return <Text style={styles.nowon}>운영중 15시까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 8 && date.getHours() < 19) || (date.getHours() == 19 && date.getMinutes() < 30))) {
    return <Text style={styles.nowon}>운영중 19시30분까지</Text>
  } else if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() < 10)) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>10시부터</Text></View>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 8)) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료 오늘은끝</Text>
  }
}

function twosome() {
  var date = new Date();
  if (date.getHours() >= 8 && date.getHours() < 22) {
    return <Text style={styles.nowon}>운영중 22시까지</Text>
  } else if (date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료 오늘은끝</Text>
  }
}

function pascucci() {
  var date = new Date();
  if (date.getHours() >= 8 && date.getHours() < 22) {
    return <Text style={styles.nowon}>운영중 22시까지</Text>
  } else if (date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료 오늘은끝</Text>
  }
}

function hollys() {
  var date = new Date();
  if (date.getHours() >= 8 && date.getHours() < 22) {
    return <Text style={styles.nowon}>운영중 22시까지</Text>
  } else if (date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료 오늘은끝</Text>
  }
}

function quiz() {
  var date = new Date();
  if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() >= 9 && date.getHours() < 19)) {
    return <Text style={styles.nowon}>운영중 19시까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 7 && date.getHours() < 20)) {
    return <Text style={styles.nowon}>운영중 20시까지</Text>
  } else if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() < 9)) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>9시부터</Text></View>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 7)) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>7시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료 오늘은끝</Text>
  }
}

function cafegran() {
  var date = new Date();
  if ((date.getDay() == 0 || date.getDay() == 6) && ((date.getHours() >= 8 && date.getHours() < 21) || (date.getHours() == 7 && date.getMinutes() >= 30))) {
    return <Text style={styles.nowon}>운영중 21시까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 8 && date.getHours() < 22) || (date.getHours() == 7 && date.getMinutes() >= 30))) {
    return <Text style={styles.nowon}>운영중 22시까지</Text>
  } else if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() < 7 || (date.getHours() == 7 && date.getMinutes() < 30))) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>7시30분부터</Text></View>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 7 || (date.getHours() == 7 && date.getMinutes() < 30))) {
    return <View><Text style={styles.nowoff}>미운영</Text> <Text style={styles.nowwait}>7시30분부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료 오늘은끝</Text>
  }
}
