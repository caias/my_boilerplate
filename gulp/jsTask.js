const browserSync = require('browser-sync').create();
const reload     = browserSync.reload;
/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

    gulp.task('js', () => {
        return gulp
        .src(config.js.src)
        .pipe(gulp.dest(config.js.dest))
        .pipe(browserSync.stream());
    });

};
