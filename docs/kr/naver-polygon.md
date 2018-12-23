# naver-ground-overlay
```vue
<naver-polyogon :moreOptions="{}"></naver-polyogon>
```
## More Options
* type: Object
* paths: Object
* strokeWeight : Number
* strokeOpacity : Number
* strokeColor : String
* strokeStyle : naver.maps.strokeStyleType
* strokeLineCap : naver.maps.strokeLineCapType
* strokeLineJoin : naver.maps.strokeLineJoinType
* fillColor : String
* fillOpacity : Number
* clickable : Boolean
* visible : Boolean
* zIndex : Number
## Methods

### Methods
### getAreaSize() ⇒ <code>number</code>
### getBounds() ⇒ <code>naver.maps.Bounds</code>
### getClickable() ⇒ <code>boolean</code>
### getDrawingRect() ⇒ <code>naver.maps.Bounds</code>
### getOptions(key) ⇒ <code>naver.maps.CircleOptions</code>
| 파라미터 | 타입 |
| --- | --- |
| key | string |  
### getPath() ⇒ <code>naver.maps.ArrayOfCoords OR naver.maps.KVOArrayOfCoords</code>
### getPaths() ⇒ <code>Array<naver.maps.ArrayOfCoords> OR naver.maps.KVOArray<naver.maps.KVOArrayOfCoords></code>
### getStyles(key) ⇒ <code>naver.maps.CircleOptions</code>
| 파라미터 | 타입 |
| --- | --- |
| key | string | 
### getVisible() ⇒ <code>boolean</code>
### getZIndex() ⇒ <code>number</code>
#### setBounds(bounds)  => <code>this</code>

| 파라미터 | 타입 |
| --- | --- |
| bounds | BoundsLiteral |
### setClickable(clickable) ⇒ <code>this</code>

| 파라미터 | 타입 |
| --- | --- |
| clickable | boolean |
### setOptions(options) ⇒ <code>this</code>

| 파라미터 | 타입 |
| --- | --- |
| options | Object |
### setPath(path) ⇒ <code>this</code>

| 파라미터 | 타입 |
| --- | --- |
| path | naver.maps.ArrayOfCoords OR naver.maps.KVOArrayOfCoords |
### setPaths(paths) ⇒ <code>this</code>

| 파라미터 | 타입 |
| --- | --- |
| paths | Array<naver.maps.ArrayOfCoords OR naver.maps.KVOArray<naver.maps.KVOArrayOfCoords> OR Array<naver.maps.ArrayOfCoordsLiteral |
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

