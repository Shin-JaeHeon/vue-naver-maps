# naver-info-window
`naver-info-window` is a component that creates an information window on a map.
```html
<naver-info-window
        class="info-window"
        @load="onWindowLoad"
        :isOpen="info"
        :marker="marker">
        <div class="info-window-container">
          <h1>{{hello}}</h1>
        </div>
</naver-info-window>
```
## Props
### marker
마커를 지정합니다.
### isOpen
창의 열림/닫힘 값
