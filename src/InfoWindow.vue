<template>
  <div ref="content" :style="{display:isOpen?'block':'none'}">
    <slot></slot>
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
      window.$naverMapsCallback.push((map) => {
        /**
         * {naver.maps.Map} map
         */
        this.map = map;
        this.infoWindow = new naver.maps.InfoWindow({content: this.$refs.content.innerHTML});
        this.$emit('load', this);
      });
    }
  }
</script>

<style scoped>

</style>
