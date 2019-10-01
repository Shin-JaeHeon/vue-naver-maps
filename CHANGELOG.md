# 체인지 로그
# 0.11.9
* 의존성 업그레이드
* 문서 개선
* 소스 최적화

# 0.11.8
* 의존성 업그레이드
* 주석 최적화

# 0.11.7
* 의존성 업그레이드

# 0.11.6
* 의존성 업그레이드

# 0.11.5
* 구형 API에 대한 지원 중단

# 0.11.4
* Docs 개선
* `babel` 의존성 업그레이드

# 0.11.3
* `naver-maps`에 신규 스타일 지도 레이어 추가/제거 메소드 추가(`addStyleLayer`,`removeStyleLayer`)

# 0.11.2
* `naver-map`컴포넌트의 `updateBy`이 정상적으로 동작하지 않는 오류 수정

# 0.11.1
* styleMap관련 문서 개선

# 0.11.0
* styleMap 추가

# 0.10.25
* `fitBounds`, `panTo`, `panToBounds`가 정상적으로 동작하지 않는 오류 수정

# 0.10.24
* 네이버 공공 클라우드 지원 관련 문서 추가

# 0.10.23
* 네이버 공공 클라우드 지원
 
# 0.10.22

# 0.10.21
* 지도 설정을 변경해도 변경되지 않았던 오류 수정

# 0.10.20
* 컴포넌트가 제거되어도 지도에서는 제거되지 않은 오류 수정

# 0.10.19
* 최초 로딩 이후 오브젝트가 추가 되는 경우 로드되지 않는 오류 수정
* webpack build를 production에서 development로 변경(오류 수집의 효율성을 위해 변경)

# 0.10.18
* Readme 개선
* Support for Readme.md in English

# 0.10.17
* babel7 사용
* vue 2.6.6 사용
* webpack 설정 변경(150KiB 수준에서 22.4KiB)
* CHANGELOG.md 누락 항목 추가

# 0.10.16
* README.md 개선
* 라이선스 파일 추가

# 0.10.15
* docs 개선

# 0.10.14
* docs 개선

# 0.10.13
* README.md 개선
* docs 개선

# 0.10.12
* naver-ground-overlay 오류 수정

# 0.10.11
* naver-polyline의 props 관련 오류 수정
* naver-polygon의 props 관련 동작 수정

# 0.10.10
* naver-polyline에서 paths 관련 업데이트(v0.10.5 ~ v0.10.7, v0.10.9의 업데이트 내용과 유사) 

# 0.10.9
* naver-polygon에서 paths 오류 해결

# 0.10.8
* dist파일 누락 해결

# 0.10.7
* naver-polygon의 paths 타입 변경(`Object`→`Array`)

# 0.10.6
* naver-polygon에서 잘못된 props 제거 
* naver-polygon에서 paths를 options 오브젝트 하위에서 루트로 변경

# 0.10.5
* naver-rectangle에서 LatLngBounds 대신 NSEW 사용
 
# 0.10.4
* 도형 오브젝트 생성시 map을 추가하지 않아 발생한 오류 수정

# 0.10.3
* naver-info-window 데이터 바인딩 오류 수정

# 0.10.2
* naver-info-window 동작 개선
* 이벤트 관련 오류 수정

# 0.10.1
* event binding 관련 오류 수정 및 업데이트

# 0.10.0
* naver-polygon 컴포넌트 추가
* naver-polyline 컴포넌트 추가
* CHANGELOG.md 수정

# 0.9.4
* Build 오류 수정

# 0.9.3
* Readme 수정

# 0.9.2
* Readme 링크 오류 수정

# 0.9.1
* Readme 및 문서 수정

# 0.9.0
* Naver-Rectangle 컴포넌트 추가
* Naver-GroundOverlay 컴포넌트 추가
* 이벤트 오류 수정
* 잘못된 JSDoc 수정

# 0.8.0
* Naver-Ellipse 컴포넌트 추가

# 0.7.8
* 브라우저가 아니면 오류를 반환하도록 변경

# 0.7.7
* window 관련 오류 해결

# 0.7.6
* webpack 사용

# 0.7.5
* Map 로드 이벤트에 컴포넌트 객체가 넘어가지 않은 오류 수정

# 0.7.4
* index.js UTF-8 BOM오류 수정

# 0.7.3
* index.js 오류 수정

# 0.7.2
* naver-maps `ReferenceError: naver is not defined` 오류 수정
 
# 0.7.1
* vue-naver-circle 에러 수정

# 0.7.0
* vue-naver-circle 추가

# 0.6.6
* 컴포넌트에 @load 이벤트 추가
* 로드 오류 방지를 위해 naver가 있으면 render 함수 실행

# 0.6.5
* event 객체 반환되지 않는 오류 수정
* naver-marker 오류 수정
* Readme.md 수정 

# 0.6.4
* Marker에서 naver Event의 Vue Event 지원. 즉, :click 대신 @click을 사용

# 0.6.3
* Readme.md 업데이트 

# 0.6.2
* Readme.md 업데이트 

# 0.6.1
* naver-marker 컴포넌트 추가

# 0.6.0
* naver-info-window 컴포넌트 추가

# 0.5.0
* 컴포넌트 이름을 케밥케이스로 바꿈

# 0.4.0
* Marker.js 업데이트

# 0.3.0
* Marker.js 추가

# 0.2.6
* getCenter()
* getCenterPosition()

# 0.2.5
* Readme 및 jsDoc 업데이트

# 0.2.4
* NCloud 지원 오류 해결

# 0.2.3
* 인코딩 오류 해결

# 0.2.0

# 0.1.0
* setOptions 추가
* map zoomControl 관련 설정 추가

# 0.0.3 
* README.md 및 CHANGELOG.md 추가 
* 오류 문구 변경 및 Lat, Lng 체크

# 0.0.2
개발 시작
* map의 기본 사이즈 설정 추가(width, height)
* submodules 옵션 추가
* map 옵션에 zoom과 중앙위치(Lat,Lng) 추가
