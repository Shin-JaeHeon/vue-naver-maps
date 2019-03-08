# Component
## @load(this)
네이버 지도 라이브러리 또는 지도가 로딩됐을 때, 그리고 컴포넌트가 로드되었을 때 각각의 컴포넌트에서는 `load` 이벤트를 호출합니다.
```vue
<naver-maps 
  :width="600" 
  :height="400" 
  :mapOptions="mapOptions"
   @load="callback">
</naver-maps>
```
또한 인자로는 컴포넌트의 `this`를 넘겨줍니다. 
### vue 객체와 naver 객체
이 단락에서 사용하는 용어의 의미는 아래와 같습니다.
* `vue 객체` : `vue.js` 컴포넌트 객체
* `naver 객체` : `naver.maps` 객체(`naver.maps.Marker` 등)

아래의 예제에서는 `naver-marker` 컴포넌트의 @load 이벤트에 아래와 같은 함수를 등록했습니다.
```javascript
function onMarkerLoaded({marker}) {
  this.marker = marker;
}
```

먼저 `onMarkerLoaded`함수의 vue 인자는 `vue 객체`입니다. <br>
만약에 `naver.maps.xxx` 대신 기본 타입만을 사용하여 접근하려면, 아래와 같이 vue 컴포넌트를 통해 접근 해야합니다.
```javascript
function onMarkerLoaded(vue) {
  this.marker = vue;
  this.marker.setClickable(true)
}
```
기존 HTML 소스와의 호환을 원하거나, 직접 접근하는 것을 선호한다면, 위와같이 vue.marker로 접근 해야합니다.
 
