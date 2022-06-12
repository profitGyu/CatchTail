# CatTail 배포 주소

[🎉 배포주소](https://catchtail.netlify.app)<br />

## 📅 **개발 기간**

- 2022년 6월 1일 ~ 2022년 6월 5일

<br />

## 🔧 **기술스택**

- Typescript, React, Sass <br />
- axios, dayjs, react-datepicker, victory, react-intersection-observer, react-query, lodash, storejs
<br />

## **💻 설치 및 실행 방법**

1. yarn 설치

```
 npm i yarn
```

2. 레포지토리 클론

```
git clone git@https://github.com/silent10z/CatchTail.git
```

3. dependencies 설치

```
yarn install
```

4. 실행

```
yarn start
```

## 구현 목록

### 보호동물 검색 및 관심 목록

- [x] 검색바 
  - [x] 데이터 피커 적용
  - [x] 드롭다운 적용
  - [x] 필터 검색 적용

- [x] 보호동물 목록
  - [x] useInfiniteQuery쿼리, react-intersection-observer 를 이용한 무한 스크롤 적용
  - [x] 스켈레톤 로딩 적용
  - [x] 에러처리
  - [x] 다른 페이지 이동 후 목록 페이지 이동시 스크롤 값 저장 및 적용
  - [x] 이미지 최적화(react-intersection-observer 이용하여 이미지 창이 보이면 이미지 요청)

- [x] 보호동물 모달
  - [x] Portal 이용하여 모달 구현
  - [x] 관심목록 추가, 제거 기능 추가

- [x] 관심목록
  - [x] 드레그엔 드랍 기능 추가
  - [x] 관심목록 추가, 제거 기능 추가

### 소계 페이지 
- [x] 소계문 작성
- [x] 차트 적용 
- [x] 테이블 적용

### 상세 페이지
- [x] 네비게이트 state 값 적용
- [x] 북마크 기능 적용
- [x] 테이블 기능 적용
- [x] 카카오 맵 기능 적용


