# 서울대학교 편의정보

React Native를 이용하여 제작한 서울대학교 편의정보 제공 모바일 앱 ([iOS](https://apps.apple.com/kr/app/%EC%84%9C%EC%9A%B8%EB%8C%80%ED%95%99%EA%B5%90-%ED%8E%B8%EC%9D%98%EC%A0%95%EB%B3%B4/id1492654572), [Android](https://play.google.com/store/apps/details?id=com.snuinfo))


## Features
- Axios로 [웹페이지](https://snuco.snu.ac.kr/ko/foodmenu)의 정보를 불러와 학내 식당의 메뉴 정보 제공
- 개발 당시 기능을 빠르게 구현하기 위해 일부 정보는 하드코딩
- 중앙도서관, 보건소, 기숙사 등 관련 정보는 공식 홈페이지 정보를 웹뷰로 연결
- 앱 실행시 Splash Screen, 웹뷰 로딩시 Loading Indicator 구현
- 초기에는 expo로 시작하였으나 3rd party 라이브러리 사용을 위해 eject
- 3rd party 라이브러리 사용: [react-native-webview](https://www.npmjs.com/package/react-native-webview), [react-navigation](https://reactnavigation.org/), [react-native-swipe-gestures](https://www.npmjs.com/package/react-native-swipe-gestures), [react-native-image-zoom-viewer](https://www.npmjs.com/package/react-native-image-zoom-viewer) 등

## What I learn (Practiced)
- React Native basics
- Axios
