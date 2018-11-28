<template>
</template>

<script>
  import * as _ from '../../lib';

  export default {
    name: 'NaverRectangle',
    props: {
      bounds: Object,
      moreOptions: {
        type: Object,
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
         * {naver.maps.Ellipse} rectangle
         */
        rectangle: null,
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
        return this.rectangle.getAreaSize();
      },

      /**
       *
       * @returns {naver.maps.Bounds}
       */
      getBounds() {
        return this.rectangle.getBounds();
      },
      /**
       *
       * @returns {boolean}
       */
      getClickable() {
        return this.rectangle.getClickable();
      },

      /**
       *
       * @returns {naver.maps.Bounds}
       */
      getDrawingRect() {
        return this.rectangle.getDrawingRect();
      },

      /**
       *
       * @param key
       * @returns {naver.maps.CircleOptions}
       */
      getOptions(key) {
        return this.rectangle.getOptions(key);
      },
      /**
       *
       * @param key
       * @returns {naver.maps.CircleOptions}
       */
      getStyles(key) {
        return this.rectangle.getStyles(key);
      },

      /**
       *
       * @returns {boolean}
       */
      getVisible() {
        return this.rectangle.getVisible();
      },

      /**
       *
       * @returns {number}
       */
      getZIndex() {
        return this.rectangle.getZIndex();
      },
      /**
       * @param bounds {naver.maps.Bounds}
       * @returns {this}
       */
      setBounds(bounds) {
        this.rectangle.setBounds(bounds);
        return this;
      },

      /**
       *
       * @param clickable
       * @returns {this}
       */
      setClickable(clickable) {
        this.rectangle.setClickable(clickable);
        return this;
      },

      /**
       *
       * @param options
       * @returns {this}
       */
      setOptions(options) {
        if (arguments[1]) this.rectangle.setOptions(options, arguments[1]);
        else this.rectangle.setOptions(options);
        return this;
      },
      /**
       *
       * @param options
       * @returns {this}
       */
      setStyles(options) {
        if (arguments[1]) this.rectangle.setStyles(options, arguments[1]);
        else this.rectangle.setStyles(options);
        return this;
      },

      /**
       *
       * @param visible
       * @returns {this}
       */
      setVisible(visible) {
        this.rectangle.setVisible(visible);
        return this;
      },

      /**
       * @param zIndex
       * @returns {this}
       */
      setZIndex(zIndex) {
        this.rectangle.setZIndex(zIndex);
        return this;
      },

    },
    mounted() {
      window.$naverMapsCallback.push((map) => {
        /**
         * {naver.maps.Map} map
         */
        this.map = map;
        this.rectangle = new naver.maps.Rectangle(Object.assign({bounds: this.bounds}, this.moreOptions));
        ['mousedown', 'mouseup', 'click', 'dblclick', 'mouseover', 'mouseout', 'mousemove', 'visible_changed', 'zIndex_changed']
          .forEach(name => _.addEvent(this, this.marker, name));
        this.$emit('load', this);
      });
    }
  }
</script>

<style scoped>

</style>
