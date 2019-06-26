import Map from './Map.vue';
import InfoWindow from './InfoWindow.vue';
import Marker from './overlays/NaverMarker.vue';
import NaverCircle from './overlays/NaverCircle.vue';
import NaverRectangle from './overlays/NaverRectangle.vue';
import NaverEllipse from './overlays/NaverEllipse.vue';
import NaverGroundOverlay from './overlays/NaverGroundOverlay.vue';
import NaverPolygon from './overlays/NaverPolygon.vue';
import NaverPolyline from './overlays/NaverPolyline.vue';

const vueNaverMaps = {
  /**
   * @param Vue
   * @param {
   * { clientID:string
   *  useGovAPI?:boolean
   *  subModules:string}
   * } options
   */
  install(Vue, options) {
    if (process.browser) {
      if (options.clientID) {
        window.$naverMapsCallback = [];
        window.$naverMapsLoaded = false;
        const apiType = options.useGovAPI ? 'govC' : 'ncpC';
        const URL = `https://openapi.map.naver.com/openapi/v3/maps.js?${apiType}lientId=${options.clientID}${(options.subModules ? `&submodules=${options.subModules}` : '')}`;
        const script = document.createElement('script');
        if (script) {
          script.setAttribute('src', URL);
          script.id = 'naver-map-load';
          script.setAttribute('async', '');
          script.setAttribute('defer', '');
          document.head.appendChild(script);
        } else throw new Error('api can\'t loaded');
      } else throw new Error('options must be included clientID');
      Vue.component('naver-maps', Map);
      Vue.component('naver-info-window', InfoWindow);
      Vue.component('naver-marker', Marker);
      Vue.component('naver-circle', NaverCircle);
      Vue.component('naver-ellipse', NaverEllipse);
      Vue.component('naver-rectangle', NaverRectangle);
      Vue.component('naver-ground-overlay', NaverGroundOverlay);
      Vue.component('naver-polygon', NaverPolygon);
      Vue.component('naver-polyline', NaverPolyline);
    } else throw new Error('Sorry, this plugin is only available in browsers at now. If you are using Nuxt.js, turn off ssr for this plugin.');
  }
};

export default vueNaverMaps;
