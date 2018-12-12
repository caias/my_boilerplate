const log						= require('fancy-log'),
			colors				= require('ansi-colors'),
			glob					= require('glob'),
			path					= require('path'),
			del						= require('del'),
			isProduction	= require('./config/gulp.env'),
			browserSync		= require('browser-sync').create(),
			reload				= browserSync.reload;
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

	function cleansvg() {
		return del(config.svg.clean)
	}
	cleansvg.description = 'svg sprite 이미지파일과 관련SCSS 파일을 제거합니다.'

	function cleanSvgGuide() {
		return del('svg-guide')
	}
	cleanSvgGuide.description = 'svg sprite guide관련 폴더와 파일을 제거합니다.'

	gulp.task(cleanSvgGuide);
	gulp.task(cleansvg);

	function buildsvg() {

		function svgOpt(dirPath) {
			return {
				shape: {
					spacing: {
						padding:2,
						box: 'content'
					}
				},
				mode: {
					css: {
						bust: false,
						dest: '.',
						prefix: '%s',
						sprite: 'dist/svg/' + path.basename(dirPath) + '.svg',
						render: {
							scss: {
								template: './helper/svgsprite-scss-tmpl.mustache',
								dest: './src/scss/vendors/svg/_' + path.basename(dirPath) + '.scss',
							}
						},
						example: {
							template: './helper/svg-guide-tmpl.html',
							dest: './svg-guide/' + path.basename(dirPath) + '.html'
						}
					}
				}
			}
		}

		// return glob('src/images/svg/{,!(etc)/**/}', function(err, dirs) { 툭정 폴더 제외시키고 싶은경우 사용
		return glob('src/images/svg/**/', function(err, dirs) {
			dirs.forEach(function(dir) {
				gulp.src(path.join(dir, '*.svg'))
					.pipe($.plumber({
						errorHandler: isProduction ? false : true
					}))
					.pipe($.svgmin())
					.pipe($.svgSprite(svgOpt(dir)))
					.pipe(gulp.dest('.'))
					.pipe(browserSync.stream());
			})
		});

	}
	buildsvg.description = 'SVG file 들로 자동 SVG SPRITE 파일과 SCSS파일을 생성후 컴파일합니다.'

	gulp.task(cleansvg);
	gulp.task(buildsvg);
	gulp.task(cleanSvgGuide);
	gulp.task('svg-sprite', gulp.series('cleansvg', 'cleanSvgGuide', 'buildsvg', 'sass'));

};
