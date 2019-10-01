<template>
</template>

<script>
  import * as _ from '../../lib';

  export default {
    name: 'NaverRectangle',
    props: {
      south: Number,
      north: Number,
      west: Number,
      east: Number,
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
         * {naver.maps.Rectangle} rectangle
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
       * @returns {number}
       */
      getAreaSize() {
        return this.rectangle.getAreaSize();
      },

      /**
       * @returns {naver.maps.Bounds}
       */
      getBounds() {
        return this.rectangle.getBounds();
      },
      /**
       * @returns {boolean}
       */
      getClickable() {
        return this.rectangle.getClickable();
      },

      /**
       * @returns {naver.maps.Bounds}
       */
      getDrawingRect() {
        return this.rectangle.getDrawingRect();
      },

      /**
       * @param key
       * @returns {naver.maps.CircleOptions}
       */
      getOptions(key) {
        return this.rectangle.getOptions(key);
      },
      /**
       * @param key
       * @returns {naver.maps.CircleOptions}
       */
      getStyles(key) {
        return this.rectangle.getStyles(key);
      },

      /**
       * @returns {boolean}
       */
      getVisible() {
        return this.rectangle.getVisible();
      },

      /**
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
       * @param clickable
       * @returns {this}
       */
      setClickable(clickable) {
        this.rectangle.setClickable(clickable);
        return this;
      },

      /**
       * @param options
       * @returns {this}
       */
      setOptions(options) {
        if (arguments[1]) this.rectangle.setOptions(options, arguments[1]);
        else this.rectangle.setOptions(options);
        return this;
      },
      /**
       * @param options
       * @returns {this}
       */
      setStyles(options) {
        if (arguments[1]) this.rectangle.setStyles(options, arguments[1]);
        else this.rectangle.setStyles(options);
        return this;
      },

      /**
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
      const naver = ((map) => {
        /**
         * {naver.maps.Map} map
         */
        this.map = map;
        this.rectangle = new window.naver.maps.Rectangle(Object.assign({
          map: map, bounds:
            new window.naver.maps.LatLngBounds(new window.naver.maps.LatLng(this.south, this.west), new window.naver.maps.LatLng(this.north, this.east))
        }, this.moreOptions));
        ['bounds_changed', 'click', 'clickable_changed', 'dblclick', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'visible_changed', 'zIndex_changed']
          .forEach(name => _.addEvent(this, this.rectangle, name));
        this.$emit('load', this);
      });
      if (!window.$naverMapsLoaded) window.$naverMapsCallback.push(naver);
      else naver(window.$naverMapsObject);
    },
    destroyed() {
      this.rectangle.setMap(null);
    }
  }
</script>
