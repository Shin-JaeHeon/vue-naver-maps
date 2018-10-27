# vue-naver-maps
네이버의 지도 API를 Vue로 간편하게 사용할 수 있게하는 라이브러리입니다. 

이 라이브러의 목표는 사용자가 직접 지도 클래스를 다루지 않고도 자바스크립트 기본 타입만으로 다룰 수 있도록 하는 것입니다.    

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
    clientID: 'Q3terhW342KFsdfC1M'
  });
  ```
* `.vue`파일
  ```html
  <NaverMaps :width="600" :height="400"></NaverMaps>
  ```
 이제, 600x400 사이즈의 지도가 뜨게됩니다.
 
### 기본 맵 옵션
```html
<NaverMaps :width="600" :height="400"  :mapOptions="mapOptions"></NaverMaps>
```
mapOptions으로 아래와 같은 데이터를 넣을 수 있습니다.

단, lat(위도)과 lng(경도)는 필수 입니다. 
```
mapOptions: {
  zoom?: Number(기본값은 10),
  lat: Number,
  lng: Number,
  zoomControl?: Boolean,
  zoomControlOptions?: {
    position: String
  }
}
```
`zoomControlOptions`의 `position`은 `TOP_RIGHT`등 기존 JS 라이브러리의 enum 이름을 사용합니다.
### 추가 옵션 설정하기
기존 js 라이브러리와 마찬가지로, map 객체에 `setOptions(options)`를 사용할 수 있습니다. 단, 맵이 로딩 된 후에만 사용이 가능합니다.

### onLoaded(this)
지도를 효과적으로 컨트롤 하기 위해 `onLoaded(this)` callback 함수를 사용할 수 있습니다.
```html
<NaverMaps :width="600" :height="400" :mapOptions="mapOptions" :onLoaded="callback"></NaverMaps>
```
지도가 로딩되면 호출됩니다. 또한 인자로는 NaverMaps 컴포넌트의 `this`를 넘겨줍니다. 
`this.map`으로 네이버 Map 객체에 접근이 가능합니다. 

## NaverMaps
`NaverMaps`컴포넌트에는 기존의 js 라이브러리가 사용했던 메소드들이 있습니다. 예를 들면 기존에는 `setCenter` 함수를 ` map.setCenter(new naver.maps.LatLng(lat, lng));` 으로 수행해야 합니다.
하지만 NaverMaps 컴포넌트에서는 `this.setCenter(lat,lng)`으로 사용할 수 있습니다.

> 현재는 개발 버전이라 `NaverMaps` 컴포넌트에 사용가능한 모든 메소드가 포함되어 있지 않습니다.  이 경우에는 `this.map`으로 직접 접근해야합니다.
### Methods
* <a href="#setOptions">setOptions(options)</a>
* <a href="#setMapType">setMapType(type)</a>
* <a href="#setZoom">setZoom(level, useEffect)</a>
* <a href="#setCenter">setCenter(lat, lng)</a>
* <a href="#fitBounds">fitBounds(lat, lng)</a>
* <a href="#panTo">panTo(lat, lng)</a>
* <a href="#panToBounds">panToBounds(lat, lng)</a>
* <a href="#panBy">panBy(x, y)</a>

<a name="setOptions"></a>
#### setOptions(options)

| Param | Type |
| --- | --- |
| options | `Object` |

<a name="setMapType"></a>
#### setMapType(type)

| Param | Type | Description |
| --- | --- | --- |
| type | `string` | NORMAL, TERRAIN, SATELLITE, HYBRID |

<a name="setZoom"></a>
#### setZoom(level, useEffect)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| level | `number` |  | must be int |
| useEffect | `boolean` | `false` |  |

<a name="setCenter"></a>
#### setCenter(lat, lng)

| Param | Type |
| --- | --- |
| lat | `number` |
| lng | `number` |

<a name="fitBounds"></a>
#### fitBounds(lat, lng)

| Param | Type |
| --- | --- |
| lat | `number` |
| lng | `number` |

<a name="panTo"></a>
#### panTo(lat, lng)

| Param | Type |
| --- | --- |
| lat | `number` |
| lng | `number` |

<a name="panToBounds"></a>
#### panToBounds(lat, lng)

| Param | Type |
| --- | --- |
| lat | `number` |
| lng | `number` |

<a name="panBy"></a>
#### panBy(x, y)

| Param | Type |
| --- | --- |
| x | `number` |
| y | `number` |


