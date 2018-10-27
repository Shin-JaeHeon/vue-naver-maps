export default class Marker {
  /**
   * create marker on map
   * @param {naver.maps.Map} map
   * @param {number} lat
   * @param {number} lng
   * @param {Object} otherOptions
   */
  constructor(map, lat, lng, otherOptions) {
    this.marker = new naver.maps.Marker(Object.assign({
      position: new naver.maps.LatLng(lat, lng),
      map: map,
    }, otherOptions));
  }
}
