const log         = require('fancy-log'),
      colors      = require('ansi-colors');
const browserSync = require('browser-sync').create();
const reload     = browserSync.reload;
/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

    gulp.task('server:init',  () => {
        return browserSync.init({
             server: {
                baseDir: "./",
                port: '3000',
                index:'index.html'
            }
        });
    });

    gulp.task('watch' , () => {
        let watcher = {
            scss   : gulp.watch(config.scss.src, ['sass']),
            html   : gulp.watch(config.html.src, ['html']),
            images : gulp.watch(config.image.src, ['images']),
            sprite : gulp.watch(config.sprite.src, ['spsass'])
        };

        let notify = (event) => {
            log('File', colors.yellow(event.path), 'was', colors.magenta(event.type));
        };

        for(let key in watcher) {
            watcher[key].on('change', reload);
            watcher[key].on('change', notify);
        }
    });

    gulp.task('server',function () {
        $.runSequence('server:init','watch');
    });

};
