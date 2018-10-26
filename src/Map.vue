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
      document.getElementById('naver-map-load').onload = () => {
        var map = new naver.maps.Map('vue-naver-maps', {
          center: new naver.maps.LatLng(this.mapOptions.lat, this.mapOptions.lng),
          zoom: this.mapOptions.zoom
        });
      };

    }
  }
</script>

<style scoped>

</style>
