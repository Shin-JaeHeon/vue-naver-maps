<template>
  <div  ref="content">
    <slot></slot>
  </div>
</template>

<script>
  import Marker from './Marker.vue';

  export default {
    name: 'InfoWindow',
    props: {
      onLoaded: Function,
      marker: Marker,
      isOpen: Boolean,
    },
    watch: {
      isOpen(newValue) {
        if (newValue) this.infoWindow.open(this.map, this.marker);
        else this.infoWindow.close();
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
        if (this.onLoaded) this.onLoaded(this);
      });
    }
  }
</script>

<style scoped>

</style>
