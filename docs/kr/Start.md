# 시작하기
## 설치 방법
* yarn : `yarn add vue-naver-maps`
* npm : `npm install vue-naver-maps`

## 설정
네이버에서 발급된 지도 API키가 필요합니다.


!> 구형 Open API는 4월 15일부터 지원이 종료됩니다.

### 사용 유형별 API 설정
* 구형 Open API : `useOpenAPI: true`
* 공공 클라우드 : `useGovAPI: true`
* nCloud는 별도의 설정이 필요가 없습니다.


?> Nuxt.js에서는 SSR(Server Side Rendering) 옵션을 꺼주십시오.</span>
### 예시
* `main.js`
  ```javascript
  import naver from 'vue-naver-maps';
  Vue.use(naver, {
    clientID: 'Client ID',
    useOpenAPI: false, //OpenAPI 사용 (선택)
    useGovAPI: false, //공공 클라우드 API 사용 (선택)
    subModules:'' // 서브모듈 (선택)
  });
  ```
* `.vue`파일
  ```html
  <template>
    <naver-maps :width="600" :height="400"></naver-maps>
  </template>
  ```
이 예제를 실행하면 600x400 사이즈의 지도를 생성합니다.
