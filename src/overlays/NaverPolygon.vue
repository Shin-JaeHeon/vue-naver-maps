<template>
</template>

<script>
  import * as _ from '../../lib';

  export default {
    name: 'NaverPolygon',
    props: {
      options: {
        type: Object,
        paths: Object,
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
         * {naver.maps.Polygon} polygon
         */
        polygon: null,
        /**
         * {naver.maps.Map} map
         */
        map: null,
      };
    },
    methods: {
      /**
       *
       * @returns {number}
       */
      getAreaSize() {
        return this.polygon.getAreaSize();
      },

      /**
       *
       * @returns {naver.maps.Bounds}
       */
      getBounds() {
        return this.polygon.getBounds();
      },
      /**
       *
       * @returns {boolean}
       */
      getClickable() {
        return this.polygon.getClickable();
      },

      /**
       *
       * @returns {naver.maps.Bounds}
       */
      getDrawingRect() {
        return this.polygon.getDrawingRect();
      },

      /**
       *
       * @param key
       * @returns {naver.maps.CircleOptions}
       */
      getOptions(key) {
        return this.polygon.getOptions(key);
      },
      /**
       * @returns {naver.maps.ArrayOfCoords | naver.maps.KVOArrayOfCoords}
       */
      getPath() {

      },
      /**
       * @returns {Array<naver.maps.ArrayOfCoords> | naver.maps.KVOArray<naver.maps.KVOArrayOfCoords>}
       */
      getPaths() {

      },
      /**
       *
       * @param key
       * @returns {naver.maps.CircleOptions}
       */
      getStyles(key) {
        return this.polygon.getStyles(key);
      },

      /**
       *
       * @returns {boolean}
       */
      getVisible() {
        return this.polygon.getVisible();
      },

      /**
       *
       * @returns {number}
       */
      getZIndex() {
        return this.polygon.getZIndex();
      },
      /**
       * @param bounds {naver.maps.Bounds}
       * @returns {this}
       */
      setBounds(bounds) {
        this.polygon.setBounds(bounds);
        return this;
      },

      /**
       *
       * @param clickable
       * @returns {this}
       */
      setClickable(clickable) {
        this.polygon.setClickable(clickable);
        return this;
      },

      /**
       *
       * @param options
       * @returns {this}
       */
      setOptions(options) {
        if (arguments[1]) this.polygon.setOptions(options, arguments[1]);
        else this.polygon.setOptions(options);
        return this;
      },
      /**
       * @params {naver.maps.ArrayOfCoords | naver.maps.KVOArrayOfCoords | naver.maps.ArrayOfCoordsLiteral} path
       */
      setPath(path) {
        this.polygon.setPath(path);
      },
      /**
       * @params {Array<naver.maps.ArrayOfCoords | naver.maps.KVOArray<naver.maps.KVOArrayOfCoords> | Array<naver.maps.ArrayOfCoordsLiteral} paths
       */
      setPaths(paths) {
        this.polygon.setPaths(paths);
      },
      /**
       *
       * @param options
       * @returns {this}
       */
      setStyles(options) {
        if (arguments[1]) this.polygon.setStyles(options, arguments[1]);
        else this.polygon.setStyles(options);
        return this;
      },

      /**
       *
       * @param visible
       * @returns {this}
       */
      setVisible(visible) {
        this.polygon.setVisible(visible);
        return this;
      },

      /**
       * @param zIndex
       * @returns {this}
       */
      setZIndex(zIndex) {
        this.polygon.setZIndex(zIndex);
        return this;
      },

    },
    mounted() {
      window.$naverMapsCallback.push((map) => {
        /**
         * {naver.maps.Map} map
         */
        this.map = map;
        this.polygon = new naver.maps.Polygon(this.options);
        ['mousedown', 'mouseup', 'click', 'dblclick', 'mouseover', 'mouseout', 'mousemove', 'visible_changed', 'zIndex_changed', 'clickable_changed']
          .forEach(name => _.addEvent(this, this.marker, name));
        this.$emit('load', this);
      });
    }
  }
</script>

<style scoped>

</style>
