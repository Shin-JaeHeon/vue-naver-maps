export default class Marker extends naver.maps.OverlayView {
  /**
   * create marker on map
   * @param {naver.maps.Map} map
   * @param {number} lat
   * @param {number} lng
   * @param {Object} otherOptions
   */
  constructor(map, lat, lng, otherOptions) {
    super();
    this.marker = new naver.maps.Marker(Object.assign({
      position: new naver.maps.LatLng(lat, lng),
      map: map,
    }, otherOptions));
  }

  /**
   *
   * @param {boolean} clickable
   * @returns {Marker}
   */
  setClickable(clickable) {
    this.marker.setClickable(clickable);
    return this;
  }

  /**
   *
   * @param {string} cursor
   * @returns {Marker}
   */
  setCursor(cursor) {
    this.marker.setCursor(cursor);
    return this;
  }

  /**
   *
   * @param {boolean} draggable
   * @returns {Marker}
   */
  setDraggable(draggable) {
    this.marker.setDraggable(draggable);
    return this;
  }

  draw() {
    return this.marker.draw();
  }

  getAnimation() {
    return this.marker.getAnimation();
  }

  getClickable() {
    return this.marker.getClickable();
  }

  getCursor() {
    return this.marker.getCursor();
  }

  getDraggable() {
    return this.marker.getDraggable();
  }

  getDrawingRect() {
    return this.marker.getDrawingRect();
  }

  getIcon() {
    return this.marker.getIcon();
  }

  getOptions(key) {
    return this.marker.getOptions(key);
  }

  getPosition() {
    return this.marker.getPosition();
  }

  getShape() {
    return this.marker.getShape();
  }

  getTitle() {
    return this.marker.getTitle();
  }

  getVisible() {
    return this.marker.getVisible();
  }

  getZIndex() {
    return this.marker.getZIndex();
  }

  onAdd() {
    return this.marker.onAdd();
  }

  onRemove() {
    return this.marker.onRemove();
  }

  /**
   *
   * @param {'BOUNCE' | 'DROP'} animation
   * @returns {Marker}
   */
  setAnimation(animation) {
    this.marker.setAnimation(naver.maps.Animation[animation]);
    return this;
  }

  /**
   *
   * @param { string | ImageIcon | SymbolIcon | HtmlIcon} icon
   * @returns {Marker}
   */
  setIcon(icon) {
    this.marker.setIcon(icon);
    return this;
  }

  /**
   *
   * @param {MarkerOptions} options
   * @returns {Marker}
   */
  setOptions(options) {
    this.marker.setOptions(options);
    return this;
  }

  /**
   *
   * @param {Coord | CoordLiteral} position
   * @returns {Marker}
   */
  setPosition(position) {
    this.marker.setPosition(position);
    return this;
  }

  /**
   *
   * @param {MarkerShape} shape
   * @returns {Marker}
   */
  setShape(shape) {
    this.marker.setShape(shape);
    return this;
  }

  /**
   *
   * @param {string} title
   * @returns {Marker}
   */
  setTitle(title) {
    this.marker.setTitle(title);
    return this;
  }

  /**
   *
   * @param {boolean} visible
   * @returns {Marker}
   */
  setVisible(visible) {
    this.marker.setVisible(visible);
    return this;
  }

  /**
   *
   * @param {number} zIndex
   * @returns {Marker}
   */
  setZIndex(zIndex) {
    this.marker.setZIndex(zIndex);
    return this;
  }
}
