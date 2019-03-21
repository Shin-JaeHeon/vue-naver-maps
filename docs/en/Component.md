# Component
## Event
Events in the existing JavaScript library can be accessed to `@name`. e.g. `@click`, `@dbclick`, etc.

### Vue Object and Naver Object
The terms used in this paragraph have the following meanings:
* `Vue Object` : The component of `vue.js`
* `Naver Object` : The Object of `naver.maps` (ex : `naver.maps.Marker`, etc...)

In this example, you registered the following functions in the @load event of the `naver-marker` component.
In `onMarkerLoaded` function, first parameter is `Vue Object`.
```javascript
function onMarkerLoaded({marker}) {
  this.marker = marker;  //naver.maps.Marker
  this.marker.setClickable(true);
}
```
If you want only use `default javascript type` instead of `naver.maps.xxx`, you should be use `Vue Object`.
```javascript
function onMarkerLoaded(vue) {
  this.marker = vue; // naver-maker component
  this.marker.setClickable(true);
}
```

### @load(this)
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
If you want to be compatible with existing HTML sources or prefer to have direct access to `Naver Object`, access `vue.marker` as above. 
 
## Methods
There are two ways to use the methods of using the existing JavaScript library.
Approach with a `Vue Object` and approach with a `Naver Object`.
For example, if the `setCenter` function is to be performed using `Naver Object` as `map.setCenter(new naver.maps.LatLng(lat, lng));` the `Vue Object` can be used as a '`this.setCenter(lat,lng)` simply.


?> The component contains almost all of the methods. However, in special cases, you may need to approach the `Naver Object` directly, such as `this.map`.
