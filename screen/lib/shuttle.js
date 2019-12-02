function ststation() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>주말에는 운행안함</Text>
  } else if (date.getHours() >= 19) {
    return <Text style={styles.nowoff}>운행종료</Text>
  } else if (date.getHours() == 19) {
    return <Text style={styles.nowon}>학교→설입 운행중 19시까지</Text>
  } else if (date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운행</Text> <Text style={styles.nowwait}>7시부터</Text></View>
  } else {
    return <Text style={styles.nowon}>운행중 19시까지</Text>
  }
}

function stdhd() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>주말에는 운행안함</Text>
  } else if (date.getHours() >= 19) {
    return <Text style={styles.nowoff}>운행종료</Text>
  } else if (date.getHours() == 19) {
    return <Text style={styles.nowon}>학교→녹두 운행중 19시까지</Text>
  } else if (date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운행</Text> <Text style={styles.nowwait}>7시부터</Text></View>
  } else {
    return <Text style={styles.nowon}>운행중 19시까지</Text>
  }
}

function stsdstation() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>주말에는 운행안함</Text>
  } else if (date.getHours() > 10) {
    return <Text style={styles.nowoff}>운행종료</Text>
  } else if (date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운행</Text> <Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowon}>운행중 11시까지</Text>
  }
}

function stinner() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>주말에는 운행안함</Text>
  } else if (date.getHours() > 20) {
    return <Text style={styles.nowoff}>운행종료</Text>
  } else if (date.getHours() < 8) {
    return <View><Text style={styles.nowoff}>미운행</Text> <Text style={styles.nowwait}>8시부터</Text></View>
  } else {
    return <Text style={styles.nowon}>운행중 21시까지</Text>
  }
}

function stnight() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>주말에는 운행안함</Text>
  } else if (date.getHours() > 23 && date.getMinutes() > 10) {
    return <Text style={styles.nowoff}>운행종료</Text>
  } else if (date.getHours() < 21 || ((date.getHours() == 21) && (date.getMinutes() < 10))) {
    return <View><Text style={styles.nowoff}>미운행</Text> <Text style={styles.nowwait}>21시10분부터</Text></View>
  } else {
    return <Text style={styles.nowon}>운행중 23시10분까지</Text>
  }
}

function stnsdstation() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>주말에는 운행안함</Text>
  } else if (date.getHours() > 10) {
    return <Text style={styles.nowoff}>운행종료</Text>
  } else if (date.getHours() < 8 || (date.getHours() == 8 && date.getMinutes() < 30)) {
    return <View><Text style={styles.nowoff}>미운행</Text> <Text style={styles.nowwait}>8시30분부터</Text></View>
  } else {
    return <Text style={styles.nowon}>운행중 11시까지</Text>
  }
}

function steng() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>주말에는 운행안함</Text>
  } else if (date.getHours() > 10) {
    return <Text style={styles.nowoff}>운행종료</Text>
  } else if (date.getHours() < 8) {
  return <View><Text style={styles.nowoff}>미운행</Text> <Text style={styles.nowwait}>8시부터</Text></View>
} else {
  return <Text style={styles.nowon}>운행중 11시까지</Text>
}
}

function stinnerreverse() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={styles.nowoff}>주말에는 운행안함</Text>
  } else if (date.getHours() > 17 || (date.getHours() == 17 && date.getMinutes() > 50)) {
    return <Text style={styles.nowoff}>운행종료</Text>
  } else if (date.getHours() < 9 || (date.getHours() == 9 && date.getMinutes() < 50)) {
  return <View><Text style={styles.nowoff}>미운행</Text> <Text style={styles.nowwait}>9시50분부터</Text></View>
} else {
  return <Text style={styles.nowon}>운행중 17시50분까지</Text>
}
}

function stnight2() {
  var date = new Date();
  if (date.getDay() == 0 || (date.getDay() == 6 && date.getHours() >= 2)) {
    return <Text style={styles.nowoff}>주말에는 운행안함</Text>
  } else if (date.getHours() >= 2) {
    return <View><Text style={styles.nowoff}>미운행</Text> <Text style={styles.nowwait}>자정부터</Text></View>
} else {
  return <Text style={styles.nowon}>운행중 02시까지</Text>
}
}




function ststationinterval() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text>5~15분</Text>
  } else if (date.getHours() > 19 || date.getHours() < 7) {
    return <Text>5~15분</Text>
  } else if (date.getHours() == 7) {
    return <Text>15분</Text>
  } else if (date.getHours() >= 8 && date.getHours() < 11) {
    return <Text>5~7분</Text>
  } else if ((date.getHours() >= 11 && date.getHours() < 15) || (date.getHours() == 15 && date.getMinutes() < 30)) {
    return <Text>10분</Text>
  } else if (date.getHours() >= 15 || date.getHours() < 17) {
    return <Text>7~10분</Text>
  } else if (date.getHours() == 17 || date.getHours() == 18) {
    return <Text>5~7분</Text>
  }
}

function stdhdinterval() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text>6~15분</Text>
  } else if (date.getHours() > 19 || date.getHours() < 7) {
    return <Text>5~15분</Text>
  } else if (date.getHours() == 7) {
    return <Text>15분</Text>
  } else if (date.getHours() >= 8 && date.getHours() < 10) {
    return <Text>6분</Text>
  } else if ((date.getHours() >= 10 && date.getHours() < 12) || (date.getHours() == 12 && date.getMinutes() < 10)) {
    return <Text>10분</Text>
  } else if (date.getHours() == 12 || (date.getHours() == 13 && date.getMinutes() < 30)) {
    return <Text>15분</Text>
  } else if (date.getHours() >= 13 && date.getHours() < 17) {
    return <Text>10분</Text>
  } else if (date.getHours() == 17 || date.getHours() == 18) {
    return <Text>6분</Text>
  }
}

function stinnerinterval() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text>7~20분</Text>
  } else if (date.getHours() > 20 || date.getHours() < 7) {
    return <Text>7~20분</Text>
  } else if (date.getHours() < 19) {
    return <Text>7분</Text>
  } else if (date.getHours() == 19 || date.getHours() == 20) {
    return <Text>20분</Text>
  }
}
