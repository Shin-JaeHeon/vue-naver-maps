# naver-marker
`naver-makrer`는 지도에 마커를 생성하는 컴포넌트입니다.

```vue
<naver-maps :width="600" :height="400"  :mapOptions="mapOptions">
    <naver-marker :lat="37" :lng="127" @click="onMarkerClicked" @load="onMarkerLoaded"></naver-marker>
</naver-maps>
<script>
export default {
  data(){
    return {};
  },
  methods:{
    // naver-marker는 다음과 같은 체이닝이 가능합니다.
    onMarkerLoaded(vue){
      vue.marker.setDraggable(true).setCursor('').setClickable(true);
    },
    onMarkerClicked(event){
      console.log(event); // 네이버 event 객체
    }
  }
}
</script>

```
## General Methods

### draw
* Type : `Function`
* Return : `void`

## Getter Methods

### getAnimation
* Type : `Function`
* Return : `string`

### getClickable
* Type : `Function`
* Return : `boolean`

### getCursor
* Type : `Function`
* Return : `string`

### getDraggable
* Type : `Function`
* Return : `boolean`

### getDrawingRect
* Type : `Function`
* Return : `naver.maps.Bounds`

### getIcon
* Type : `Function`
* Return : `ImageIcon | SymbolIcon | HtmlIcon`

### getOptions
* Type : `Function`
* Return : `naver.maps.MarkerOptions`
* Parameter
 * key : `string`  

### getPosition
* Type : `Function`
* Return : `naver.maps.Coord`

### getShape
* Type : `Function`
* Return : `naver.maps.MarkerShape`

### getTitle
* Type : `Function`
* Return : `string`

### getVisible
* Type : `Function`
* Return : `boolean`

### getZIndex
* Type : `Function`
* Return : `number`

## Setter Methods

### setAnimation
* Type : `Function`
* Return : `this`
* Parameter
 * clickable : `BOUNCE` | `DROP`

### setClickable
* Type : `Function`
* Return : `this`
* Parameter
 * clickable : `boolean`
 
### setCursor
* Type : `Function`
* Return : `this`
* Parameter
 * cursor : `string`

### setDraggable
* Type : `Function`
* Return : `this`
* Parameter
 * draggable : `boolean`

### setIcon
* Type : `Function`
* Return : `this`
* Parameter
 * icon : `string` | `ImageIcon` | `SymbolIcon` | `HtmlIcon`

### setOptions
* Type : `Function`
* Return : `this`
* Parameter
 * options : `MarkerOptions`
 
### setPosition
* Type : `Function`
* Return : `this`
* Parameter
 * position : `Coord` | `CoordLiteral`
 
### setShape
* Type : `Function`
* Return : `this`
* Parameter
 * shape : `MarkerShape`

### setTitle
* Type : `Function`
* Return : `this`
* Parameter
 * title : `string`

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

