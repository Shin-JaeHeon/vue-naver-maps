# naver-maps Component
`naver-maps`컴포넌트에는 기존의 js 라이브러리가 사용했던 메소드들이 있습니다. 예를 들면 기존에는 `setCenter` 함수를 ` map.setCenter(new naver.maps.LatLng(lat, lng));` 으로 수행해야 합니다.
하지만 naver-maps 컴포넌트에서는 `this.setCenter(lat,lng)`으로 사용할 수 있습니다.

> `naver-maps` 컴포넌트에 사용가능한 모든 메소드가 포함되어 있지 않습니다. `this.map`으로 직접 접근해야합니다.
## 설정
```vue
<naver-maps :width="600" :height="400"  :mapOptions="mapOptions"></naver-maps>
```
> lat(위도)과 lng(경도)는 필수 입니다.

mapOptions으로 아래와 같은 데이터를 넣을 수 있습니다. 
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

## Setter Methods

### setOptions
* Type : `Function`
* Return : `this`
* Parameter
 * options : `Object`
 
### setOptions
* Type : `Function`
* Return : `this`
* Parameter
 * type : `NORMAL | TERRAIN | SATELLITE | HYBRID`
 
### setOptions
* Type : `Function`
* Return : `this`
* Parameter
 * level : `number(Int)`
 * useEffect : `boolean`, default is `false`.

### setCenter
* Type : `Function`
* Return : `this`
* Parameter
 * lat : `number`
 * lng : `number`

### fitBounds
* Type : `Function`
* Return : `this`
* Parameter
 * bounds : `naver.maps.Bounds(Literal)` | `naver.maps.ArrayOfCoords(Literal)`
 * margin : `number`

### panTo
* Type : `Function`
* Return : `this`
* Parameter
 * coord | `naver.maps.Coord(Literal)`
 * transitionOptions : `naver.maps.TransitionOptions`

### panToBounds(bounds, transitionOptions, margin)
* Type : `Function`
* Return : `this`
* Parameter
 * bounds | `naver.maps.Bounds(Literal)`
 * transitionOptions : `naver.maps.TransitionOptions
 * margin : `number`

### panBy
* Type : `Function`
* Return : `this`
* Parameter
 * x : `number`
 * y : `number`
