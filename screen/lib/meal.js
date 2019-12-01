function dormmeal() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    if (date.getHours() < 8) {
      return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">8시부터<br/>아침시작</span>';
    } else if (date.getHours() == 8 || (date.getHours() == 9 && date.getMinutes() < 30)) {
      return '<span style="color:blue;font-weight:bold;">운영중<br/>9시30분까지</span>';
    } else if ((date.getHours() == 9 && date.getMinutes() >= 30) || date.getHours() == 10 || (date.getHours() == 11 && date.getMinutes() < 30)) {
      return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">11시30분부터<br/>점심시작</span>';
    } else if ((date.getHours() == 11 && date.getMinutes() >= 30) || date.getHours() == 12 || (date.getHours() == 13 && date.getMinutes() < 30)) {
      return '<span style="color:blue;font-weight:bold;">운영중<br/>13시30분까지</span>';
    } else if ((date.getHours() == 13 && date.getMinutes() >= 30) || (date.getHours() >= 14 && date.getHours() < 17) || (date.getHours() == 17 && date.getMinutes() < 30)) {
      return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">17시30분부터<br/>저녁시작</span>';
    } else if ((date.getHours() == 17 && date.getMinutes() >= 30) || date.getHours() == 18 || (date.getHours() == 19 && date.getMinutes() < 30)) {
      return '<span style="color:blue;font-weight:bold;">운영중<br/>19시30분까지</span>';
    } else {
      return '<span style="color:red;">운영종료<br />오늘은끝</span>';
    }
  } else {
    if (date.getHours() < 7 || (date.getHours() == 7 && date.getMinutes() < 30)) {
      return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">7시30분부터<br/>아침시작</span>';
    } else if ((date.getHours() == 7 && date.getMinutes() >= 30) || (date.getHours() == 9 && date.getMinutes() < 30)) {
      return '<span style="color:blue;font-weight:bold;">운영중<br/>9시30분까지</span>';
    } else if ((date.getHours() == 9 && date.getMinutes() >= 30) || date.getHours() == 10 || (date.getHours() == 11 && date.getMinutes() < 30)) {
      return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">11시30분부터<br/>점심시작</span>';
    } else if ((date.getHours() == 11 && date.getMinutes() >= 30) || date.getHours() == 12 || (date.getHours() == 13 && date.getMinutes() < 30)) {
      return '<span style="color:blue;font-weight:bold;">운영중<br/>13시30분까지</span>';
    } else if ((date.getHours() == 13 && date.getMinutes() >= 30) || (date.getHours() >= 14 && date.getHours() < 17) || (date.getHours() == 17 && date.getMinutes() < 30)) {
      return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">17시30분부터<br/>저녁시작</span>';
    } else if ((date.getHours() == 17 && date.getMinutes() >= 30) || date.getHours() == 18 || (date.getHours() == 19 && date.getMinutes() < 30)) {
      return '<span style="color:blue;font-weight:bold;">운영중<br/>19시30분까지</span>';
    } else {
      return '<span style="color:red;">운영종료<br />오늘은끝</span>';
    }
  }
}

function hgmeal() {
  var date = new Date();
  if (date.getDay() > 0 && date.getDay() < 6) {
    if (date.getHours() < 8) {
      return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">8시부터<br/>아침시작</span>';
    } else if (date.getHours() >= 8 && date.getHours() < 10) {
      return '<span style="color:blue;font-weight:bold;">운영중<br/>10시까지</span>';
    } else if (date.getHours() == 10) {
      return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">11시부터<br/>점심시작</span>';
    } else if (date.getHours() >= 11 && date.getHours() < 16) {
      return '<span style="color:blue;font-weight:bold;">운영중<br/>16시까지</span>';
    } else if (date.getHours() == 16) {
      return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">17시부터<br/>저녁시작</span>';
    } else if (date.getHours() == 17 || date.getHours() == 18 || (date.getHours() == 19 && date.getMinutes() < 30)) {
      return '<span style="color:blue;font-weight:bold;">운영중<br/>19시30분까지</span>';
    } else {
      return '<span style="color:red;">운영종료<br />오늘은끝</span>';
    }
  } else {
    if (date.getHours() < 11 || (date.getHours() == 11 && date.getMinutes() < 30)) {
      return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">11시30분부터<br/>점심시작</span>';
    } else if ((date.getHours() == 11 && date.getMinutes() >= 30) || date.getHours() == 12 || date.getHours() == 13) {
      return '<span style="color:blue;font-weight:bold;">운영중<br/>14시까지</span>';
    } else if (date.getHours() >= 14 && date.getHours() < 17) {
      return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">17시부터<br/>저녁시작</span>';
    } else if (date.getHours() >= 17 && date.getHours() < 19) {
      return '<span style="color:blue;font-weight:bold;">운영중<br/>19시까지</span>';
    } else {
      return '<span style="color:red;">운영종료<br />오늘은끝</span>';
    }
  }
}

