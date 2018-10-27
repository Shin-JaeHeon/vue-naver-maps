<template>
  <div id="vue-naver-maps" :style="mapStyle">
    <!--<slot></slot>-->
  </div>
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
      },
      onLoaded: Function,
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
      /**
       * @param {Object} options
       */
      setOptions(options) {
        if (map) map.setOptions(options);
        else throw new Error('setOptions not be available before loaded.');
      },
      /**
       * @param {string} type NORMAL, TERRAIN, SATELLITE, HYBRID
       */
      setMapType(type) {
        map.setMapTypeId(naver.maps.Position[type]);
      },
      /**
       * @param {number} level must be int
       * @param {boolean} useEffect
       */
      setZoom(level, useEffect = false) {
        this.map.setZoom(level, useEffect);
      },

      /**
       * @param {number} lat
       * @param {number} lng
       */
      setCenter(lat, lng) {
        this.map.setCenter(new naver.maps.LatLng(lat, lng));
      },

      /**
       * @param {number} lat
       * @param {number} lng
       */
      fitBounds(lat, lng) {
        this.map.fitBounds(new naver.maps.LatLng(lat, lng));
      },

      /**
       * @param {number} lat
       * @param {number} lng
       */
      panTo(lat, lng) {
        this.map.panTo(new naver.maps.LatLng(lat, lng));
      },

      /**
       * @param {number} lat
       * @param {number} lng
       */
      panToBounds(lat, lng) {
        this.map.panToBounds(new naver.maps.LatLng(lat, lng));
      },
      /**
       * @param {number} x
       * @param {number} y
       */
      panBy(x, y) {
        this.map.panBy(new naver.maps.Point(x, y));
      },
    },
    mounted() {
      /**
       * Checking to exist Map options which is must be included.
       */
      if (this.mapOptions.lat && this.mapOptions.lng) {
        /**
         * When the script loaded.
         */
        document.getElementById('naver-map-load').onload = () => {
          /**
           * Creating maps.
           */
          this.map = new naver.maps.Map('vue-naver-maps', {
            center: new naver.maps.LatLng(this.mapOptions.lat, this.mapOptions.lng),
            zoom: this.mapOptions.zoom ? this.mapOptions.zoom : 10,
            zoomControl: !!this.mapOptions.zoomControl
          });
          if (this.zoomControlOptions && this.zoomControlOptions.position) this.setOptions({zoomControlOptions: {position: naver.maps.Position[this.zoomControlOptions.position]}});
          /**
           * call callback function
           */
          if (this.onLoaded) this.onLoaded(this);
        };
      } else throw new Error('mapOptions must be included lat and lng.');
    }
  }
</script>

<style scoped>

</style>
