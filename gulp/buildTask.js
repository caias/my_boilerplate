/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

    gulp.task('prefix' , () => {
        return gulp
        .src('dist/css/**/*.css')
        .pipe($.autoprefixer(config.browsers))
        .pipe(gulp.dest(config.scss.dest))
    });

    gulp.task('build' , () => {
        $.runSequence( 'clean' , 'html' , 'images' , 'spsass' , 'prefix' )
    });

    gulp.task('local' , () => {
		return gulp
        .src('src/**/*.html')
		.pipe($.replace('../../../dist', '/dist'))
		.pipe($.replace('../../../src', '/src'))
		.pipe(gulp.dest('src'))
    });

};
