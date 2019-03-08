# naver-maps Component
`naver-maps`는 지도를 생성하는 컴포넌트입니다. naver-maps 컴포넌트를 사용하지 않고 다른 컴포넌트를 사용할 경우 동작하지 않습니다. <br>
하지만 `naver-maps`를 생성하지 않더라도 라이브러리는 로딩됩니다.
`naver-maps`컴포넌트에는 기존의 js 라이브러리가 사용했던 메소드들이 있습니다. 예를 들면 기존에는 `setCenter` 함수를 ` map.setCenter(new naver.maps.LatLng(lat, lng));` 으로 수행해야 합니다.
하지만 naver-maps 컴포넌트에서는 `this.setCenter(lat,lng)`으로 사용할 수 있습니다.

> `naver-maps` 컴포넌트에는 거의 모든 메소드가 포함되어 있습니다. 하지만 특별한 경우에는 `this.map`으로 직접 접근해야 할 수 있습니다.
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

## Normal Methods

### addPane
* Type : `Function`
* Return : `this`
* Parameter
 * name : `string`
 * elementOrZIndex : `HTMLElement` | `number`

### destroy
* Type : `Function`
* Return : `this`
#### Description
delete this map which includes all event and dom element. This method will be delete the map object of this component.

### fitBounds
* Type : `Function`
* Return : `this`
* Parameter
 * bounds : `naver.maps.Bounds(Literal)` | `naver.maps.ArrayOfCoords(Literal)`
 * margin : `number`

### morph
* Type : `Function`
* Return : `this`
* Parameter
 * coord : `naver.maps.Coord` | `naver.maps.CoordLiteral`
 * zoom(optional) :` number`
 * transitionOptions(optional) : `naver.maps.TransitionOptions`

### panTo
* Type : `Function`
* Return : `this`
* Parameter
 * coord | `naver.maps.Coord(Literal)`
 * transitionOptions : `naver.maps.TransitionOptions`

### panToBounds
* Type : `Function`
* Return : `this`
* Parameter
 * bounds | `naver.maps.Bounds(Literal)`
 * transitionOptions : `naver.maps.TransitionOptions`
 * margin : `number`

### panBy
* Type : `Function`
* Return : `this`
* Parameter
 * x : `number`
 * y : `number`

### refresh
* Type : `Function`
* Return : `this`
* Parameter
  * noEffect : `boolean`

### removePane
* Type : `Function`
* Return : `this`
* Parameter
 * name : `string`
 
### updateBy
* Type : `Function`
* Return : `this`
* Parameter
 * coord : `naver.maps.Coord` | `naver.maps.CoordLiteral`
 * zoom :` number`

### zoomBy
* Type : `Function`
* Return : `this`
* Parameter
  * deltaZoom : `number`
  * zoomOrigin(optional, default is center) : `naver.maps.Coord` | `naver.maps.CoordLiteral`
  * effect(optional) : `boolean`, default is `false`
  
## Getter Methods

### getBounds
* Type : `Function`
* Return :`naver.maps.Bounds`

### getCenter
* Type : `Function`
* Return : `naver.maps.Coord`

### getCenterPoint
* Type : `Function`
* Return : `naver.maps.Coord`
#### Description
The result of converting the map's center coordinates to the world coordinates.

### getElement
* Type : `Function`
* Return : `HTMLElement`
 
### getMapTypeId
* Type : `Function`
* Return : `any`
* Parameter
 * key : `string`
#### Description
returns type id of this map.

### getOptions
* Type : `Function`
* Return : `this`
* Parameter

### getPanes
* Type : `Function`
* Return : `naver.maps.MapPanes`

### getPrimitiveProjection
* Type : `Function`
* Return : `naver.maps.Projection`

### getProjection
* Type : `Function`
* Return : `naver.maps.MapSystemProjection`

### getSize
* Type : `Function`
* Return : `naver.maps.Size`

### getZoom
* Type : `Function`
* Return : `number`

## Setter Methods

### setCenter
* Type : `Function`
* Return : `this`
* Parameter
  * latOrLatLng : `number` | `naver.maps.LatLng` | `naver.maps.LatLngLiteral`
  * lng : `number`
### setCenterPoint
* Type : `Function`
* Return : `this`
* Parameter
 * point : `naver.maps.Point` | `naver.maps.PointLiteral` 

### setMapTypeId
* Type : `Function`
* Return : `this`
* Parameter
 * type : `string`
  * value : `NORMAL` | `TERRAIN` | `SATELLITE` | `HYBRID`

### setOptions
* Type : `Function`
* Return : `this`
* Parameter
 * options : `naver.maps.MapOptions` 

### setSize
* Type : `Function`
* Return : `this`
* Parameter
 * size : `naver.maps.Size` | `naver.maps.SizeLiteral`
### setZoom
* Type : `Function`
* Return : `this`
* Parameter
  * level(int) : `number`
  * useEffect : `boolean`
