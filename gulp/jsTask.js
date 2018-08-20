const browserSync = require('browser-sync').create();
const reload     = browserSync.reload;
/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

    function js() {
        return gulp
        .src(config.js.src)
        .pipe(gulp.dest(config.js.dest))
        .pipe(browserSync.stream());
    }
    js.description = 'JS파일을 Dist 폴더로 복사합니다.'

    gulp.task(js)

};
