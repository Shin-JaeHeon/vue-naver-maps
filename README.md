# vue-naver-maps
[![npm](https://img.shields.io/npm/v/vue-naver-maps.svg?style=flat-square)](https://www.npmjs.com/package/vue-naver-maps)
[![npm](https://img.shields.io/npm/dt/vue-naver-maps.svg?style=flat-square)](https://www.npmjs.com/package/vue-naver-maps)
[![npm](https://img.shields.io/npm/l/vue-naver-maps.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/badge/문서-한국어-blue.svg?style=flat-square)](https://shin-jaeheon.github.io/vue-naver-maps/)
[![npm](https://img.shields.io/badge/Docs-English-green.svg?style=flat-square)](https://shin-jaeheon.github.io/vue-naver-maps/#/en/)
## 설명
`vue-naver-maps`는 `Naver Maps JavaScript API v3` 을 Vue.js에서 간편하게 이용하게 할 수 있는 라이브러리입니다. <br>
라이브러리가 로딩되지 않는 상태라도 이용할 수 있도록 제작되었습니다.

> 어떤한 케이스에서라도, 정상적으로 동작하지 않는 오류가 발생하는 경우에는 아래의 해결책을 시도해보세요.
> 먼저, onload이벤트로 map 객체를 받으세요.
> 그 다음, map 객체에 직접 접근하여 명령을 실행하시면 가능합니다.   

  
## 문서
***[Docs](https://shin-jaeheon.github.io/vue-naver-maps)*** 에는 vue-naver-maps의 객체 명세서 및 도움말, 예제가 있습니다.

## 라이선스
이 프로젝트의 라이선스는 ***MIT License*** 입니다.

## 안내
새로 추가된 기능이나 정상적으로 동작하지 않는 기능의 경우에는 직접 지도 객체에 접근하여 사용하시기 바랍니다.

> ***주요 변경 사항 안내***
> 
> 1.0 업데이트 이후 `ncpKeyId`가 지원됩니다! 신규 Maps API 사용시에는 `clientID` 대신, `ncpKeyId`를 사용하여 주시기 바랍니다.
> 
> 여전히 `clientID`으로 주입하여 사용할 수 있습니다. 정부 API 관련 옵션은 `clientID` 사용 시에만 적용되오니 참고 부탁드립니다.
 
 

## 업데이트 목록
***[ChangeLog](https://github.com/Shin-JaeHeon/vue-naver-maps/blob/master/CHANGELOG.md)*** 를 참조하세요.



## 오류 발생시
오류 발생시 해결 커밋을 PR 남겨주시면 감사하겠습니다.
