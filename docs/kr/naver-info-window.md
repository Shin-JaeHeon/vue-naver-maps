# naver-info-window
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

### OnLoaded

지도가 로딩되면 호출됩니다. 또한 인자로는 naver-info-window 컴포넌트의 `this`를 넘겨줍니다. 
* `this.infoWindow`으로 네이버 InfoWindow 객체에 접근이 가능합니다. 
* `this.map`으로 네이버 Map 객체에 접근이 가능합니다. 
