# naver-marker
`naver-makrer` is a component that creates marker on a map.

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
    // naver-marker allows for the following:
    onMarkerLoaded(vue){
      vue.marker.setDraggable(true).setCursor('').setClickable(true);
    },
    onMarkerClicked(event){
      console.log(event); // The object of naver event
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

