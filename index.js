import Map from './src/Map';
import InfoWindow from './src/InfoWindow';
import Marker from "./src/NaverMarker";

const vueNaverMaps = {
  /**
   * @param Vue
   * @param {
   * { clientID:string
   *  useOpenAPI?:boolean
   *  subModules:string}
   * } options
   */
  install(Vue, options) {
    if (options.clientID) {
      window.$naverMapsCallback = [];
      const URL = `https://openapi.map.naver.com/openapi/v3/maps.js?${options.useOpenAPI ? 'c' : 'ncpC'}lientId=${options.clientID}${(options.subModules ? `&submodules=${options.subModules}` : '')}`;
      const SCRIPT = document.createElement('script');
      if (SCRIPT)
        SCRIPT.setAttribute('src', URL);
      SCRIPT.id = 'naver-map-load';
      SCRIPT.setAttribute('async', '');
      SCRIPT.setAttribute('defer', '');
      document.head.appendChild(SCRIPT);
    } else throw new Error('options must be included clientID');
    Vue.component('naver-maps', Map);
    Vue.component('naver-info-window', InfoWindow);
    Vue.component('naver-marker', Marker);

  }
};

export default vueNaverMaps;
