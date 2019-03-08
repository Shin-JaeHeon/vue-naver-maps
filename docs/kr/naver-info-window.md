# naver-info-window
`naver-info-window`는 지도에 정보창을 생성하는 컴포넌트입니다.
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
