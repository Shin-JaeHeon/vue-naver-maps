## Methods
* <a href="#setOptions">setOptions(options)</a>
* <a href="#setMapType">setMapType(type)</a>
* <a href="#setZoom">setZoom(level, useEffect)</a>
* <a href="#setCenter">setCenter(lat, lng)</a>
* <a href="#fitBounds">fitBounds(lat, lng)</a>
* <a href="#panTo">panTo(lat, lng)</a>
* <a href="#panToBounds">panToBounds(lat, lng)</a>
* <a href="#panBy">panBy(x, y)</a>

<a name="setOptions"></a>

### setOptions(options)

| 파라미터 | 타입 |
| --- | --- |
| options | `Object` |

<a name="setMapType"></a>

### setMapType(type)

| 파라미터 | 타입 | Description |
| --- | --- | --- |
| type | `string` | NORMAL, TERRAIN, SATELLITE, HYBRID |

<a name="setZoom"></a>

### setZoom(level, useEffect)

| 파라미터 | 타입 | Default | Description |
| --- | --- | --- | --- |
| level | `number` |  | must be int |
| useEffect | `boolean` | `false` |  |

<a name="setCenter"></a>

### setCenter(lat, lng)

| 파라미터 | 타입 |
| --- | --- |
| lat | `number` |
| lng | `number` |

<a name="fitBounds"></a>

### fitBounds(bounds, margin)

| 파라미터 | 타입 |
| --- | --- |
| bounds | `naver.maps.Bounds OR naver.maps.BoundsLiteral OR naver.maps.ArrayOfCoords OR naver.maps.ArrayOfCoordsLiteral` |
| margin | `number` |
<a name="panTo"></a>

### panTo(coord, transitionOptions)

| 파라미터 | 타입 |
| --- | --- |
| coord | `naver.maps.Coord OR naver.maps.CoordLiteral` |
| transitionOptions | `naver.maps.TransitionOptions` |


<a name="panToBounds"></a>

### panToBounds(bounds, transitionOptions, margin)

| 파라미터 | 타입 |
| --- | --- |
| bounds | `naver.maps.Bounds OR naver.maps.BoundsLiteral` |
| transitionOptions | `naver.maps.TransitionOptions` |
| margin | `number` |


<a name="panBy"></a>

### panBy(x, y)

| 파라미터 | 타입 |
| --- | --- |
| x | `number` |
| y | `number` |
