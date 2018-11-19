# naver-marker
지도에 마커를 표시해줍니다.

네이버의 이벤트는 @name 으로 접근 가능합니다. 예) @click, @dbclick 등 
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

## Methods
* draw() => void;
* getAnimation() => string
* getClickable() => boolean
* getCursor() => string
* getDraggable() => boolean
* getDrawingRect() => Bounds
* getIcon() => ImageIcon or SymbolIcon or HtmlIcon
* getOptions(key?: string) => MarkerOptions
* getPosition() => Coord
* getShape() => MarkerShape
* getTitle() => string
* getVisible() => boolean
* getZIndex() => number

### setClickable(clickable) ⇒ `Marker`

| 파라미터 | 타입 |
| --- | --- |
| clickable | `boolean` |

### setCursor(cursor) ⇒ `Marker`

| 파라미터 | 타입 |
| --- | --- |
| cursor | `string` |

### setDraggable(draggable) ⇒ `Marker`

| 파라미터 | 타입 |
| --- | --- |
| draggable | `boolean` |

### setAnimation(animation) ⇒ `Marker`

| 파라미터 | 타입 |
| --- | --- |
| animation | `&#x27;BOUNCE&#x27;` \| `&#x27;DROP&#x27;` |

### setIcon(icon) ⇒ `Marker`

| 파라미터 | 타입 |
| --- | --- |
| icon | `string` \| `ImageIcon` \| `SymbolIcon` \| `HtmlIcon` |

### setOptions(options) ⇒ `Marker`

| 파라미터 | 타입 |
| --- | --- |
| options | `MarkerOptions` |

### setPosition(position) ⇒ `Marker`

| 파라미터 | 타입 |
| --- | --- |
| position | `Coord` \| `CoordLiteral` |

### setShape(shape) ⇒ `Marker`

| 파라미터 | 타입 |
| --- | --- |
| shape | `MarkerShape` |

### setTitle(title) ⇒ `Marker`

| 파라미터 | 타입 |
| --- | --- |
| title | `string` |

### setVisible(visible) ⇒ `Marker`

| 파라미터 | 타입 |
| --- | --- |
| visible | `boolean` |

### setZIndex(zIndex) ⇒ `Marker`

| 파라미터 | 타입 |
| --- | --- |
| zIndex | `number` |
