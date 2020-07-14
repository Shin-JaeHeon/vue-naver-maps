<template>
  <div id="vue-naver-maps" :style="mapStyle">
    <slot>
    </slot>
  </div>
</template>

<script>
  import * as _ from '../lib';

  export default {
    name: 'Map',
    props: {
      width: Number,
      height: Number,
      mapOptions: {
        type: Object,
        required: true,
      },
      initLayers: Array,
    },
    data() {
      return {
        mapStyle: {
          width: `${this.width}px`,
          height: `${this.height}px`,
        },
        /**
         * @type {naver.maps.Map}
         */
        map: null,
        styleMapLoaded: false,
      }
    },
    watch: {
      mapOptions: {
        deep: true,
        handler(newValue) {
          this.map.setOptions(newValue);
        },
      },
      initLayers: {
        deep: true,
        handler(newValue) {
          const settings = {};
          const layers = {
            BACKGROUND: 'bg', BACKGROUND_DETAIL: 'ol', BICYCLE: 'br', CADASTRAL: 'lp', CTT: 'ctt', HIKING_TRAIL: 'ar', PANORAMA: 'pr',
            POI_KOREAN: 'lko', TRANSIT: 'ts', KOREAN: 'lko', ENGLISH: 'len', CHINESE: 'lzh', JAPANESE: 'lja'
          };
          settings.mapTypes = new window.naver.maps.MapTypeRegistry({
            'normal': window.naver.maps.NaverStyleMapTypeOption.getNormalMap(
              {
                overlayType: newValue.map(layer => layers[layer]).join('.'),
              }
            )
          });
          this.setOptions('mapTypes', settings.mapTypes);
        }
      }
    },
    methods: {
      /* Normal Method */
      /**
       * @param typeId {string}
       * @returns this
       */
      setLayerTypeId(typeId) {
        this.map.mapTypes.setLayerTypeId(typeId);
        this.map.refresh();
        return this;
      },
      /**
       * @param name {string}
       * @param elementOrZIndex {HTMLElement | number}
       */
      addPane(name, elementOrZIndex) {
        this.map.addPane(name, elementOrZIndex);
        return this;
      },
      /**
       * delete this map which includes all event and dom element.
       * *** Warning! ***
       *  This method will be delete the map object of this component.
       */
      destroy() {
        this.map.destory();
        this.map = null;
        this.$destroy();
      },
      /**
       * @param {naver.maps.Bounds | naver.maps.BoundsLiteral | naver.maps.ArrayOfCoords | naver.maps.ArrayOfCoordsLiteral} bounds
       * @param {number} margin
       */
      fitBounds(bounds, margin) {
        this.map.fitBounds(bounds, margin);
        return this;
      },
      /**
       * @param coord {naver.maps.Coord | naver.maps.CoordLiteral}
       * @param zoom {number} optional
       * @param transitionOptions {naver.maps.TransitionOptions} optional
       * @returns this
       */
      morph(coord, zoom, transitionOptions) {
        if (zoom) {
          if (transitionOptions) this.map.morph(coord, zoom, transitionOptions);
          else this.map.morph(coord, zoom)
        } else this.map.morph(coord);
        return this;
      },
      /**
       * @param {naver.maps.Coord | naver.maps.CoordLiteral} coord
       * @param {naver.maps.TransitionOptions} transitionOptions
       */
      panTo(coord, transitionOptions) {
        this.map.panTo(coord, transitionOptions);
      },
      /**
       * @param {naver.maps.Bounds | naver.maps.BoundsLiteral} bounds
       * @param {naver.maps.TransitionOptions} transitionOptions
       * @param {number} margin
       */
      panToBounds(bounds, transitionOptions, margin) {
        this.map.panToBounds(bounds, transitionOptions, margin);
      },
      /**
       * @param {number} x
       * @param {number} y
       * @returns this
       */
      panBy(x, y) {
        this.map.panBy(new window.naver.maps.Point(x, y));
        return this;
      },
      /**
       * @param noEffect {boolean}
       * @returns this
       */
      refresh(noEffect = false) {
        this.map.refresh(noEffect);
        return this;
      },
      /**
       * @param name {string}
       * @returns this
       */
      removePane(name) {
        this.map.removePane(name);
        return this;
      },
      /**
       * @returns this
       * @param coord {naver.maps.Coord | naver.maps.CoordLiteral}
       * @param zoom {number}
       */
      updateBy(coord, zoom) {
        this.map.updateBy(name);
        return this;
      },
      /**
       * @returns this
       * @param deltaZoom {number}
       * @param zoomOrigin {naver.maps.Coord | naver.maps.CoordLiteral} default is center
       * @param effect {boolean}
       */
      zoomBy(deltaZoom, zoomOrigin = undefined, effect = false) {
        if (zoomOrigin) this.map.zoomBy(deltaZoom, zoomOrigin, effect);
        else this.map.zoomBy(deltaZoom);
        return this;
      },

      /* Getter Methods */

      /**
       * @returns {naver.maps.Bounds}
       */
      getBounds() {
        return this.map.getBounds();
      },
      /**
       * the center coordinates of a map
       * @returns {naver.maps.Coord}
       */
      getCenter() {
        return this.map.getCenterPoint();
      },
      /**
       * The result of converting the map's center coordinates to the world coordinates.
       * @returns {naver.maps.Coord}
       */
      getCenterPoint() {
        return this.map.getCenterPoint();
      },
      /**
       * @returns {HTMLElement}
       */
      getElement() {
        return this.map.getElement();
      },
      /**
       * returns type id of this map.
       * @returns {string}
       */
      getMapTypeId() {
        return this.map.getMapTypeId();
      },
      /**
       * returns options of this map.
       * @param key {string}
       * @returns any
       */
      getOptions(key = undefined) {
        return key ? this.map.getOptions(key) : this.map.getOptions();
      },
      /**
       * @returns {naver.maps.MapPanes}
       */
      getPanes() {
        return this.map.getPanes();
      },
      /**
       * @returns {naver.maps.Projection}
       */
      getPrimitiveProjection() {
        return this.map.getPrimitiveProjection();
      },
      /**
       * @returns {naver.maps.MapSystemProjection}
       */
      getProjection() {
        return this.map.getProjection();
      },
      /**
       * @returns {naver.maps.Size}
       */
      getSize() {
        return this.map.getSize();
      },
      /**
       * @returns {number}
       */
      getZoom() {
        return this.map.getZoom();
      },

      /* Setter Methods */
      /**
       * @param {number | naver.maps.LatLng | naver.maps.LatLngLiteral} latOrLatLng
       * @param {number} lng
       * @returns this
       */
      setCenter(latOrLatLng, lng = 0) {
        this.map.setCenter(isNaN(latOrLatLng) ? latOrLatLng : new window.naver.maps.LatLng(latOrLatLng, lng));
        return this;

      },
      /**
       * @param {naver.maps.Point | naver.maps.PointLiteral} point
       * @returns this
       */
      setCenterPoint(point) {
        this.map.setCenterPoint(point);
        return this;

      },
      /**
       * @param {string} type NORMAL, TERRAIN, SATELLITE, HYBRID
       * @returns this
       */
      setMapTypeId(type) {
        this.map.setMapTypeId(naver.maps.Position[type]);
        return this;
      },
      /**
       * @param {naver.maps.MapOptions | string} optionsOrKey
       * @param {naver.maps.MapOptions} value optional
       * @returns this
       */
      setOptions(optionsOrKey, value = null) {
        if (this.map) {
          if (value) this.map.setOptions(optionsOrKey, value);
          else this.map.setOptions(optionsOrKey);
        } else throw new Error('setOptions not be available before loaded.');
        return this;
      },
      /**
       * @param {naver.maps.Size | naver.maps.SizeLiteral} size
       * @returns this
       */
      setSize(size) {
        this.map.setSize(size);
        return this;
      },
      /**
       * @param {number} level must be int
       * @param {boolean} useEffect
       * @returns this
       */
      setZoom(level, useEffect = false) {
        this.map.setZoom(level, useEffect);
        return this;

      },
      /**
       * @description load naver maps
       */
      loadNaverMapsComponents() {
        const settings = {
          center: new window.naver.maps.LatLng(this.mapOptions.lat, this.mapOptions.lng),
          maxZoom: 21,
          minZoom: 0,
        };
        const layers = {
          BACKGROUND: 'bg', BACKGROUND_DETAIL: 'ol', BICYCLE: 'br', CADASTRAL: 'lp', CTT: 'ctt', HIKING_TRAIL: 'ar', PANORAMA: 'pr',
          POI_KOREAN: 'lko', TRANSIT: 'ts', KOREAN: 'lko', ENGLISH: 'len', CHINESE: 'lzh', JAPANESE: 'lja'
        };
        settings.mapTypes = new window.naver.maps.MapTypeRegistry({
          'normal': window.naver.maps.NaverStyleMapTypeOption.getNormalMap(
            {
              overlayType: this.initLayers.map(layer => layers[layer]).join('.'),
            }
          )
        });
        this.map = new window.naver.maps.Map('vue-naver-maps', {...settings, ...this.mapOptions});
        if (this.zoomControlOptions && this.zoomControlOptions.position) this.setOptions({zoomControlOptions: {position: naver.maps.Position[this.zoomControlOptions.position]}});
        window.$naverMapsCallback.forEach(v => v(this.map));
        window.$naverMapsCallback = [];
        window.$naverMapsLoaded = true;
        window.$naverMapsObject = this.map;
        [
          'addLayer', 'bounds_changed', 'center_changed', 'centerPoint_changed', 'click', 'dblclick', 'doubletap',
          'drag', 'dragend', 'dragstart', 'idle', 'init_stylemap', 'keydown', 'keyup', 'longtap', 'mapType_changed',
          'mapTypeId_changed', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'panning', 'pinch',
          'pinchend', 'pinchstart', 'projection_changed', 'removeLayer', 'resize', 'rightclick', 'size_changed', 'tap',
          'tilesloaded', 'touchend', 'touchmove', 'touchstart', 'twofingertap', 'zoom_changed', 'zooming',
        ].forEach(name => _.addEvent(this, this.map, name));
        this.$emit('load', this);
      }
    },
    mounted() {
      if (this.mapOptions.lat && this.mapOptions.lng) {
        if (window.naver) this.loadNaverMapsComponents();
        else document.getElementById('naver-map-load').onload = () => window.naver.maps.onJSContentLoaded = this.loadNaverMapsComponents;
      } else throw new Error('mapOptions must be included lat and lng.');
    },
    destroyed() {
      window.$naverMapsLoaded = false;
    }
  }
</script>
