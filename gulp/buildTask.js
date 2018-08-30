const log         = require('fancy-log'),
      colors      = require('ansi-colors');
/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

    gulp.task('build', gulp.series('clean' , gulp.parallel('js', 'html' ,'images'), 'spsass' , 'purify' ));

};
