<template>
  <div id="vue-naver-maps" :style="mapStyle">
    <slot>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'Map',
    props: {
      width: Number,
      height: Number,
      mapOptions: {
        type: Object
      },
      initLayers: Array,
      useStyleMap: Boolean,
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
        handler(newValue) {
          this.map.setOptions(newValue);
        },
      }
    },
    methods: {
      /* Normal Method */
      /**
       * @param layerName {string}
       * @returns this
       */
      addStyleLayer(layerName) {
        this.map.mapTypes.selectedMapType.addLayer(window.naver.maps.StyleMapLayerId[layerName]);
        this.map.refresh();
        return this;
      },
      /**
       * @param layerName {string}
       * @returns this
       */
      removeStyleLayer(layerName) {
        this.map.mapTypes.selectedMapType.removeLayer(window.naver.maps.StyleMapLayerId[layerName]);
        this.map.refresh();
        return this;
      },
      /**
       * @param layerName {string}
       * @returns this
       */
      removeLayer(layerName) {
        this.map.mapTypes.removeLayer(layerName);
        return this
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
        if (zoomOrigin) this.zoomBy(deltaZoom, zoomOrigin, effect);
        else this.zoomBy(deltaZoom);
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
        new Promise(resolve => {
          /**
           * settings
           */
          const settings = {
            center: new window.naver.maps.LatLng(this.mapOptions.lat, this.mapOptions.lng),
            maxZoom: 20,
            minZoom: 0,
          };
          /**
           * use style map
           */
          if (this.useStyleMap) {
            const layers = {
              BACKGROUND: 'bg', BACKGROUND_DETAIL: 'ol', BYCYCLE: 'br', CADASTRAL: 'lp', CTT: 'ctt', HIKING_TRAIL: 'ar', PANORAMA: 'ps',
              POI_KOREAN: 'lko', TRANSIT: 'ts'
            };
            const keys = Object.keys(layers);
            if (this.initLayers.map(v => keys.includes(v)).includes(false)) throw '[vue-naver-maps] Invalid StyledMap layer name in initLayers!';
            settings.mapTypes = window.naver.maps.StyleMapTypeOption.getMapTypes({initLayers: this.initLayers.map(v => layers[v])});
            settings.mapTypeId = window.naver.maps.StyleMapTypeId.NORMAL;
            resolve(settings);
            /**
             * if script unloaded
             */
          } else resolve(settings);
        }).then(settings => {
          /**
           * Creating map
           */
          this.map = new window.naver.maps.Map('vue-naver-maps', Object.assign(settings, this.mapOptions));

          /**
           * zoomControl options
           */
          if (this.zoomControlOptions && this.zoomControlOptions.position) this.setOptions({zoomControlOptions: {position: naver.maps.Position[this.zoomControlOptions.position]}});

          /**
           * call callback function
           */
          window.$naverMapsCallback.forEach(v => v(this.map));
          window.$naverMapsCallback = [];
          window.$naverMapsLoaded = true;
          window.$naverMapsObject = this.map;
          this.$emit('load', this);
        }).catch(console.error);
      }
    },
    mounted() {
      /**
       * Checking to exist Map options which is must be included.
       */
      if (this.mapOptions.lat && this.mapOptions.lng) {
        /**
         * When the script already loaded.
         */
        if (window.naver) this.loadNaverMapsComponents();
        else {
          /**
           * When the script loaded.
           */
          document.getElementById('naver-map-load').onload = () => {
            if (this.useStyleMap) {
              document.querySelector('script[src="https://openapi.map.naver.com/openapi/v3/maps-stylemap.js"]').onload = () => {
                setTimeout(() => this.loadNaverMapsComponents(), 100);
              }
            } else window.naver.maps.onJSContentLoaded = this.loadNaverMapsComponents;
          }
        }
      } else throw new Error('mapOptions must be included lat and lng.');
    }
  }
</script>
