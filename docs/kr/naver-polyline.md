# naver-polyline
`naver-polyline`은 지도에 선을 생성하는 컴포넌트입니다.
```vue
<naver-polyline :path="[{lat:37,lng:127},{lat:38,lng:129}]"/>
```
## Props
type: `Array`,
path: `Array`,
### More Options
* strokeWeight : `Number`
* strokeOpacity : `Number`
* strokeColor : `String`
* strokeStyle : `naver.maps.strokeStyleType`
* strokeLineCap : `naver.maps.strokeLineCapType`
* strokeLineJoin : `naver.maps.strokeLineJoinType`
* fillColor : `String`
* fillOpacity : `Number`
* clickable : `Boolean`
* visible : `Boolean`
* zIndex : `Number`

## Getter Methods

### getAreaSize
* Type : `Function`
* Return : `number`

### getBounds
* Type : `Function`
* Return : `naver.maps.Bounds`

### getClickable
* Type : `Function`
* Return : `boolean`

### getDistance
* Type : `Function`
* Return : `number`

### getOptions
* Type : `Function`
* Return : `naver.maps.PolylineOptions`
* Parameter
 * key : `string`  

### getPath
* Type : `Function`
* Return : `naver.maps.ArrayOfCoords` | `naver.maps.KVOArrayOfCoords`

### getStyles
* Type : `Function`
* Return : `naver.maps.PolylineOptions`
* Parameter
 * key : `string` 

### getVisible
* Type : `Function`
* Return : `boolean`

### getZIndex
* Type : `Function`
* Return : `number`

## Setter Methods

### setBounds
* Type : `Function`
* Return : `this`
* Parameter
 * bounds : `BoundsLiteral`

### setClickable
* Type : `Function`
* Return : `this`
* Parameter
 * clickable : `boolean`

### setOptions
* Type : `Function`
* Return : `this`
* Parameter
 * options : `Object`

### setPath
* Type : `Function`
* Return : `this`
* Parameter
 * path : `naver.maps.ArrayOfCoords` | `naver.maps.KVOArrayOfCoords`
 
### setStyles
* Type : `Function`
* Return : `this`
* Parameter
 * options : `Object` 

### setVisible
* Type : `Function`
* Return : `this`
* Parameter
 * visible : `boolean`
 
### setZIndex
* Type : `Function`
* Return : `this`
* Parameter
 * zIndex : `number` 

