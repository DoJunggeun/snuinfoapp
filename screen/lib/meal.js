function dormmeal() {
  var date = new Date()
  if (date.getDay() == 0 || date.getDay() == 6) {
    if (date.getHours() < 8) {
      return <View><Text style={{color:'red'}}>미운영{'\n'}</Text><Text style={{color:'green', fontWeight:'bold'}}>8시부터{'\n'}아침시작</Text></View>
    } else if (date.getHours() == 8 || (date.getHours() == 9 && date.getMinutes() < 30)) {
      return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}>9시30분까지</Text>
    } else if ((date.getHours() == 9 && date.getMinutes() >= 30) || date.getHours() == 10 || (date.getHours() == 11 && date.getMinutes() < 30)) {
      return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시30분부터{'\n'}>점심시작</Text></View>
    } else if ((date.getHours() == 11 && date.getMinutes() >= 30) || date.getHours() == 12 || (date.getHours() == 13 && date.getMinutes() < 30)) {
      return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}>13시30분까지</Text>
    } else if ((date.getHours() == 13 && date.getMinutes() >= 30) || (date.getHours() >= 14 && date.getHours() < 17) || (date.getHours() == 17 && date.getMinutes() < 30)) {
      return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>17시30분부터{'\n'}>저녁시작</Text></View>
    } else if ((date.getHours() == 17 && date.getMinutes() >= 30) || date.getHours() == 18 || (date.getHours() == 19 && date.getMinutes() < 30)) {
      return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}>19시30분까지</Text>
    } else {
      return <Text style={{color:'red'}}>운영종료{'\n'}오늘은끝</Text>
    }
  } else {
    if (date.getHours() < 7 || (date.getHours() == 7 && date.getMinutes() < 30)) {
      return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>7시30분부터{'\n'}>아침시작</Text></View>
    } else if ((date.getHours() == 7 && date.getMinutes() >= 30) || (date.getHours() == 9 && date.getMinutes() < 30)) {
      return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}>9시30분까지</Text>
    } else if ((date.getHours() == 9 && date.getMinutes() >= 30) || date.getHours() == 10 || (date.getHours() == 11 && date.getMinutes() < 30)) {
      return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시30분부터{'\n'}>점심시작</Text></View>
    } else if ((date.getHours() == 11 && date.getMinutes() >= 30) || date.getHours() == 12 || (date.getHours() == 13 && date.getMinutes() < 30)) {
      return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}>13시30분까지</Text>
    } else if ((date.getHours() == 13 && date.getMinutes() >= 30) || (date.getHours() >= 14 && date.getHours() < 17) || (date.getHours() == 17 && date.getMinutes() < 30)) {
      return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>17시30분부터{'\n'}>저녁시작</Text></View>
    } else if ((date.getHours() == 17 && date.getMinutes() >= 30) || date.getHours() == 18 || (date.getHours() == 19 && date.getMinutes() < 30)) {
      return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}>19시30분까지</Text>
    } else {
      return <Text style={{color:'red'}}>운영종료{'\n'}오늘은끝</Text>
    }
  }
}

function hgmeal() {
  var date = new Date()
  if (date.getDay() > 0 && date.getDay() < 6) {
    if (date.getHours() < 8) {
      return <View><Text style={{color:red}}>미운영</Text>
      <Text style={{color:green, fontWeight:bold}}>8시부터{'\n'}아침시작</Text></View>
    } else if (date.getHours() >= 8 && date.getHours() < 10) {
      return <Text style={{color:blue,fontWeight:bold}}>운영중{'\n'}10시까지</Text>
    } else if (date.getHours() == 10) {
      return <View><Text style={{color:red}}>미운영{'\n'}</Text><Text style={{color:green, fontWeight:bold}}>11시부터{'\n'}점심시작</Text></View>
    } else if (date.getHours() >= 11 && date.getHours() < 15) {
      return <Text style={{color:blue, fontWeight:bold}}>운영중{'\n'}15시까지</Text>
    } else if (date.getHours() == 16) {
      return <View><Text style={{color:red}}>미운영{'\n'}</Text><Text style={{color:green,fontWeight:bold}}>17시부터{'\n'}저녁시작</Text></View>
    } else if (date.getHours() == 17 || date.getHours() == 18 || (date.getHours() == 19 && date.getMinutes() < 1)) {
      return <Text style={{color:blue,fontWeight:bold}}>운영중{'\n'}19시까지</Text>
    } else {
      return <Text style={{color:red}}>운영종료{'\n'}오늘은끝</Text>
    }
  } else {
    if (date.getHours() < 11 || (date.getHours() == 11 && date.getMinutes() < 30)) {
      return <View><Text style={{color:red}}>미운영{'\n'}</Text><Text style={{color:green, fontWeight:bold}}>11시30분부터{'\n'}점심시작</Text></View>
    } else if ((date.getHours() == 11 && date.getMinutes() >= 30) || date.getHours() == 12 || date.getHours() == 13) {
      return <Text style={{color:blue,fontWeight:bold}}>운영중{'\n'}14시까지</Text>
    } else if (date.getHours() >= 14 && date.getHours() < 17) {
      return <View><Text style={{color:red}}>미운영{'\n'}</Text><Text style={{color:green,fontWeight:bold}}>17시부터{'\n'}저녁시작</Text></View>
    } else if (date.getHours() >= 17 && date.getHours() < 19) {
      return <Text style={{color:blue,fontWeight:bold}}>운영중{'\n'}19시까지</Text>
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
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}>13시30분까지</Text>
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 14 && date.getHours() < 18)) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중(분식){'\n'}>18시까지</Text>
  } else if (date.getHours() < 11) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시부터{'\n'}>점심시작</Text></View>
  } else if (date.getHours() == 13) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>14시부터{'\n'}>9출시작</Text></View>
  } else {
    return <Text style={{color:'red'}}>운영종료{'\n'}오늘은끝</Text>
  }
}

