<!-- prettier-ignore -->
# Counseling app admin

해당 깃헙은 상담 어플의 관리자에 해당합니다.

### Tech

This admin uses a number of open source projects to work properly:

- [Vue] - 프로그레시브 JavaScript 프레임워크
- [CompositionAPI] - a set of additive, function-based APIs that allow flexible composition of component logic
- [Bootstrap] - great UI boilerplate for modern web apps
- [vue-hooks] - Using @vue/composition-api to implement useful vue hooks
- [knex] - SHOUT OUT TO KNEX!!!
- [jQuery] - duh
- [dotenv] - duh
- [moment] - duh
- [mysql2] - duh

## Database

<span style="color:#aaaaaa">&nbsp;&nbsp;&nbsp;&nbsp;Nondisclosure</span>

## 2. Todo list

### 데이터 베이스

- [x] DB 생성
- [x] knex 기본설정

- 마이그레이션 파일생성

  - [x] 1뎁스 DB 생성
  - [ ] 2뎁스 DB 생성
  - [ ] 3뎁스 DB 생성
  - [ ] 4뎁스 DB 생성

- 시드 파일생성
  - [x] 1뎁스 시드 생성
  - [ ] 2뎁스 시드 생성
  - [ ] 3뎁스 시드 생성
  - [ ] 4뎁스 시드 생성

### SERVER

- [ ] Node 서버 생성

### Login

- [x] 로그인 페이지 생성

* [x] 로그인 기능 연동 <span style="background: #999999; color:white">&nbsp; POST auth/login &nbsp; </span>

  - 프론트
    - [ ] 로그인 여부 확인후 값 전달
    - [ ] 유효성 체크
    - [ ] 메인 페이지로 이동
  - 백앤드
    - [ ] router 생성
    - [ ] 유효성 체크
    - [ ] DB 연동
