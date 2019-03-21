# Component
## 이벤트 
기존 자바스크립트 라이브러리의 이벤트는 `@name` 으로 접근 가능합니다. 예) @click, @dbclick 등등

### vue 객체와 naver 객체
이 단락에서 사용하는 용어의 의미는 아래와 같습니다.
* `vue 객체` : `vue.js` 컴포넌트 객체
* `naver 객체` : `naver.maps` 객체(`naver.maps.Marker` 등)

아래의 예제에서는 `naver-marker` 컴포넌트의 @load 이벤트에 아래와 같은 함수를 등록했습니다.
```javascript
function onMarkerLoaded({marker}) {
  this.marker = marker; //naver.maps.Marker
  this.marker.setClickable(true);
}
```

먼저 `onMarkerLoaded`함수의 vue 인자는 `vue 객체`입니다. <br>
만약에 `naver.maps.xxx` 대신 기본 타입만을 사용하여 접근하려면, 아래와 같이 vue 컴포넌트를 통해 접근 해야합니다.
```javascript
function onMarkerLoaded(vue) {
  this.marker = vue;
  this.marker.setClickable(true);
}
```
기존 HTML 소스와의 호환을 원하거나, 직접 접근하는 것을 선호한다면, 위와같이 `vue.marker`로 접근 해야합니다.
 

### @load(this)
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
 
## 메소드
기존의 자바스크립트 라이브러리의 메소드를 사용하는 방법에는 두가지가 있습니다.  <br>
하나는 `vue 객체`로 접근하는 것이고, 다른 하나는 `naver 객체`로 접근 하는 것입니다. <br>
예를 들면 `naver 객체`를 사용하여 `setCenter` 함수를 `map.setCenter(new naver.maps.LatLng(lat, lng));`으로 수행해야 한다면, `vue 객체`를 사용하면 `this.setCenter(lat,lng)`으로 간편하게 사용할 수 있습니다.

?> 컴포넌트에는 거의 모든 메소드가 포함되어 있습니다. 하지만 특별한 경우에는 `this.map`같이 `naver 객체 `로 직접 접근해야 할 수도 있습니다.
