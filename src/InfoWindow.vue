<template>
  <div style="display:none">
    <div ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Marker from './overlays/NaverMarker.vue';

  export default {
    name: 'InfoWindow',
    props: {
      marker: Marker,
      isOpen: Boolean,
    },
    watch: {
      isOpen(newValue) {
        if (newValue) this.infoWindow.open(this.map, this.marker);
        else this.infoWindow.close();
        this.$emit(newValue ? 'open' : 'close', this);
      }
    },
    data() {
      return {
        infoWindow: null,
        map: null,
      };
    },
    methods: {},
    mounted() {
      const naver = ((map) => {
        /**
         * {naver.maps.Map} map
         */
        this.map = map;
        this.infoWindow = new window.naver.maps.InfoWindow({content: this.$refs.content});
        this.$emit('load', this);
      });
      if (!window.$naverMapsLoaded) window.$naverMapsCallback.push(naver);
      else naver(window.$naverMapsObject);
    },
    destroyed() {
      this.infoWindow.setMap(null);
    }
  }
</script>
