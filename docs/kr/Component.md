# Component
## @load(this)
네이버 지도 라이브러리 또는 지도가 로딩됐을 때, 각각의 컴포넌트에서는 `load` 이벤트를 호출합니다.
```html
<naver-maps :width="600" :height="400" :mapOptions="mapOptions" @load="callback"></naver-maps>
```
또한 인자로는 컴포넌트의 `this`를 넘겨줍니다. 
