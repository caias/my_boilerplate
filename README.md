# my_boilerplate

*__개인 프로젝트용 scaffolding__*

이 저장소는 개인 프로젝트를 위한 scaffolding 저장소로서 개선을 위한 의견이나 필요하신분들은 도움이 됬으면 합니다.

- 자동 [sass/scss compile](https://www.npmjs.com/package/gulp-sass) 과 빌드시 자동 [vendor prefixes](https://www.npmjs.com/package/gulp-autoprefixer)생성.
- 이미지 압축. [https://www.npmjs.com/package/gulp-imagemin]
- 이미지 스프라이트 자동 생성. [https://www.npmjs.com/package/gulp.spritesmith]
- Dist폴더 자동 삭제 및 생성.
- 로컬서버 환경 세팅. [https://www.npmjs.com/package/browser-sync]
- sassdoc guide 문서 생성 [https://www.npmjs.com/package/sassdoc]
- 로컬서버 작업중 저장시 자동 새로고침(live reload)

## install & settings

### Dependencies
Node.js / npm / gulp / yarn이 설치 되있지 않다면 설치를 꼭 해주셔야 됩니다.

- [Node.js](http://nodejs.org)
- [Gulp](http://gulpjs.com) `npm install -g gulp`
- [Yarn](https://yarnpkg.com/lang/en/) `npm install -g yarn`

### 시작하기
위에 기본적인 설치가 끝나신 후 터미널 창에 [yarn]이라고 입력하시게 되면 package.json을 토대로 필요한 dependencies들이 설치가되고 설치가 완료됬다면 세팅은 끝입니다.


## 파일 구조
```
gulp-boilerplate/
|—— dist/
|   |—— css/ # 컴파일된 css파일들
|   |   |—— *.css
|   |—— images/
|   |   |—— # image files
|   |   |——  sprite/ # 생성된 이미지 스프라이트 파일
|—— docs/ * sassdoc guide 문서
|   |—— assets/
|   |—— dist/
|   |—— index.html
|   |—— # other docs
|—— src/
|   |—— html/
|   |—— images/
|   |—— js/
|   |—— scss/
|—— gulfile.babel.js
|—— package.json
|—— README.md
|—— test.html
|—— yarn.lock
```
