# naver-ground-overlay
`naver-ground-overlay`는 지도에 이미지 오버레이를 생성하는 컴포넌트입니다.
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
