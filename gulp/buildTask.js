const log = require('fancy-log'),
			colors = require('ansi-colors');
/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

	// image sprite or retina sprite 사용하는 경우
	// gulp.task('build', gulp.series('clean', gulp.parallel('js', 'html', 'images'), 'spsass', 'purify'));

	// svg sprite 사용하는 경우
	gulp.task('build', gulp.series('clean', gulp.parallel('js', 'html', 'images'), 'svg-sprite', 'purify'));

};
