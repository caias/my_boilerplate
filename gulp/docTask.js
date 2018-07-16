/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

    const sassdoc = require('sassdoc');

    gulp.task('doc', ['cleandoc'] , () => {
        const options = {
            dest: './docs'
        }
        return gulp
        .src(config.scss.src)
        .pipe($.vinylBuffer())
        .pipe(sassdoc(options))
        .resume();
    });


    gulp.task('cleandoc', () => {
        return $.del.sync('docs');
    });

};
