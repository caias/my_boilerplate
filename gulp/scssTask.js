const log         = require('fancy-log'),
      colors      = require('ansi-colors'),
      minimist    = require('minimist'),
      path        = require('path');
const browserSync = require('browser-sync').create();
const reload      = browserSync.reload;
/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

    const args = minimist(process.argv.slice(2));
    const environment = args.env;

    const scssOptions = {
      outputStyle: environment == 'prod' ? 'compressed' : 'expanded', // nested, expanded, compact, compressed
      indentType: "space",
      indentWidth: 2, // maximum:10
      precision: 6,
      linefeed:'lf' // cr , crlf, lf , lfcr
    };

    const onError = (err) => {
        log(colors.red("ERROR"), err);
        //throw new Error(colors.green("info") + '::' + err);
    };

    gulp.task('sass' , () => {
        return gulp
        .src(config.scss.src)
        .pipe($.sassGlob())
        .pipe($.if(environment !== 'prod' , $.sourcemaps.init() ))
        // .pipe($.if(environment !== 'prod' , $.plumber({errorHandler:false}) ))
        .pipe($.plumber({errorHandler:true}))
        .pipe($.cached('scssLint'))
        .pipe($.scssLint({'config': config.lint.scss}))
        //.pipe($.if(environment === 'prod' , $.scssLint.failReporter() ))
        // .pipe($.sass({outputStyle: 'expanded'}).on('error', onError))
        .pipe($.sass(scssOptions).on('error', onError))
        // .pipe($.rename( (file) => {
        //     if( file.dirname  === 'common' ){
        //     }
        //     else{
        //         const temp = path.dirname(file.dirname);
        //         file.dirname = 'pages';
        //     }
        // }))
        .pipe($.if(environment !== 'prod' , $.sourcemaps.write('./') ))
        .pipe(gulp.dest(config.scss.dest))
        .pipe(browserSync.stream());

    });

};
