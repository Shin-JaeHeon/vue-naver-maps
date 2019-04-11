# naver-maps
`naver-maps`is the component that creates a map. It does not work if the `naver-maps` is not used and another component is used. <br>
However, libraries will be loaded even if you do not create `naver-maps`.

## Settings

!> If `mapOptions` is used as an inline object, an error may occur. Please write `mapOptions` in a **non-inline**, as shown in the example.

```vue
<naver-maps :width="600" :height="400"  :mapOptions="mapOptions"></naver-maps>
```
?> This component is required Lat(latitude) and lng(longitude).

You can use `MapOptions` to settings of the map.
```
mapOptions: {
  zoom?: Number(The default value is 10),
  lat: Number,
  lng: Number,
  zoomControl?: Boolean,
  zoomControlOptions?: {
    position: String
  }
}
```
`position` in `zoomControlOptions` uses enum names in JavaScript libraries such as 'TOP_RIGHT'.

## General Methods

### addStyleLayer
* Type : `Function`
* Return : `this`
* Parameter
 * layerName : `string`

add StyleLayer.

### addPane
* Type : `Function`
* Return : `this`
* Parameter
 * name : `string`
 * elementOrZIndex : `HTMLElement` | `number`

### destroy
* Type : `Function`
* Return : `this`

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

### removeStyleLayer
* Type : `Function`
* Return : `this`
* Parameter
 * layerName : `string`

remove StyleLayer.

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

The result of converting the map's center coordinates to the world coordinates.

### getElement
* Type : `Function`
* Return : `HTMLElement`
 
### getMapTypeId
* Type : `Function`
* Return : `any`
* Parameter
 * key : `string`

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
