# my_boilerplate

*__개인 프로젝트용 scaffolding by leekangwon__*

이 저장소는 개인 프로젝트를 위한 scaffolding 저장소로서 개선을 위한 의견이나 필요하신분들은 도움이 됬으면 합니다.

- 자동 [sass/scss compile](https://www.npmjs.com/package/gulp-sass) 과 빌드시 자동 [vendor prefixes](https://www.npmjs.com/package/gulp-autoprefixer)생성.
- 이미지 압축. [https://www.npmjs.com/package/gulp-imagemin]
- 이미지 스프라이트 자동 생성. [https://www.npmjs.com/package/gulp.spritesmith]
- Dist폴더 자동 삭제 및 생성.
- 로컬서버 환경 세팅. [https://www.npmjs.com/package/browser-sync]
- sassdoc guide 문서 생성 [https://www.npmjs.com/package/sassdoc]
- Web Style Guide 문서 생성 [http://trulia.github.io/hologram/]
- 로컬서버 작업중 저장시 자동 새로고침(live reload)
- htmllint 및 scsslint 사용

## install & settings

#### Dependencies
Node.js / npm / gulp / yarn이 설치 되있지 않다면 설치를 꼭 해주셔야 됩니다.

- [Node.js](http://nodejs.org)
- [Gulp](http://gulpjs.com) `npm install -g gulp`
- [Yarn](https://yarnpkg.com/lang/en/) `npm install -g yarn`

#### hologram settings
[https://github.com/trulia/hologram]
1. `gem install hologram`
2. `hologram init`

#### scss_lint settings
[https://github.com/brigade/scss-lint]
1. `gem install scss_lint`

##### gem 설치중 permission 에러가 날경우
1. `\curl -L https://get.rvm.io | bash -s stable`
2. `source ~/.rvm/scripts/rvm`
3. `ruby -v` (버전확인)
4. `rmv install 2.3.4` 위에서 확인한 버전으로 설치
5. `gem install scss_lint --user-install`

위에 기본적인 설치가 끝나신 후 터미널 창에 __yarn__ 이라고 입력하시게 되면 package.json을 토대로 필요한 dependencies들이 설치가 되고
설치가 완료됬다면 세팅은 끝입니다.

---
### file tree view
```
my-boilerplate/
|—— dist/ (1)
|   |—— css/
|   |   |—— *.css
|   |—— images/
|   |   |——  image files
|   |   |——  sprite/ # 생성된 이미지 스프라이트 파일
|—— gulp/ (2)
|—— docs/ (3)
|—— src/ (4)
|   |—— html/
|   |—— images/
|   |   |—— sprite/ (5)
|   |—— js/
|   |—— scss/
|   |   |—— vendors/ (6)
|—— gulfile.babel.js
|—— hologram_config.yml
|—— package.json
|—— README.md
|—— test.html
|—— yarn.lock
```

1. __dist__ - compile 이나 build 또는 가공된 파일들이 만들어지는 폴더
2. __gulp__ - gulp 관련 config나 task설정등이 들어있는 폴더
3. __docs__ - sass 가이드 파일이 만들어지는 폴더
4. __src__ - 기본 정적 리소스들이 들어있는 폴더
5. __images/sprtie__ - auto sprite 를 만들 각각의 이미지 파일들이 들어가며, 하위 폴더명이 스프라이트 완성본 파일이름이 됩니다.
6. __scss/vendors__ - 자동으로 이미지 스프라이트가 작성되면 관련 scss파일들이 들어가는 폴더입니다.
---
## 명령어
명령어들은 기본적으로 터미널창에 입력해서 사용합니다.

- [gulp] : 현재 설정되 있는 task 명령어들을 보여주는 명령어
- [gulp doc] : sass파일의 가이드문서를 만들어주는 명령어
- [gulp hologram] : WSG(web style guide)문서를 만들어주는 명령어
- [gulp sass] : sass/scss -> css 컴파일해서 dist폴더에 복사합니다.
- [gulp images] : 이미지 파일들을 압축하여 dist폴더로 복사합니다.
- [gulp sprite] : 자동 이미지 스프라이트 작업을 위한 명령어.(basic sprite)
- [gulp sprite-retina] : 자동 이미지 스프라이트 작업을 위한 명령어.(retina sprite)
- [gulp spsass] : 이미지 스프라이트(basic&retina)후에 sass/scss 컴파일까지 같이 실행되는 명령어
- [gulp clean] : dist 폴더 삭제
- [gulp watch] : 작업중에 변경되는 파일을 감지하여 바뀐파일의 정보를 알려주며 sass/scss파일 수정시 자동 컴파일
- [gulp server] : brower-sync를 사용, 기본토프(port3000)을 통해 로컬서버를 실행하게됩니다.
 기본적으로 watch기능이 같이 사용되며, 파일 수정후 저장시 livereload도 같이 작동됩니다.
- [yarn run build] : 빌드버전을 위한 명령어로 scss컴파일이 compressed로 되며, sourcemap제거 및 vendor-prefix가 붙어서 나오게 됩니다.

---
##### config file

    # markdown기법의 들어가있는 소스파일의 경로 (.css / .scss / .sass / .less / .styl / .js / .erb / .md / .markdown)
    source: ./src/scss

    # WSG가이드 문서가 생설될 폴더 경로 지정
    destination: ./wsg

    # WSG가이드 문서가 참조할 컴파일된 css include 경로
    css_include:
      - css/default.css

    # hologram WSG생성시 쓰여질 테마부분
    documentation_assets: node_modules/hologram-github-theme

    # hologram WSG생성시 쓰여질 템플릿
    code_example_templates: ./code_example_templates

    # hologram WSG생성시 쓰여질 렌더링
    code_example_renderers: ./code_example_renderers

    # WSG가이드 문서에서 복사해올 컴파일된 css 경로
    dependencies:
      - ./dist/css

    index: Web Style Guide

    # navigation level
    nav_level: all

    # 에러시 wsg compile을 멈출지에 대한 여부
    exit_on_warnings: false

---
##### hologram 작성법
    /*doc
    ---
    title: Buttons
    name: buttons
    category: Components
    ---

    css에 해당하는 부연 설명  미주알 고주알 중얼중얼

    ```html_example_table
    <button class="round-btn blue">Button</button>

    <a class="round-btn gray" href="#">Link</a>
    ```
    */
---
##### sassdoc 작성법
    /// block 사이즈
    /// @access public
    /// @group Mixin
    /// @author LKW
    /// @param {Number} $width [null] - 가로사이즈
    /// @param {Number} $height [$width] - 세로사이즈
    /// @example scss - Scss
    ///   .foo {
    ///   	@include size(20px)
    ///   }
    ///   .bar{
    ///   	@include size(20px,18px)
    ///   }
    /// @example css - Compile css
    ///   .foo {
    ///     width:20px;
    ///     height:20px;
    ///   }
    ///   .bar {
    ///     width:20px;
    ///     height:18px;
    ///   }
    ///

---
### 기타 Notice

 1. auto image sprite 의 템플릿을 수정하고 싶을 경우 sprite_templates폴더에 있는 hbs(handlebars)를 취향에 따라 수정해서 쓰시면 됩니다.
    basic image sprite = __mysprite.scss.handlebars__
    retina image sprite = __myretina.scss.handlebars__
    basic image sprite folder = __/src/images/sprtie/img_sprite/**/*__
    retina image sprite folder = __/src/images/sprtie/retina/**/*__
    (retina image sprite를 쓰실경우 1x 이미지와 2x이미지가 같이 세트로 레티나전용 폴더에 있어야만 에러가 안납니다.)
    일반 이미지 스프라이트 파일들은 그냥 폴더경로에 맞게 넣어주시면 되고,
    retina 이미지 인 경우에는 image.png / image@2x.png 처러 파일뒤에 @2x를 붙여서 세트로 넣어야 됩니다.


 2. htmllint / scsslint 등의 파일은 개인취향에 맞게 설정하셔서 쓰시면 됩니다.

---
### error log

    package.json: Name contains illegal characters

-> 어느 버전부터 인지는 정확하게 모르겠지만 package.json의 name뿐만 아니라 description / Author 등에 더이상 대문자와 스페이스가 허용이 안된다.
대문자를 전부 소문자로 바꾸니 에러가 더이상 발생하지 않음.
[https://yarnpkg.com/en/docs/cli/add]

    (node:9269) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): Error: EACCES: permission denied

-> watch Task 나 server Task중 이미지 파일(생성/변환/복사)등이 이루어질때 에러남.
-> node_modules폴더와 yarn.lock 파일을 지우고 새로 설치하면 해결. (정확한 원인은 모르겠음)

    gulp-util@2.2.20: gulp-util is deprecated - replace it, following the guidelines at https://medium.com/gulpjs/gulp-util-ca3b1f9f9ac5

-> gulp-util이 불필요하게 너무 많은 dependencies들을 가지고있어 무겁고 오래된방식의 vinyl-stream 방식을 사용하고 있어
사용자들의 피드백을 받아 gulp-util을 없애고 세분화 시켜서 npm pacakge로 다시 올려놓은듯 하다. 바꾸는데 시간이 좀 걸릴듯 하다.
(아직까지 사용은 되지만. 위와같은 메시지 출력)
[https://medium.com/gulpjs/gulp-util-ca3b1f9f9ac5]
