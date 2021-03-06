# React Next SNS

## 서버 구조

> 프론트 엔드 서버 ---(API 요청)---> 백 엔드 서버

### 서버별 역할

- 프론트 서버 : 화면을 그려주는 역할. 프론트 화면에 필요한 파일을 전달한다. (HTML, CSS, JS 등)
- 백엔드 서버 : 데이터 처리 및 DB 저장

### 프론트 서버와 백엔드 서버 분리의 장점

장점 : 요청이 많아져서 스케일링이 필요한 서버만 서버만 늘려준다. 불필요한 메모리나 용량 등을 증가시킬 필요 없음
단점 : 통합 서버인 경우보다 복잡함 (CORS 이슈)

> 프론트 엔드 서버 ---(API 요청)---> 백 엔드 서버

## 리액트 프레임워크

Next.js 사용

### 리액트 프레임워크 종류

- [ ] 클라이언트 사이드 랜더링 : Create React App
- [x] 서버 사이드 랜더링(SRR) : Next.js
  - 검색엔진 최적화(SEO) 및 코드 스플리팅 해결에 적합함

### 프론트 엔드 서버

React, Next
Redux
Redux-saga
Styled Components
Ant Design

### 백 엔드 서버

Express
DB (MySQL)
ORM (시퀄랄이즈)
Passport
multer (S3)
Socket.IO
이미지 압축 (람다)

## 프론트 엔드 기술

### 리덕스

: Redux (state) -> React 의 state 를 안 써도 된다.

사용 목적: 안정성, state 통제 용이

- Store
- Action
- Dispatch
- Reducer

단점: 코드가 장황해진다.

#### 리덕스 상세 설명

1. Store

```js
// root state
{
  // user state
  isLoggedIn : false // 로그인 여부 -> A, C
  user: {}, // 로그인한 사용자 -> B, C

  // post state
  mainPosts: [] // 메인 게시글들 -> C
}
```

2. Action : state를 바꾸는 행동 (예: 로그인 액션)

3. Dispatch : Action을 실행 (예: 로그인 액션 Dispatch)

4. Reducer : Action 의 결과로 state를 어떻게 바꿀지 정의 (예: isLoggedIn state를 true로)

next-redux-wrapper 설치
목적: provider 에 store를 넣어주는 부분을 해준다.

```bash
yarn add next-redux-wrapper
```
