export function addEvent(vue, target, name) {
  naver.maps.Event.addListener(target, name, event => vue.$emit(name, event));
}

export function mapSettings(mapOptions, initLayers){
  const settings = {
    center: new window.naver.maps.LatLng(mapOptions.lat, mapOptions.lng),
    maxZoom: 21,
    minZoom: 0,
  }
  const mapOptionsLat = mapOptions.lat || mapOptions.lat === 0 ? true : false;
  const mapOptionsLng = mapOptions.lng || mapOptions.lng === 0 ? true : false;

  if(!mapOptionsLat || !mapOptionsLng) delete settings.center;

  if(!initLayers || initLayers.length === 0) return settings;
  else return mapLayers(settings, initLayers);
}

export function mapLayers(settings, initLayers){
  const layers = {
    BACKGROUND: 'bg', BACKGROUND_DETAIL: 'ol', BICYCLE: 'br', CADASTRAL: 'lp', CTT: 'ctt', HIKING_TRAIL: 'ar', PANORAMA: 'pr',
    POI_KOREAN: 'lko', TRANSIT: 'ts', KOREAN: 'lko', ENGLISH: 'len', CHINESE: 'lzh', JAPANESE: 'lja'
  };

  settings.mapTypes = new window.naver.maps.MapTypeRegistry({
    'normal': window.naver.maps.NaverStyleMapTypeOption.getNormalMap(
      {
        overlayType: initLayers.map(layer => layers[layer]).join('.'),
      }
    )
  });

  return settings;
}