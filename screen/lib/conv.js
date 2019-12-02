function hgconv() {
  var date = new Date();
  if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() >= 10 && date.getHours() < 19)) {
    return <Text style={styles.nowon}>운영중 19시까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 8 && date.getHours() < 19) || (date.getHours() == 19 && date.getMinutes() < 30))) {
    return <Text style={styles.nowon}>운영중 19시30분까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() == 19 && date.getHours() < 19)) {
    return <Text style={styles.nowon}>운영중 19시30분까지</Text>
  } else if ((date.getDay() == 0 || date.getDay() == 6) && date.getHours() < 10) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>10시부터</Text></View>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료 오늘은끝</Text>
  }
}

function hgmg() {
  var date = new Date();
  if ((date.getDay() == 6) && (date.getHours() >= 10 && date.getHours() < 17)) {
    return <Text style={styles.nowon}>운영중 17시까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 9 && date.getHours() < 18) || (date.getHours() == 18 && date.getMinutes() < 30))) {
    return <Text style={styles.nowon}>운영중18시30분까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && date.getHours() < 9) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9시부터</Text></View>
  } else if (date.getDay() == 6 && date.getHours() < 10) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>10시부터</Text></View>
  } else if (date.getDay() == 0) {
    return <Text style={styles.nowoff}>일요일은운영안함</Text>
  } else {
    return <Text style={styles.nowoff}>운영종료오늘은끝</Text>
  }
}

function jdCU() {
  var date = new Date();
  if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() >= 8 && date.getHours() < 20)) {
    return <Text style={styles.nowon}>운영중 20시까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 8 && date.getHours() < 22)) {
    return <Text style={styles.nowon}>운영중 22시까지</Text>
  } else if (date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료오늘은끝</Text>
  }
}

function nsconv() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>주말에는운영안함</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 10 && date.getHours() < 19)) {
    return <Text style={styles.nowon}>운영중19시까지</Text>
  } else if (date.getHours() < 10) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>10시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료오늘은끝</Text>
  }
}

function snuplex() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>주말에는운영안함</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 9 && date.getHours() < 18) || (date.getHours() == 18 && date.getMinutes() < 30))) {
    return <Text style={styles.nowon}>운영중18시30분까지</Text>
  } else if (date.getHours() < 9) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료오늘은끝</Text>
  }
}

function dwgconv() {
  var date = new Date();
  if (date.getDay() == 0) {
    return <Text style={styles.nowoff}>일요일은운영안함</Text>
  } else if ((date.getDay() == 6) && (date.getHours() >= 9 && date.getHours() < 17)) {
    return <Text style={styles.nowon}>운영중17시까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 8 && date.getHours() < 17) || (date.getHours() == 17 && date.getMinutes() < 30))) {
    return <Text style={styles.nowon}>운영중19시30분까지</Text>
  } else if (date.getDay() == 6 && date.getHours() < 9) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9시부터</Text></View>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 8)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료오늘은끝</Text>
  }
}


function eeoconv() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>주말에는운영안함</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 9 && date.getHours() < 19)) {
    return <Text style={styles.nowon}>운영중19시까지</Text>
  } else if (date.getHours() < 9) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료오늘은끝</Text>
  }
}


function engCU() {
  var date = new Date();
  if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() >= 9 && date.getHours() < 18)) {
    return <Text style={styles.nowon}>운영중18시까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 8 && date.getHours() < 22)) {
    return <Text style={styles.nowon}>운영중22시까지</Text>
  } else if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() < 9)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9시부터</Text></View>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 8)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료오늘은끝</Text>
  }
}


function cnsconv() {
  var date = new Date();
  if (date.getDay() == 0) {
    return <Text style={styles.nowoff}>일요일은운영안함</Text>
  } else if ((date.getDay() == 6) && (date.getHours() >= 10 && date.getHours() < 17)) {
    return <Text style={styles.nowon}>운영중17시까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 8 && date.getHours() < 19) || (date.getHours() == 19 && date.getMinutes() < 30))) {
    return <Text style={styles.nowon}>운영중19시30분까지</Text>
  } else if (date.getDay() == 6 && date.getHours() < 10) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>10시부터</Text></View>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() < 8) || (date.getHours() == 8 && date.getMinutes() < 30))) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시30분부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료오늘은끝</Text>
  }
}

function dormconv() {
  var date = new Date();
  if (date.getHours() >= 8 && date.getHours() < 24) {
    return <Text style={styles.nowon}>운영중밤1시반까지</Text>
  } else if (date.getHours() == 0 || (date.getHours() == 1 && date.getMinutes() < 30)) {
    return <Text style={styles.nowon}>운영중밤1시반까지</Text>
  } else if (date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시부터</Text></View>
  }
}

function vetconv() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>주말에는운영안함</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 9 && date.getHours() < 18)) {
    return <Text style={styles.nowon}>운영중18시까지</Text>
  } else if (date.getHours() < 9) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료오늘은끝</Text>
  }
}

function medconv() {
  var date = new Date();
  if (date.getDay() == 0) {
    return <Text style={styles.nowoff}>일요일은운영안함</Text>
  } else if ((date.getDay() == 6) && (date.getHours() >= 9 && date.getHours() < 18)) {
    return <Text style={styles.nowon}>운영중18시까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 8 && date.getHours() < 22)) {
    return <Text style={styles.nowon}>운영중22시까지</Text>
  } else if ((date.getDay() == 6) && (date.getHours() < 9)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>9시부터</Text></View>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 8)) {
    return <View><Text style={styles.nowoff}>미운영</Text><Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowoff}>운영종료오늘은끝</Text>
  }
}

function allday(){
  return <Text style={styles.nowon}>24시간운영</Text>
}
