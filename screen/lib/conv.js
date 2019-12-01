function hgconv() {
  var date = new Date();
  if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() >= 10 && date.getHours() < 19)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>19시까지</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 8 && date.getHours() < 19) || (date.getHours() == 19 && date.getMinutes() < 30))) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />19시30분까지</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() == 19 && date.getHours() < 19)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>19시30분까지</span>';
  } else if ((date.getDay() == 0 || date.getDay() == 6) && date.getHours() < 10) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">10시부터</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && date.getHours() < 8) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">8시부터</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}

function hgmg() {
  var date = new Date();
  if ((date.getDay() == 6) && (date.getHours() >= 10 && date.getHours() < 17)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>17시까지</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 9 && date.getHours() < 18) || (date.getHours() == 18 && date.getMinutes() < 30))) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />18시30분까지</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && date.getHours() < 9) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">9시부터</span>';
  } else if (date.getDay() == 6 && date.getHours() < 10) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">10시부터</span>';
  } else if (date.getDay() == 0) {
    return '<span style="color:red;">일요일은<br />운영안함</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}

function jdCU() {
  var date = new Date();
  if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() >= 8 && date.getHours() < 20)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>20시까지</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 8 && date.getHours() < 22)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>22시까지</span>';
  } else if (date.getHours() < 8) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">8시부터</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}

function nsconv() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">주말에는<br />운영안함</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 10 && date.getHours() < 19)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />19시까지</span>';
  } else if (date.getHours() < 10) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">10시부터</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}

function snuplex() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">주말에는<br />운영안함</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 9 && date.getHours() < 18) || (date.getHours() == 18 && date.getMinutes() < 30))) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />18시30분까지</span>';
  } else if (date.getHours() < 9) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">9시부터</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}

function dwgconv() {
  var date = new Date();
  if (date.getDay() == 0) {
    return '<span style="color:red;">일요일은<br />운영안함</span>';
  } else if ((date.getDay() == 6) && (date.getHours() >= 9 && date.getHours() < 17)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />17시까지</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 8 && date.getHours() < 17) || (date.getHours() == 17 && date.getMinutes() < 30))) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />19시30분까지</span>';
  } else if (date.getDay() == 6 && date.getHours() < 9) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">9시부터</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 8)) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">8시부터</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}


function eeoconv() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">주말에는<br />운영안함</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 9 && date.getHours() < 19)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />19시까지</span>';
  } else if (date.getHours() < 9) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">9시부터</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}


function engCU() {
  var date = new Date();
  if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() >= 9 && date.getHours() < 18)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />18시까지</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 8 && date.getHours() < 22)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />22시까지</span>';
  } else if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() < 9)) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">9시부터</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 8)) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">8시부터</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}


function cnsconv() {
  var date = new Date();
  if (date.getDay() == 0) {
    return '<span style="color:red;">일요일은<br />운영안함</span>';
  } else if ((date.getDay() == 6) && (date.getHours() >= 10 && date.getHours() < 17)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />17시까지</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 8 && date.getHours() < 19) || (date.getHours() == 19 && date.getMinutes() < 30))) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />19시30분까지</span>';
  } else if (date.getDay() == 6 && date.getHours() < 10) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">10시부터</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() < 8) || (date.getHours() == 8 && date.getMinutes() < 30))) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">8시30분부터</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}

function dormconv() {
  var date = new Date();
  if (date.getHours() >= 8 && date.getHours() < 24) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />밤1시반까지</span>';
  } else if (date.getHours() == 0 || (date.getHours() == 1 && date.getMinutes() < 30)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />밤1시반까지</span>';
  } else if (date.getHours() < 8) {
    return '<span style="color:red;font-weight:bold;">미운영</span><br /><span style="color:green;font-weight:bold;">8시부터</span>';
  } else {
    return '<span style="color:red;font-weight:bold;">미운영</span><br /><span style="color:green;font-weight:bold;">8시부터</span>';
  }
}

function vetconv() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">주말에는<br />운영안함</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 9 && date.getHours() < 18)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />18시까지</span>';
  } else if (date.getHours() < 9) {
    return '<span style="color:red;font-weight:bold;">미운영</span><br /><span style="color:green;font-weight:bold;">9시부터</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}

function medconv() {
  var date = new Date();
  if (date.getDay() == 0) {
    return '<span style="color:red;">일요일은<br />운영안함</span>';
  } else if ((date.getDay() == 6) && (date.getHours() >= 9 && date.getHours() < 18)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />18시까지</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 8 && date.getHours() < 22)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />22시까지</span>';
  } else if ((date.getDay() == 6) && (date.getHours() < 9)) {
    return '<span style="color:red;font-weight:bold;">미운영</span><br /><span style="color:green;font-weight:bold;">9시부터</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 8)) {
    return '<span style="color:red;font-weight:bold;">미운영</span><br /><span style="color:green;font-weight:bold;">8시부터</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}

function allday(){
  return '<span style="color:blue;font-weight:bold;">24시간운영</span>';
}