function gongmeal() {
  var date = new Date()
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={{color:'red'}}>주말에는{'\n'}운영안함</Text>
  } else if (date.getHours() >= 11 && date.getHours() < 19) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}>19시까지</Text>
  } else if (date.getHours() < 11) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시부터{'\n'}>운영시작</Text></View>
  } else {
    return <Text style={{color:'red'}}>운영종료{'\n'}오늘은끝</Text>
  }
}

function eng302meal() {
  var date = new Date()
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={{color:'red'}}>주말에는{'\n'}운영안함</Text>
  } else if ((date.getHours() > 11 && date.getHours() < 14) || (date.getHours() == 11 && date.getMinutes() >= 15)) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}>14시까지</Text>
  } else if (date.getHours() >= 17 && date.getHours() < 19) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}>19시까지</Text>
  } else if (date.getHours() < 11 || (date.getHours() == 11 && date.getMinutes() < 15)) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시15분부터{'\n'}>점심시작</Text></View>
  } else if (date.getHours() < 17 && date.getHours() >= 14) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>17시부터{'\n'}>저녁시작</Text></View>
  } else {
    return <Text style={{color:'red'}}>운영종료</Text>
  }
}

function eng301meal() {
  var date = new Date()
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={{color:'red'}}>주말에는{'\n'}운영안함</Text>
  } else if (date.getHours() >= 11 && date.getHours() < 14) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}>14시까지</Text>
  } else if (date.getHours() >= 17 && date.getHours() < 19) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}>19시까지</Text>
  } else if (date.getHours() < 11) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시부터{'\n'}>점심시작</Text></View>
  } else if (date.getHours() < 17 && date.getHours() >= 14) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>17시부터{'\n'}>저녁시작</Text></View>
  } else {
    return <Text style={{color:'red'}}>운영종료</Text>
  }
}

function artmeal() {
  var date = new Date()
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={{color:'red'}}>주말에는{'\n'}운영안함</Text>
  } else if ((date.getHours() == 11 && date.getMinutes() >= 30) || (date.getHours() > 11 && date.getHours() < 14)) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}>14시까지</Text>
  } else if (date.getHours() >= 17 && date.getHours() < 19) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}>19시까지</Text>
  } else if (date.getHours() < 11 || (date.getHours() == 11 && date.getMinutes() < 30)) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시30분부터{'\n'}>점심시작</Text></View>
  } else if (date.getHours() < 17 && date.getHours() >= 14) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>17시부터{'\n'}>저녁시작</Text></View>
  } else {
    return <Text style={{color:'red'}}>운영종료</Text>
  }
}


function ggmeal() {
  var date = new Date()
  if (date.getDay() == 0 || date.getDay() == 6) {
    return <Text style={{color:'red'}}>주말에는{'\n'}운영안함</Text>
  } else if (date.getHours() >= 11 && date.getHours() < 14) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}>14시까지</Text>
  } else if ((date.getHours() >= 17 && date.getHours() < 18) || (date.getHours() == 18 && date.getMinutes() < 30)) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}>18시30분까지</Text>
  } else if (date.getHours() < 11) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시부터{'\n'}>점심시작</Text></View>
  } else if (date.getHours() < 17 && date.getHours() >= 14) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>17시부터{'\n'}>저녁시작</Text></View>
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
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}>14시까지</Text>
  } else if (date.getHours() < 11) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시부터{'\n'}>점심시작</Text></View>
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
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}>14시까지</Text>
  } else if (date.getHours() >= 17 && date.getHours() < 19) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}>19시까지</Text>
  } else if (date.getHours() < 11) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시부터{'\n'}>점심시작</Text></View>
  } else if (date.getHours() < 17 && date.getHours() >= 14) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>17시부터{'\n'}>저녁시작</Text></View>
  } else {
    return <Text style={{color:'red'}}>운영종료</Text>
  }
}


function loungeo() {
  var date = new Date()
  if (date.getHours() >= 11 && date.getHours() < 21) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}>21시까지</Text>
  } else if (date.getHours() < 11) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시부터{'\n'}>운영시작</Text></View>
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
      return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시30분부터{'\n'}>점심시작</Text></View>
    } else if ((date.getHours() >= 12 && date.getHours() < 14) || (date.getHours() == 11 && date.getMinutes() >= 30)) {
      return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}>14시까지</Text>
    } else {
      return <Text style={{color:'red'}}>운영종료{'\n'}오늘은끝</Text>
    }
  } else if (date.getHours() < 11) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>11시부터{'\n'}>점심시작</Text></View>
  } else if ((date.getHours() >= 11 && date.getHours() < 14) || (date.getHours() == 14 && date.getMinutes() < 30)) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}>14시30분까지</Text>
  } else if ((date.getHours() == 14 && date.getMinutes() >= 30) || date.getHours() == 15 || (date.getHours() == 16 && date.getMinutes() < 30)) {
    return <View><Text style={{color:'red'}}>미운영</Text>{'\n'}<Text style={{color:'green', fontWeight:'bold'}}>16시30분부터{'\n'}>저녁시작</Text></View>
  } else if ((date.getHours() >= 17 && date.getHours() < 20) || (date.getHours() == 16 && date.getMinutes() >= 30)) {
    return <Text style={{color:'blue', fontWeight:'bold'}}>운영중{'\n'}>20시까지</Text>
  } else {
    return <Text style={{color:'red'}}>운영종료{'\n'}오늘은끝</Text>
  }
}
