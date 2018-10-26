# vue-naver-maps
네이버의 지도 API를 Vue로 간편하게 사용할 수 있게하는 라이브러리입니다.
 
이 라이브러리는 자동으로 js파일을 로딩합니다. 

## 시작하기
### 설치 방법
yarn 사용을 권장드립니다.
* yarn : `yarn add vue-naver-maps`
* npm : `npm install vue-naver-maps`

네이버에서 발급된 지도 API키가 필요합니다.
* main.js
  ```javascript
  import naver from 'vue-naver-maps';
  
  Vue.use(naver, {
    clientID: 'Qc0rG33ahBw9iMRtkdqN'
  });
  ```
* `.vue`파일
  ```html
  <NaverMaps :width="600" :height="400"></NaverMaps>
  ```
 이제, 600x400 사이즈의 지도가 뜨게됩니다.
 
### 기본 맵 옵션
```html
<NaverMaps :height="400" :width="600" :mapOptions="mapOptions"></NaverMaps>
```
mapOptions으로 아래와 같은 데이터를 넣을 수 있습니다.

단, lat(위도)과 lng(경도)는 필수 입니다. 
```
mapOptions: {
  zoom: Number,
  lat: Number,
  lng: Number
}
```
