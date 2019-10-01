<template>
</template>

<script>
  import * as _ from '../../lib';

  export default {
    name: 'NaverEllipse',
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
         * {naver.maps.Ellipse} ellipse
         */
        ellipse: null,
        /**
         * {naver.maps.Map} map
         */
        map: null,
      };
    },
    methods: {
      /**
       * @returns {number}
       */
      getAreaSize() {
        return this.ellipse.getAreaSize();
      },

      /**
       * @returns {naver.maps.Bounds}
       */
      getBounds() {
        return this.ellipse.getBounds();
      },
      /**
       * @returns {boolean}
       */
      getClickable() {
        return this.ellipse.getClickable();
      },

      /**
       * @returns {naver.maps.Bounds}
       */
      getDrawingRect() {
        return this.ellipse.getDrawingRect();
      },

      /**
       * @param key
       * @returns {naver.maps.CircleOptions}
       */
      getOptions(key) {
        return this.ellipse.getOptions(key);
      },
      /**
       * @param key
       * @returns {naver.maps.CircleOptions}
       */
      getStyles(key) {
        return this.ellipse.getStyles(key);
      },

      /**
       * @returns {boolean}
       */
      getVisible() {
        return this.ellipse.getVisible();
      },

      /**
       * @returns {number}
       */
      getZIndex() {
        return this.ellipse.getZIndex();
      },
      /**
       * @param bounds {naver.maps.Bounds}
       * @returns {this}
       */
      setBounds(bounds) {
        this.ellipse.setBounds(bounds);
        return this;
      },

      /**
       * @param clickable
       * @returns {this}
       */
      setClickable(clickable) {
        this.ellipse.setClickable(clickable);
        return this;
      },

      /**
       * @param options
       * @returns {this}
       */
      setOptions(options) {
        if (arguments[1]) this.ellipse.setOptions(options, arguments[1]);
        else this.ellipse.setOptions(options);
        return this;
      },
      /**
       * @param options
       * @returns {this}
       */
      setStyles(options) {
        if (arguments[1]) this.ellipse.setStyles(options, arguments[1]);
        else this.ellipse.setStyles(options);
        return this;
      },

      /**
       * @param visible
       * @returns {this}
       */
      setVisible(visible) {
        this.ellipse.setVisible(visible);
        return this;
      },

      /**
       * @param zIndex
       * @returns {this}
       */
      setZIndex(zIndex) {
        this.ellipse.setZIndex(zIndex);
        return this;
      },

    },
    mounted() {
      const naver = ((map) => {
        /**
         * {naver.maps.Map} map
         */
        this.map = map;
        this.ellipse = new window.naver.maps.Ellipse(Object.assign({
          map: map,
          bounds: this.bounds
        }, this.moreOptions));

        ['bounds_changed', 'click', 'clickable_changed', 'dblclick', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'visible_changed', 'zIndex_changed']
          .forEach(name => _.addEvent(this, this.ellipse, name));
        this.$emit('load', this);
      });
      if (!window.$naverMapsLoaded) window.$naverMapsCallback.push(naver);
      else naver(window.$naverMapsObject);
    },
    destroyed() {
      this.ellipse.setMap(null);
    }
  }
</script>
