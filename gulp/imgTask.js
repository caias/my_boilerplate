/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

    gulp.task('images', () => {
        return gulp
        .src(config.image.src)
        .pipe($.plumber({errorHandler: $.notify.onError('Error: <%= error.message %>')}))
        .pipe($.cache($.imagemin({
                interlaced: true,
                progressive: true,
                optimizationLevel: 7
              })))
        .pipe(gulp.dest(config.image.dest));
    });

};