function hgmeal2() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">주말에는<br />운영안함</span>';
  } else if ((date.getHours() >= 11 && date.getHours() < 13) || (date.getHours() == 13 && date.getMinutes() < 30)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>13시30분까지</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 14 && date.getHours() < 18)) {
    return '<span style="color:blue;font-weight:bold;">운영중(분식)<br/>18시까지<span>';
  } else if (date.getHours() < 11) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">11시부터<br/>점심시작</span>';
  } else if (date.getHours() == 13) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">14시부터<br/>9출시작</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝<span>';
  }
}

function gongmeal() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">주말에는<br />운영안함</span>';
  } else if (date.getHours() >= 11 && date.getHours() < 19) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>19시까지</span>';
  } else if (date.getHours() < 11) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">11시부터<br/>운영시작</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}

function eng302meal() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">주말에는<br />운영안함</span>';
  } else if ((date.getHours() > 11 && date.getHours() < 14) || (date.getHours() == 11 && date.getMinutes() >= 15)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>14시까지</span>';
  } else if (date.getHours() >= 17 && date.getHours() < 19) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>19시까지</span>';
  } else if (date.getHours() < 11 || (date.getHours() == 11 && date.getMinutes() < 15)) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">11시15분부터<br/>점심시작</span>';
  } else if (date.getHours() < 17 && date.getHours() >= 14) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">17시부터<br/>저녁시작</span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
  }
}

function eng301meal() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">주말에는<br />운영안함</span>';
  } else if (date.getHours() >= 11 && date.getHours() < 14) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>14시까지</span>';
  } else if (date.getHours() >= 17 && date.getHours() < 19) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>19시까지</span>';
  } else if (date.getHours() < 11) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">11시부터<br/>점심시작</span>';
  } else if (date.getHours() < 17 && date.getHours() >= 14) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">17시부터<br/>저녁시작</span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
  }
}

function artmeal() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">주말에는<br />운영안함</span>';
  } else if ((date.getHours() == 11 && date.getMinutes() >= 30) || (date.getHours() > 11 && date.getHours() < 14)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>14시까지</span>';
  } else if (date.getHours() >= 17 && date.getHours() < 19) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>19시까지</span>';
  } else if (date.getHours() < 11 || (date.getHours() == 11 && date.getMinutes() < 30)) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">11시30분부터<br/>점심시작</span>';
  } else if (date.getHours() < 17 && date.getHours() >= 14) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">17시부터<br/>저녁시작</span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
  }
}


function ggmeal() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">주말에는<br />운영안함</span>';
  } else if (date.getHours() >= 11 && date.getHours() < 14) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>14시까지</span>';
  } else if ((date.getHours() >= 17 && date.getHours() < 18) || (date.getHours() == 18 && date.getMinutes() < 30)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>18시30분까지</span>';
  } else if (date.getHours() < 11) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">11시부터<br/>점심시작</span>';
  } else if (date.getHours() < 17 && date.getHours() >= 14) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">17시부터<br/>저녁시작</span>';
  } else {
    return '<span style="color:red;">미운영<span>';
  }
}


function nsmeal() {
  return m11141719();
}

function nhmeal() {
  return m11141719();
}

function dwgmeal() {
  return m11141719();
}

function edumeal() {
  return m11141719();
}

function meal220() {
  return m11141719();
}

function m11141719() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">주말에는<br />운영안함</span>';
  } else if (date.getHours() >= 11 && date.getHours() < 14) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>14시까지</span>';
  } else if (date.getHours() >= 17 && date.getHours() < 19) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>19시까지</span>';
  } else if (date.getHours() < 11) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">11시부터<br/>점심시작</span>';
  } else if (date.getHours() < 17 && date.getHours() >= 14) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">17시부터<br/>저녁시작</span>';
  } else {
    return '<span style="color:red;">운영종료</span>';
  }
}


function loungeo() {
  var date = new Date();
  if (date.getHours() >= 11 && date.getHours() < 21) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>21시까지</span>';
  } else if (date.getHours() < 11) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">11시부터<br/>운영시작</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}

function shaban() {  
  var date = new Date();
  if (date.getDay() == 0) {
    return '<span style="color:red;">일요일은<br />운영안함</span>';
  } else if (date.getDay() == 6) {
    if (date.getHours() < 11 || (date.getHours() == 11 && date.getMinutes() < 30)) {
      return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">11시30분부터<br/>점심시작</span>';
    } else if ((date.getHours() >= 12 && date.getHours() < 14) || (date.getHours() == 11 && date.getMinutes() >= 30)) {
      return '<span style="color:blue;font-weight:bold;">운영중<br/>14시까지</span>';
    } else {
      return '<span style="color:red;">운영종료<br />오늘은끝</span>';
    }
  } else if (date.getHours() < 11) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">11시부터<br/>점심시작</span>';
  } else if ((date.getHours() >= 11 && date.getHours() < 14) || (date.getHours() == 14 && date.getMinutes() < 30)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>14시30분까지</span>';
  } else if ((date.getHours() == 14 && date.getMinutes() >= 30) || date.getHours() == 15 || (date.getHours() == 16 && date.getMinutes() < 30)) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">16시30분부터<br/>저녁시작</span>';
  } else if ((date.getHours() >= 17 && date.getHours() < 20) || (date.getHours() == 16 && date.getMinutes() >= 30)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>20시까지</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}
