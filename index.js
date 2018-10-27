import Map from './src/Map';

const vueNaverMaps = {
  /**
   * @param Vue
   * @param {
   * { clientID:string }
   * } options
   */
  install(Vue, options) {
    if (options.clientID) {
      const URL = `https://openapi.map.naver.com/openapi/v3/maps.js?clientId=${options.clientID}${options.subModules ? `&submodules=${options.subModules}` : ''}`;
      const SCRIPT = document.createElement('script');
      if (SCRIPT)
        SCRIPT.setAttribute('src', URL);
      SCRIPT.id = 'naver-map-load';
      SCRIPT.setAttribute('async', '');
      SCRIPT.setAttribute('defer', '');
      document.head.appendChild(SCRIPT);
    } else throw new Error('options must be included clientID');
    Vue.component('NaverMaps', Map);

  }
};

export default vueNaverMaps;
