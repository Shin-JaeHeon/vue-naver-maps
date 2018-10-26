<template>
  <div id="vue-naver-maps" :style="mapStyle"></div>
</template>

<script>
  export default {
    name: 'Map',
    props: {
      width: Number,
      height: Number,
      mapOptions: {
        type: Object,
        zoom: Number,
        lat: Number,
        lng: Number
      }
    },
    data() {
      return {
        mapStyle: {
          width: `${this.width}px`,
          height: `${this.height}px`,
        }
      }
    },

    mounted() {
      if (this.mapOptions.lat && this.mapOptions.lng) {
        document.getElementById('naver-map-load').onload = () => {
          var map = new naver.maps.Map('vue-naver-maps', {
            center: new naver.maps.LatLng(this.mapOptions.lat, this.mapOptions.lng),
            zoom: this.mapOptions.zoom ? this.mapOptions.zoom : 10,
          });
        };
      } else throw new Error('mapOptions must be included lat and lng.');
    }
  }
</script>

<style scoped>

</style>
