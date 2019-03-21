# Start
## Installation
* yarn : `yarn add vue-naver-maps`
* npm : `npm install vue-naver-maps`

## Settings
This library requires Naver Maps API KEY issued by Naver.


!> The legacy Open API will be closed on April 15.

### Settings by Usage Type
* Legacy Open API : `useOpenAPI: true`
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
* `.vue` file
  ```html
  <template>
    <naver-maps :width="600" :height="400"></naver-maps>
  </template>
  ```
Run this example to create a map in a size 600x400.
