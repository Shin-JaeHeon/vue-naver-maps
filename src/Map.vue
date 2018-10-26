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
        lng: Number,
        zoomControl: Boolean,
        zoomControlOptions: {
          type: Object,
          position: String
        }
      }
    },
    data() {
      return {
        mapStyle: {
          width: `${this.width}px`,
          height: `${this.height}px`,
        },
        map: null,
      }
    },
    methods: {
      setOptions(options) {
        if (map) map.setOptions(options);
        else throw new Error('setOptions not be available before loaded.');
      }
    },
    mounted() {
      if (this.mapOptions.lat && this.mapOptions.lng) {
        document.getElementById('naver-map-load').onload = () => {
          this.map = new naver.maps.Map('vue-naver-maps', {
            center: new naver.maps.LatLng(this.mapOptions.lat, this.mapOptions.lng),
            zoom: this.mapOptions.zoom ? this.mapOptions.zoom : 10,
            zoomControl: !!this.mapOptions.zoomControl,
            zoomControlOptions: {
              position: naver.maps.Position[this.zoomControlOptions.position ? this.zoomControlOptions.position : 'CENTER']
            },
          });
        };
      } else throw new Error('mapOptions must be included lat and lng.');
    }
  }
</script>

<style scoped>

</style>
