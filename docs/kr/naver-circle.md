# naver-circle
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
### Methods
### getAreaSize() ⇒ <code>number</code>
### getBounds() ⇒ <code>naver.maps.Bounds</code>
### getCenter() ⇒ <code>naver.maps.Coord</code>
### getClickable() ⇒ <code>boolean</code>
### getDrawingRect() ⇒ <code>naver.maps.Bounds</code>
### getOptions(key) ⇒ <code>naver.maps.CircleOptions</code>
| 파라미터 | 타입 |
| --- | --- |
| key | string |
### getRadius() ⇒ <code>number</code>
### getStyles(key) ⇒ <code>naver.maps.CircleOptions</code>
| 파라미터 | 타입 |
| --- | --- |
| key | string | 
### getVisible() ⇒ <code>boolean</code>
### getZIndex() ⇒ <code>number</code>
### setCenter(lat, lng) ⇒ <code>this</code>

| 파라미터 | 타입 |
| --- | --- |
| lat | number |
| lng | number |
### setCenterPoint(x, y) ⇒ <code>this</code>

| 파라미터 | 타입 |
| --- | --- |
| x | number |
| y | number | 
### setClickable(clickable) ⇒ <code>this</code>

| 파라미터 | 타입 |
| --- | --- |
| clickable | boolean | 
### setOptions(options) ⇒ <code>this</code>

| 파라미터 | 타입 |
| --- | --- |
| options | Object |
### setRadius(radius) ⇒ <code>this</code>

| 파라미터 | 타입 |
| --- | --- |
| radius | number | 
### setStyles(options) ⇒ <code>this</code>

| 파라미터 | 타입 |
| --- | --- |
| options | Object | 
### setVisible(visible) ⇒ <code>this</code>

| 파라미터 | 타입 |
| --- | --- |
| visible | boolean |
### setZIndex(zIndex) ⇒ <code>this</code>

| 파라미터 | 타입 |
| --- | --- |
| zIndex | number | 

