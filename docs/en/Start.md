# Start
## Installation
* yarn : `yarn add vue-naver-maps`
* npm : `npm install vue-naver-maps`

## Settings
This library requires Naver Maps API KEY issued by Naver.

### Settings by Usage Type
* Government : `useGovAPI: true`
* nCloud does not require settings.


?> Turn off the Server Side Rendering option on Nuxt.js.</span>

### Example
* `main.js`
  ```javascript
  import naver from 'vue-naver-maps';
  Vue.use(naver, {
    clientID: 'Client ID',
    useOpenAPI: false, // Optional
    useGovAPI: false, // Optional
    subModules:'' // subModules, Optionals
  });
  ```
