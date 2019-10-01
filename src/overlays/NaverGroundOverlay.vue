<template>
</template>

<script>
  import * as _ from '../../lib';

  export default {
    name: 'NaverGroundOverlay',
    props: {
      url: String,
      bounds: Object,
      clickable: Boolean,
      opacity: Number
    },
    data() {
      return {
        /**
         * {naver.maps.GroundOverlay} groundOverlay
         */
        groundOverlay: null,
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
        return this.groundOverlay.getBounds();
      },
      /**
       * @returns {number}
       */
      getOpacity() {
        return this.groundOverlay.getOpacity();
      },
      /**
       * returns image url of this ground overlay.
       * @returns {string}
       */
      getUrl() {
        return this.groundOverlay.getUrl();
      },
      /**
       * sets the opacity of this ground overlay.
       * @params {number} opacity
       * @returns {this}
       */
      setOpacity(opacity) {
        this.groundOverlay.setOpacity(opacity);
        return this;
      }
    },
    mounted() {
      const naver = ((map) => {
        /**
         * {naver.maps.Map} map
         */
        this.map = map;
        const options = {};
        if (this.clickable) options['clickable'] = this.clickable;
        if (this.opacity) options['opacity'] = this.opacity;
        this.groundOverlay = new window.naver.maps.GroundOverlay(this.url, this.bounds, Object.assign({map: this.map}, options));
        ['click', 'dblclick'].forEach(name => _.addEvent(this, this.groundOverlay, name));
        this.$emit('load', this);
      });
      if (!window.$naverMapsLoaded) window.$naverMapsCallback.push(naver);
      else naver(window.$naverMapsObject);
    },
    destroyed() {
      this.groundOverlay.setMap(null);
    }
  }
</script>
