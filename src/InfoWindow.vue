<template>
  <div>
    <slot ref="content"></slot>
  </div>
</template>

<script>
  export default {
    name: "InfoWindow",
    props: {
      onLoaded: Function
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
