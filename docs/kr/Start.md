# 시작하기
## 설치 방법
* yarn : `yarn add vue-naver-maps`
* npm : `npm install vue-naver-maps`

## 설정
네이버에서 발급된 지도 API키가 필요합니다. <br>
기존 오픈 API 사용시에는 useOpenAPI를 `true`값으로 추가해야합니다. <br><br>
<span class="warn">Nuxt.js에서는 SSR(Server Side Rendering) 옵션을 꺼주십시오.</span>
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
