# Component
## @load(this)
Each component calls a `load` event when the Naver map library or map is loaded, and when the component is loaded.
As the first parameter, pass the `this` of the component.
```vue
<naver-maps 
  :width="600" 
  :height="400" 
  :mapOptions="mapOptions"
   @load="callback">
</naver-maps>
```
### vue Object and naver Object
The terms used in this paragraph have the following meanings:
* `vue Object` : The component of `vue.js`
* `naver Object` : The Object of `naver.maps` (ex : `naver.maps.Marker`, etc...)

In this example, you registered the following functions in the @load event of the `naver-marker` component.
In `onMarkerLoaded` function, first parameter is `vue Object`.
```javascript
function onMarkerLoaded({marker}) {
  this.marker = marker;  //naver.maps.Marker
  this.marker.setClickable(true);
}
```
If you want only use `default javascript type` instead of `naver.maps.xxx`, you should be use `vue Object`.
```javascript
function onMarkerLoaded(vue) {
  this.marker = vue; // naver-maker component
  this.marker.setClickable(true);
}
```
If you want to be compatible with existing HTML sources or prefer to have direct access to `naver Object`, access `vue.marker` as above. 
