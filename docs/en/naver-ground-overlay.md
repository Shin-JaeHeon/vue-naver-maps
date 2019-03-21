# naver-ground-overlay
`naver-ground-overlay` is a component that creates an image overlay on a map.
```vue
<naver-ground-overlay
        :url="'//logoproject.naver.com/img/img_about.gif'"
        :bounds="{south:36.7,north:36.9,west:126.5,east:127.5}"/>
```
## Methods

### getBounds
* Type : `Function`
* Return : `naver.maps.Bounds`

### getUrl
* Type : `Function`
* Return : `string`

### getOpacity
* Type : `Function`
* Return : `number`

### setOpacity
* Type : `Function`
* Return : `this`
* Parameter
 * opacity `number`
