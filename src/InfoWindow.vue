<template>
  <div>
    <slot ref="content"></slot>
  </div>
</template>

<script>
  import {Marker} from 'Marker';

  export default {
    name: 'InfoWindow',
    props: {
      onLoaded: Function,
      marker: Marker,
      isOpen: Boolean,
    },
    watch: {
      isOpen(newValue) {
        if (newValue) this.infoWindow.open();
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
        this.infoWindow = new naver.maps.InfoWindow({content: this.$refs.content});
        if (this.onLoaded) this.onLoaded(this);
      });
    }
  }
</script>

<style scoped>

</style>
