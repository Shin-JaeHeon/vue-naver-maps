# naver-rectangle
`naver-rectangle`은 지도에 사각형을 생성하는 컴포넌트입니다.
```vue
<naver-rectangle :south="36" :north="38" :west="126" :east="128"/>
```
## Props
### bounds
* north : `Number`
* south : `Number`
* west : `Number`
* east : `Number`
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

### getDrawingRect
* Type : `Function`
* Return : `naver.maps.Bounds`

### getOptions
* Type : `Function`
* Return : `naver.maps.RectangleOptions`
* Parameter
 * key : `string`  

### getStyles
* Type : `Function`
* Return : `naver.maps.RectangleOptions`
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
 * options : `RectangleOptions`

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

