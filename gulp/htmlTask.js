const browserSync = require('browser-sync').create();
const reload     = browserSync.reload;
/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

    gulp.task('html', () => {
        return gulp
        .src(config.html.src)
        .pipe($.plumber({errorHandler: $.notify.onError('Error: <%= error.message %>')}))
        //.pipe($.htmlLint({ htmllintrc : '.htmllintrc.json' }))
        //.pipe($.htmlLint.format())
        .pipe(browserSync.stream());
    });

};
