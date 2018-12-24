# 체인지 로그
# 0.10.7
* naver-polygon의 paths 타입 변경(`Object`→`Array`)

# 0.10.6
* naver-polygon에서 잘못된 props 제거 및 paths를 options 오브젝트 하위에서 루트로 변경

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

#.0.2.6
* getCenter()
* getCenterPosition()

#.0.2.5
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
