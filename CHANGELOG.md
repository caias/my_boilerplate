# Changelog
개인 프로젝트 scaffolding 파일들의 변경 로그

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.1] - 2018-08-10
### Added
- hologram 과 scss_lint를 위한 Gemfile 및 Gemfile.lock 파일 추가
- netlify 배포시 js까지 전부 dist로 배포하기 위해 jsTask생성

### Changed
- netlify 테스트를 위한 html task 변경
- prefix Task 삭제후 scss Task 의 환경변수로 병합함

## [1.0.0] - 2018-08-09
### Added
- .editorconfig 파일 추가
- CHANGELOG.md 파일 추가 및 기록 시작
- scsslint 옵션 정리 및 기능 추가
- htmllint 옵션 정리 및 기능 추가
- header 및 footer include된 sample.html 추가
- sticky-footer mixin 및 기본레이아웃 포함 추가

### Changed
- readme.md 수정 및 update
- scss 및 html lint설정에 맞게 모든 파일들 수정
