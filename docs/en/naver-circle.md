# naver-circle
`naver-circle` is a component that creates a circle on a map.

```vue
 <naver-circle :lat="37" :lng="127" :radius="88600"/>
```
## Props
* lat : `Number`
* lng : `Number`
* radius : `Number`
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

### getCenter
* Type : `Function`
* Return : `naver.maps.Point | naver.maps.LatLng`

### getDrawingRect
* Type : `Function`
* Return : `naver.maps.Bounds`

### getRadius
* Type : `Function`
* Return : `number`
### getOptions
* Type : `Function`
* Return : `naver.maps.CircleOptions`
* Parameter
 * key : `string`  

### getStyles
* Type : `Function`
* Return : `naver.maps.CircleOptions`
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
 
### setCenter
 * Type : `Function`
 * Return : `this`
 * Parameter
  * lat : `number`
  * lng : `number`
  
### setCenterPoint
* Type : `Function`
* Return : `this`
* Parameter
 * x : `number`
 * y : `number`

### setOptions
* Type : `Function`
* Return : `this`
* Parameter
 * options : `Object`
 
### setRadius
* Type : `Function`
* Return : `this`
* Parameter
 * radius : `number` 

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

