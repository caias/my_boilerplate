/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

    gulp.task('clean', () => {
        return $.del.sync('dist');
    });

};
