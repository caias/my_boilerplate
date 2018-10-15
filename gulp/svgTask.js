const log         = require('fancy-log'),
      colors      = require('ansi-colors'),
	  isProduction= require('./config/gulp.env'),
      browserSync = require('browser-sync').create(),
 	  reload      = browserSync.reload;
/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

    const onError = (err) => {
		if (err) {
            let exitCode = 1;
            console.log(colors.red('[ERROR]'), 'gulp build task failed', err);
            console.log(colors.red('[FAIL]'), 'gulp build task failed - exiting with code ' + exitCode);
            return process.exit(exitCode);
        }
        //throw new Error(colors.green("info") + '::' + err);
    };

    function svg() {
        return gulp
        .src(config.svg.src)
        .pipe($.plumber({errorHandler: isProduction ? false : true}))
        .pipe($.svgmin())
        .pipe($.svgSprite(config.svgOpt))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
    }
    svg.description = 'SVG file 들로 자동 SVG SPRITE 파일과 SCSS파일을 생성합니다.'

    gulp.task(svg);
    gulp.task('svg-sprite', gulp.series('svgclean' , 'svg' , 'sass'));

};
