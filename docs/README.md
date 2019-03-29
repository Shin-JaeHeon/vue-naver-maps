# vue-naver-maps
[![npm](https://img.shields.io/npm/v/vue-naver-maps.svg?style=flat-square)](https://www.npmjs.com/package/vue-naver-maps)
[![npm](https://img.shields.io/npm/dt/vue-naver-maps.svg?style=flat-square)](https://www.npmjs.com/package/vue-naver-maps)
[![npm](https://img.shields.io/npm/l/vue-naver-maps.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/badge/문서-한국어-blue.svg?style=flat-square)](https://shin-jaeheon.github.io/vue-naver-maps/)
[![npm](https://img.shields.io/badge/Docs-English-green.svg?style=flat-square)](https://shin-jaeheon.github.io/vue-naver-maps/en/)

`vue-naver-maps`는 `Naver Maps JavaScript API v3`을 Vue.js에서 간편하게 이용하게 할 수 있는 라이브러리입니다. 또한, 라이브러리가 로딩되지 않는 상태라도 이용할 수 있도록, 자바스크립트의 기본 타입만으로도 사용할 수 있도록 제작되었습니다.

## 지원 컴포넌트
* `naver-maps` 네이버 지도
* `naver-marker` 마커 컴포넌트
* `naver-info-window` InfoWindow 컴포넌트
* `naver-circle` 도형(원) 컴포넌트
* `naver-ellipse` 도형(타원) 컴포넌트
* `naver-rectangle` 도형(사각형) 컴포넌트
* `naver-ground-overlay` 지상 오버레이 컴포넌트
* `naver-polygon` 폴리곤 컴포넌트
* `naver-polyline` 폴리라인 컴포넌트

## Example
```vue
<template>
  <div>
    <naver-maps
      :height="800"
      :width="800"
      :mapOptions="mapOptions"
      :useStyleMap="true"
      :initLayers="['BACKGROUND', 'BACKGROUND_DETAIL', 'BYCYCLE', 'CADASTRAL', 'CTT', 'HIKING_TRAIL', 'PANORAMA', 'POI_KOREAN', 'TRANSIT']"
      @load="onLoad">
      <naver-info-window
        class="info-window"
        @load="onWindowLoad"
        :isOpen="info"
        :marker="marker">
        <div class="info-window-container">
          <h1>{{hello}}</h1>
        </div>
      </naver-info-window>
      <naver-marker :lat="37" :lng="127" @click="onMarkerClicked" @load="onMarkerLoaded"/>
      <naver-circle :lat="37" :lng="127" :radius="88600"/>
      <naver-rectangle :south="36" :north="38" :west="126" :east="128"/>
      <naver-ellipse :bounds="{south:36,north:38,west:126,east:128}"/>
      <naver-polygon :paths="[[{lat:37,lng:127},{lat:38,lng:127},{lat:38,lng:129},{lat:37,lng:128}]]"/>
      <naver-polyline :path="[{lat:37,lng:127},{lat:38,lng:129}]"/>
      <naver-ground-overlay
        :url="'//logoproject.naver.com/img/img_about.gif'"
        :bounds="{south:36.7,north:36.9,west:126.5,east:127.5}"/>
    </naver-maps>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        info: false,
        marker: null,
        count: 1,
        map: null,
        mapOptions: {
          lat: 37,
          lng: 127,
          zoom: 10,
          zoomControl: true,
          zoomControlOptions: {position: 'TOP_RIGHT'},
          mapTypeControl: true,
        },
      }
    },
    computed: {
      hello() {
        return `Hello, World! × ${this.count}`;
      }
    },
    methods: {
      onLoad(vue) {
      },
      onWindowLoad(that) {
      },
      onMarkerClicked(event) {
        this.info = !this.info;
      },
      onMarkerLoaded(vue) {
        this.marker = vue.marker;
      }
    },
    mounted() {
      setInterval(() => this.count++, 1000);
    }
  }
</script>
<style scoped>
  .info-window-container {
    padding: 10px;
    width: 300px;
    height: 100px;
  }
</style>
```
