function gett(hour, minute) {
  var h = hour;
  var m = minute;
  var date = new Date();
  var geth = hour - date.getHours();
  var getm = minute - date.getMinutes();
  getm = getm + geth * 60;
  return getm;
}

function gwangst() {
  if (confirm("신청 기간은 8월 24 오전 9시 ~ 8월 26일 오후 11시입니다. 공지사항을 잘 읽고 신청해주세요!") == true) { //확인
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScNfOk8xp3oJQRgLuxRTLSF36TOTrXLPeg5akLLnBZ5CPmTog/viewform?fbclid=IwAR2DD0Z_cLd5A8EcpduefazS3ypJtG69OrV6jYisRgtHsQGUpx58-JMyjYg');
  } else { //취소
    return false;
  }
}
