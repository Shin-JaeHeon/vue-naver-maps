import Map from './Map.vue';
import InfoWindow from './InfoWindow.vue';
import Marker from './overlays/NaverMarker.vue';
import NaverCircle from './overlays/NaverCircle.vue';
import NaverRectangle from './overlays/NaverRectangle.vue';
import NaverEllipse from './overlays/NaverEllipse.vue';
import NaverGroundOverlay from './overlays/NaverGroundOverlay.vue';
import NaverPolygon from './overlays/NaverPolygon.vue';
import NaverPolyline from './overlays/NaverPolyline.vue';

// old 버전 대응
const getUrl = (ncpKeyId, subModules, useOld, useGovAPI) => {
    // TODO 구형 Maps API 지원 종료시 제거
    if (useOld) {
        const apiType = useGovAPI ? 'gov' : 'ncp';
        return `https://oapi.map.naver.com/openapi/v3/maps.js?${apiType}ClientId=${ncpKeyId}${(subModules ? `&submodules=${subModules}` : '')}`;
    }
    return `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${ncpKeyId}${(subModules ? `&submodules=${subModules}` : '')}`;
}

const vueNaverMaps = {
    /**
     * @param Vue
     * @param {
     * {
     *  clientID?:string
     *  ncpKeyId?:string
     *  useGovAPI?:boolean
     *  subModules:string
     *  }
     * } options
     */
    install(Vue, options) {
        if (typeof window !== 'undefined') {
            if (options.ncpKeyId || options.clientID) {
                window.$naverMapsCallback = [];
                window.$naverMapsLoaded = false;
                const URL = getUrl(options.ncpKeyId ? options.ncpKeyId : options.clientID, options.subModules, !!options.clientID, options.useGovAPI);
                const script = document.createElement('script');
                if (script) {
                    script.setAttribute('src', URL);
                    script.id = 'naver-map-load';
                    script.setAttribute('async', '');
                    script.setAttribute('defer', '');
                    document.head.appendChild(script);
                } else throw new Error('api can\'t loaded');
            } else throw new Error('options must be included ncpKeyId or clientID');
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
