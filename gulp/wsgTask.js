/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

    gulp.task('clean-hologram', () => {
        return $.del.sync('wsg');
    });

    gulp.task('hologram', ['clean-hologram'] , () => {
        gulp.src('hologram_config.yml')
        .pipe($.hologram());
    });

};
