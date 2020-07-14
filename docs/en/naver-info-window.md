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
Set the marker
### isOpen
Window Opened
### MoreOptions
Set options to infoWindow.