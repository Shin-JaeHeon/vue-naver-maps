<template>
</template>

<script>
  import * as _ from '../../lib';

  export default {
    name: 'NaverPolyline',
    props: {
      type: Array,
      path: Array,
      options: {
        strokeWeight: Number,
        strokeOpacity: Number,
        strokeColor: String,
        strokeStyle: Object,
        strokeLineCap: Object,
        strokeLineJoin: Object,
        fillColor: String,
        fillOpacity: Number,
        clickable: Boolean,
        visible: Boolean,
        zIndex: Number
      },
    },
    data() {
      return {
        /**
         * {naver.maps.Polyline} polyline
         */
        polyline: null,
        /**
         * {naver.maps.Map} map
         */
        map: null,
      };
    },
    methods: {
      /**
       * @returns {naver.maps.Bounds}
       */
      getBounds() {
        return this.polyline.getBounds();
      },
      /**
       * @returns {boolean}
       */
      getClickable() {
        return this.polyline.getClickable();
      },

      /**
       * @returns {number}
       */
      getDistance() {
        return this.polyline.getDistance();
      },

      /**
       * @param key
       * @returns {naver.maps.CircleOptions}
       */
      getOptions(key) {
        return this.polyline.getOptions(key);
      },
      /**
       * @returns {naver.maps.ArrayOfCoords | naver.maps.KVOArrayOfCoords}
       */
      getPath() {
        return this.polyline.getPath();
      },
      /**
       * @param key
       * @returns {naver.maps.CircleOptions}
       */
      getStyles(key) {
        return this.polyline.getStyles(key);
      },

      /**
       * @returns {boolean}
       */
      getVisible() {
        return this.polyline.getVisible();
      },

      /**
       * @returns {number}
       */
      getZIndex() {
        return this.polyline.getZIndex();
      },
      /**
       * @param bounds {naver.maps.Bounds}
       * @returns {this}
       */
      setBounds(bounds) {
        this.polyline.setBounds(bounds);
        return this;
      },

      /**
       * @param clickable
       * @returns {this}
       */
      setClickable(clickable) {
        this.polyline.setClickable(clickable);
        return this;
      },

      /**
       * @param options
       * @returns {this}
       */
      setOptions(options) {
        if (arguments[1]) this.polyline.setOptions(options, arguments[1]);
        else this.polyline.setOptions(options);
        return this;
      },
      /**
       * @params {naver.maps.ArrayOfCoords | naver.maps.KVOArrayOfCoords | naver.maps.ArrayOfCoordsLiteral} path
       */
      setPath(path) {
        this.polyline.setPath(path);
        return this;
      },
      /**
       * @param options
       * @returns {this}
       */
      setStyles(options) {
        if (arguments[1]) this.polyline.setStyles(options, arguments[1]);
        else this.polyline.setStyles(options);
        return this;
      },

      /**
       * @param visible
       * @returns {this}
       */
      setVisible(visible) {
        this.polyline.setVisible(visible);
        return this;
      },

      /**
       * @param zIndex
       * @returns {this}
       */
      setZIndex(zIndex) {
        this.polyline.setZIndex(zIndex);
        return this;
      },

    },
    mounted() {
      const naver = ((map) => {
        /**
         * {naver.maps.Map} map
         */
        this.map = map;
        this.polyline = new window.naver.maps.Polyline(Object.assign({
          map: map, path: this.path.map(latLng => new window.naver.maps.LatLng(latLng.lat, latLng.lng)), options: this.options
        }));
        ['click', 'dblclick', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'visible_changed', 'zIndex_changed']
          .forEach(name => _.addEvent(this, this.polyline, name));
        this.$emit('load', this);
      });
      if (!window.$naverMapsLoaded) window.$naverMapsCallback.push(naver);
      else naver(window.$naverMapsObject);
    },
    destroyed() {
      this.polyline.setMap(null);
    }
  }
</script>
