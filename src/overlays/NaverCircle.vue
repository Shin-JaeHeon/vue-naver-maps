<template>
</template>

<script>
  import * as _ from '../../lib';

  export default {
    name: 'NaverCircle',
    props: {
      lat: Number,
      lng: Number,
      radius: Number,
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
        circle: null,
        map: null,
      };
    },
    methods: {
      /**
       *
       * @returns {number}
       */
      getAreaSize() {
        return this.circle.getAreaSize();
      },

      /**
       *
       * @returns {naver.maps.Bounds}
       */
      getBounds() {
        return this.circle.getBounds();
      },

      /**
       *
       * @returns {naver.maps.Coord}
       */
      getCenter() {
        return this.circle.getCenter();
      },

      /**
       *
       * @returns {boolean}
       */
      getClickable() {
        return this.circle.getClickable();
      },

      /**
       *
       * @returns {naver.maps.Bounds}
       */
      getDrawingRect() {
        return this.circle.getDrawingRect();
      },

      /**
       *
       * @param key
       * @returns {naver.maps.CircleOptions}
       */
      getOptions(key) {
        return this.circle.getOptions(key);
      },

      /**
       *
       * @returns {number}
       */
      getRadius() {
        return this.circle.getRadius();
      },

      /**
       *
       * @param key
       * @returns {naver.maps.CircleOptions}
       */
      getStyles(key) {
        return this.circle.getStyles(key);
      },

      /**
       *
       * @returns {boolean}
       */
      getVisible() {
        return this.circle.getVisible();
      },

      /**
       *
       * @returns {number}
       */
      getZIndex() {
        return this.circle.getZIndex();
      },

      /**
       *
       * @param lat
       * @param lng
       * @returns {this}
       */
      setCenter(lat, lng) {
        this.circle.setCenter(new naver.maps.LatLng(lat, lng));
        return this;
      },

      /**
       *
       * @param x
       * @param y
       * @returns {this}
       */
      setCenterPoint(x, y) {
        this.circle.setCenter(new naver.maps.Point(x, y));
        return this;
      },

      /**
       *
       * @param clickable
       * @returns {this}
       */
      setClickable(clickable) {
        this.circle.setClickable(clickable);
        return this;
      },

      /**
       *
       * @param options
       * @returns {this}
       */
      setOptions(options) {
        if (arguments[1]) this.circle.setOptions(options, arguments[1]);
        else this.circle.setOptions(options);
        return this;
      },

      /**
       *
       * @param radius
       * @returns {this}
       */
      setRadius(radius) {
        this.circle.setRadius(radius);
        return this;
      },

      /**
       *
       * @param options
       * @returns {this}
       */
      setStyles(options) {
        if (arguments[1]) this.circle.setStyles(options, arguments[1]);
        else this.circle.setStyles(options);
        return this;
      },

      /**
       *
       * @param visible
       * @returns {this}
       */
      setVisible(visible) {
        this.circle.setVisible(visible);
        return this;
      },

      /**
       *
       * @param zIndex
       * @returns {this}
       */
      setZIndex(zIndex) {
        this.circle.setZIndex(zIndex);
        return this;
      },

    },
    mounted() {
      window.$naverMapsCallback.push((map) => {
        /**
         * {naver.maps.Map} map
         */
        this.map = map;
        this.circle = new naver.maps.Circle(Object.assign({
          center: new naver.maps.LatLng(this.lat, this.lng),
          radius: this.radius
        }, this.moreOptions));

        ['mousedown', 'mouseup', 'click', 'dblclick', 'mouseover', 'mouseout', 'mousemove', 'visible_changed', 'zIndex_changed', 'radius_changed']
          .forEach(name => _.addEvent(this, this.marker, name));
        this.$emit('load', this);
      });
    }
  }
</script>

<style scoped>

</style>
