# naver-maps Component
`naver-maps`는 지도를 생성하는 컴포넌트입니다. naver-maps 컴포넌트를 사용하지 않고 다른 컴포넌트를 사용할 경우 동작하지 않습니다. <br>
하지만 `naver-maps`를 생성하지 않더라도 라이브러리는 로딩됩니다.
## Props

?> `width` 및 `height`, `mapOptions`는  필수입니다.
 
### width
지도의 넓이를 입력합니다 (px)

### height
지도의 높이를 입력합니다. (px)

### mapOptions
지도를 설정하는 객체입니다.

### useStyleMap
스타일 지도를 사용하려면 값을 true로 설정하십시오.

### initLayers
기본 레이어를 설정합니다. 반드시 대문자로 입력해야하며, 올바르지 않은 이름을 입력하면 지도를 로딩하지 않고 오류를 콘솔에 띄웁니다.
```vue
<naver-maps :initLayers="['BACKGROUND', 'BACKGROUND_DETAIL', 'BYCYCLE', 'CADASTRAL', 'CTT', 'HIKING_TRAIL', 'PANORAMA', 'POI_KOREAN', 'TRANSIT']"></naver-maps>
```
## 설정

!> `mapOptions`을 인라인으로 작성하는 경우에는 오류가 발생할 수 있으니, **반드시** 예제와 같이 인라인을 제외한 방식으로 `mapOptions`을 작성해주시기 바랍니다.

```vue
<naver-maps :width="600" :height="400" :mapOptions="mapOptions"></naver-maps>
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
  },
}
```
`zoomControlOptions`의 `position`은 `TOP_RIGHT`등 기존 JS 라이브러리의 enum 이름을 사용합니다.
### 추가 옵션 설정하기
기존 js 라이브러리와 마찬가지로, map 객체에 `setOptions(options)`를 사용할 수 있습니다. 단, 맵이 로딩 된 후에만 사용이 가능합니다.

## 일반 메소드

### setLayerTypeId
* 타입 : `Function`
* 반환 : `this`
* Parameter
 * typeId : `string`

Layer를 추가합니다.

### addPane
* 타입 : `Function`
* 반환 : `this`
* Parameter
 * name : `string`
 * elementOrZIndex : `HTMLElement` | `number`

### destroy
* 타입 : `Function`
* 반환 : `this`

이 메소드는 모든 이벤트 및 DOM 요소를 포함한 지도를 제거합니다. 또한 이 컴포넌트의 map 오브젝트를 제거합니다. 

### fitBounds
* 타입 : `Function`
* 반환 : `this`
* Parameter
 * bounds : `naver.maps.Bounds(Literal)` | `naver.maps.ArrayOfCoords(Literal)`
 * margin : `number`

### morph
* 타입 : `Function`
* 반환 : `this`
* Parameter
 * coord : `naver.maps.Coord` | `naver.maps.CoordLiteral`
 * zoom(optional) :` number`
 * transitionOptions(optional) : `naver.maps.TransitionOptions`

### panTo
* 타입 : `Function`
* 반환 : `this`
* Parameter
 * coord | `naver.maps.Coord(Literal)`
 * transitionOptions : `naver.maps.TransitionOptions`

### panToBounds
* 타입 : `Function`
* 반환 : `this`
* Parameter
 * bounds | `naver.maps.Bounds(Literal)`
 * transitionOptions : `naver.maps.TransitionOptions`
 * margin : `number`

### panBy
* 타입 : `Function`
* 반환 : `this`
* Parameter
 * x : `number`
 * y : `number`

### refresh
* 타입 : `Function`
* 반환 : `this`
* Parameter
  * noEffect : `boolean`
  
### removeStyleLayer
* 타입 : `Function`
* 반환 : `this`
* Parameter
 * layerName : `string`

StyleLayer를 제거합니다.

### removePane
* 타입 : `Function`
* 반환 : `this`
* Parameter
 * name : `string`
 
### updateBy
* 타입 : `Function`
* 반환 : `this`
* Parameter
 * coord : `naver.maps.Coord` | `naver.maps.CoordLiteral`
 * zoom :` number`

### zoomBy
* 타입 : `Function`
* 반환 : `this`
* Parameter
  * deltaZoom : `number`
  * zoomOrigin(optional, default is center) : `naver.maps.Coord` | `naver.maps.CoordLiteral`
  * effect(optional) : `boolean`, default is `false`
  
## Getter 메소드

### getBounds
* 타입 : `Function`
* 반환 :`naver.maps.Bounds`

### getCenter
* 타입 : `Function`
* 반환 : `naver.maps.Coord`

### getCenterPoint
* 타입 : `Function`
* 반환 : `naver.maps.Coord`

지도의 중심 좌표를 세계 좌표로 변환한 결과를 반환합니다.

### getElement
* 타입 : `Function`
* 반환 : `HTMLElement`
 
### getMapTypeId
* 타입 : `Function`
* 반환 : `string`

이 지도의 타입을 반환합니다.

### getOptions
* 타입 : `Function`
* 반환 : `any`
* Parameter
 * key : `string`

### getPanes
* 타입 : `Function`
* 반환 : `naver.maps.MapPanes`

### getPrimitiveProjection
* 타입 : `Function`
* 반환 : `naver.maps.Projection`

### getProjection
* 타입 : `Function`
* 반환 : `naver.maps.MapSystemProjection`

### getSize
* 타입 : `Function`
* 반환 : `naver.maps.Size`

### getZoom
* 타입 : `Function`
* 반환 : `number`

## Setter 메소드

### setCenter
* 타입 : `Function`
* 반환 : `this`
* Parameter
  * latOrLatLng : `number` | `naver.maps.LatLng` | `naver.maps.LatLngLiteral`
  * lng : `number`
### setCenterPoint
* 타입 : `Function`
* 반환 : `this`
* Parameter
 * point : `naver.maps.Point` | `naver.maps.PointLiteral` 

### setMapTypeId
* 타입 : `Function`
* 반환 : `this`
* Parameter
 * type : `string`
  * value : `NORMAL` | `TERRAIN` | `SATELLITE` | `HYBRID`

### setOptions
* 타입 : `Function`
* 반환 : `this`
* Parameter
 * options : `naver.maps.MapOptions` 

### setSize
* 타입 : `Function`
* 반환 : `this`
* Parameter
 * size : `naver.maps.Size` | `naver.maps.SizeLiteral`
 
### setZoom
* 타입 : `Function`
* 반환 : `this`
* Parameter
  * level(int) : `number`
  * useEffect : `boolean`
