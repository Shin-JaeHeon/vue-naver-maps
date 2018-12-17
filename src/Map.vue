<template>
  <div id="vue-naver-maps" :style="mapStyle">
    <slot>
    </slot>
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
       * @param {naver.maps.Bounds | naver.maps.BoundsLiteral | naver.maps.ArrayOfCoords | naver.maps.ArrayOfCoordsLiteral} bounds
       * @param {number} margin
       */
      fitBounds(bounds, margin) {
        this.map.fitBounds(new naver.maps.LatLng(bounds, margin));
      },

      /**
       * @param {naver.maps.Coord | naver.maps.CoordLiteral} coord
       * @param {naver.maps.TransitionOptions} transitionOptions
       */
      panTo(coord, transitionOptions) {
        this.map.panTo(new naver.maps.LatLng(lat, lng));
      },

      /**
       * @param {naver.maps.Bounds | naver.maps.BoundsLiteral} bounds
       * @param {naver.maps.TransitionOptions} transitionOptions
       * @param {number} margin
       */
      panToBounds(bounds, transitionOptions, margin) {
        this.map.panToBounds(new naver.maps.LatLng(lat, lng));
      },
      /**
       * @param {number} x
       * @param {number} y
       */
      panBy(x, y) {
        this.map.panBy(new naver.maps.Point(x, y));
      },
      /**
       * the center coordinates of a map
       */
      getCenter() {
        return this.map.getCenterPoint();
      },
      /**
       * The result of converting the map's center coordinates to the world coordinates.
       */
      getCenterPoint() {
        return this.map.getCenterPoint();
      }, $render() {
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
        window.$naverMapsCallback.forEach(v => v(this.map));
        window.$naverMapsCallback = [];
        this.$emit('load', this);
      }
    },
    mounted() {
      /**
       * Checking to exist Map options which is must be included.
       */
      if (this.mapOptions.lat && this.mapOptions.lng) {
        /**
         * When the script already loaded.
         */
        if (window.naver) this.$render();
        else {
          /**
           * When the script loaded.
           */
          document.getElementById('naver-map-load').onload = () => this.$render();
        }
      } else throw new Error('mapOptions must be included lat and lng.');
    }
  }
</script>

<style scoped>

</style>
