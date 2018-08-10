/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

    gulp.task('compile' , () => {
        $.runSequence( 'clean' , 'sp' , 'html' , 'images' , 'sass' , 'js' )
    });

    gulp.task('local' , () => {
		return gulp
        .src('src/**/*.html')
		.pipe($.replace('../../../dist', '/dist'))
		.pipe($.replace('../../../src', '/src'))
		.pipe(gulp.dest('src'))
    });

};
