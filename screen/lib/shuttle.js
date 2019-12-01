function ststation() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">주말에는<br />운행안함<span>';
  } else if (date.getHours() >= 19) {
    return '<span style="color:red;">운행종료<span>';
  } else if (date.getHours() == 19) {
    return '<span style="color:blue;font-weight:bold;">학교→설입<br />운행중<br />19시까지</span>';
  } else if (date.getHours() < 8) {
    return '<span style="color:red;">미운행</span><br /><span style="color:green;font-weight:bold;">7시부터</span>';
  } else {
    return '<span style="color:blue;font-weight:bold;">운행중<br />19시까지</span>';
  }
}

function stdhd() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">주말에는<br />운행안함<span>';
  } else if (date.getHours() >= 19) {
    return '<span style="color:red;">운행종료<span>';
  } else if (date.getHours() == 19) {
    return '<span style="color:blue;font-weight:bold;">학교→녹두<br />운행중<br />19시까지</span>';
  } else if (date.getHours() < 8) {
    return '<span style="color:red;">미운행</span><br /><span style="color:green;font-weight:bold;">7시부터</span>';
  } else {
    return '<span style="color:blue;font-weight:bold;">운행중<br />19시까지</span>';
  }
}

function stsdstation() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">주말에는<br />운행안함<span>';
  } else if (date.getHours() > 10) {
    return '<span style="color:red;">운행종료<span>';
  } else if (date.getHours() < 8) {
    return '<span style="color:red;">미운행</span><br /><span style="color:green;font-weight:bold;">8시부터</span>';
  } else {
    return '<span style="color:blue;font-weight:bold;">운행중<br />11시까지</span>';
  }
}

function stinner() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">주말에는<br />운행안함<span>';
  } else if (date.getHours() > 20) {
    return '<span style="color:red;">운행종료<span>';
  } else if (date.getHours() < 8) {
    return '<span style="color:red;">미운행</span><br /><span style="color:green;font-weight:bold;">8시부터</span>';
  } else {
    return '<span style="color:blue;font-weight:bold;">운행중<br />21시까지</span>';
  }
}

function stnight() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">주말에는<br />운행안함<span>';
  } else if (date.getHours() > 23 && date.getMinutes() > 10) {
    return '<span style="color:red;">운행종료<span>';
  } else if (date.getHours() < 21 || ((date.getHours() == 21) && (date.getMinutes() < 10))) {
    return '<span style="color:red;font-weight:bold;">미운행</span><br /><span style="color:green;font-weight:bold;">21시10분부터</span>';
  } else {
    return '<span style="color:blue;font-weight:bold;">운행중<br />23시10분까지<span>';
  }
}

function stnsdstation() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">주말에는<br />운행안함<span>';
  } else if (date.getHours() > 10) {
    return '<span style="color:red;">운행종료<span>';
  } else if (date.getHours() < 8 || (date.getHours() == 8 && date.getMinutes() < 30)) {
    return '<span style="color:red;">미운행</span><br /><span style="color:green;font-weight:bold;">8시30분부터</span>';
  } else {
    return '<span style="color:blue;font-weight:bold;">운행중<br />11시까지</span>';
  }
}

function steng() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">주말에는<br />운행안함<span>';
  } else if (date.getHours() > 10) {
    return '<span style="color:red;">운행종료<span>';
  } else if (date.getHours() < 8) {
  return '<span style="color:red;">미운행</span><br /><span style="color:green;font-weight:bold;">8시부터</span>';
} else {
  return '<span style="color:blue;font-weight:bold;">운행중<br />11시까지</span>';
}
}

function stinnerreverse() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">주말에는<br />운행안함<span>';
  } else if (date.getHours() > 17 || (date.getHours() == 17 && date.getMinutes() > 50)) {
    return '<span style="color:red;">운행종료<span>';
  } else if (date.getHours() < 9 || (date.getHours() == 9 && date.getMinutes() < 50)) {
  return '<span style="color:red;">미운행</span><br /><span style="color:green;font-weight:bold;">9시50분부터</span>';
} else {
  return '<span style="color:blue;font-weight:bold;">운행중<br />17시50분까지</span>';
}
}

function stnight2() {
  var date = new Date();
  if (date.getDay() == 0 || (date.getDay() == 6 && date.getHours() >= 2)) {
    return '<span style="color:red;">주말에는<br />운행안함<span>';
  } else if (date.getHours() >= 2) {
    return '<span style="color:red;">미운행</span><br /><span style="color:green;font-weight:bold;">자정부터</span>';
} else {
  return '<span style="color:blue;font-weight:bold;">운행중<br />02시까지</span>';
}
}




function ststationinterval() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<a href="./img/sttt.jpg" style=font-weight:bold;text-decoration:none;" target="_blank">클릭해서<br />확인하기</a>';
  } else if (date.getHours() > 19 || date.getHours() < 7) {
    return '<a href="./img/sttt.jpg" style=font-weight:bold;text-decoration:none;" target="_blank">클릭해서<br />확인하기</a>';
  } else if (date.getHours() == 7) {
    return '15분';
  } else if (date.getHours() >= 8 && date.getHours() < 11) {
    return '5~7분';
  } else if ((date.getHours() >= 11 && date.getHours() < 15) || (date.getHours() == 15 && date.getMinutes() < 30)) {
    return '10분';
  } else if (date.getHours() >= 15 || date.getHours() < 17) {
    return '7~10분';
  } else if (date.getHours() == 17 || date.getHours() == 18) {
    return '5~7분';
  }
}

function stdhdinterval() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<a href="./img/sttt.jpg" style=font-weight:bold;text-decoration:none;" target="_blank">클릭해서<br />확인하기</a>';
  } else if (date.getHours() > 19 || date.getHours() < 7) {
    return '<a href="./img/sttt.jpg" style=font-weight:bold;text-decoration:none;" target="_blank">클릭해서<br />확인하기</a>';
  } else if (date.getHours() == 7) {
    return '15분';
  } else if (date.getHours() >= 8 && date.getHours() < 10) {
    return '6분';
  } else if ((date.getHours() >= 10 && date.getHours() < 12) || (date.getHours() == 12 && date.getMinutes() < 10)) {
    return '10분';
  } else if (date.getHours() == 12 || (date.getHours() == 13 && date.getMinutes() < 30)) {
    return '15분';
  } else if (date.getHours() >= 13 && date.getHours() < 17) {
    return '10분';
  } else if (date.getHours() == 17 || date.getHours() == 18) {
    return '6분';
  }
}

function stinnerinterval() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<a href="./img/sttt.jpg" style=font-weight:bold;text-decoration:none;" target="_blank">클릭해서<br />확인하기</a>';
  } else if (date.getHours() > 20 || date.getHours() < 7) {
    return '<a href="./img/sttt.jpg" style=font-weight:bold;text-decoration:none;" target="_blank">클릭해서<br />확인하기</a>';
  } else if (date.getHours() < 19) {
    return '7분';
  } else if (date.getHours() == 19 || date.getHours() == 20) {
    return '7분';
  }
}
