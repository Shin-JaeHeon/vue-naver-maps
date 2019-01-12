# 시작하기
> **주의** <br>
> Nuxt.js에서는 SSR(Server Side Rendering) 옵션을 꺼주십시오.
## 설치 방법
* yarn : `yarn add vue-naver-maps`
* npm : `npm install vue-naver-maps`

## 설정
네이버에서 발급된 지도 API키가 필요합니다. <br>
기본적으로 네이버 클라우드를 지원하며, 기존 오픈 API 사용시 useOpenAPI를 `true`로 바꿔야합니다.
### 예시
* `main.js`
  ```javascript
  import naver from 'vue-naver-maps';
  Vue.use(naver, {
    clientID: 'Client ID',
    useOpenAPI: true //OpenAPI 사용
  });
  ```
* `.vue`파일
  ```html
  <naver-maps :width="600" :height="400"></naver-maps>
  ```
이 예제를 실행하면 600x400 사이즈의 지도가 생깁니다.
