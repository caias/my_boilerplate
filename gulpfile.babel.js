const gulp = require('gulp');
const $ = require('gulp-load-plugins')({
    pattern: [
        'gulp-*',
        'gulp.*',
        'del',
        'vinyl-buffer',
        'run-sequence',
        'merge-stream'
    ],
    scope: ['devDependencies' , 'dependencies']
});
const gulpConfig = require('./gulp/gulp.config');

require('./gulp/serverTask.js')(gulp, $, gulpConfig);
require('./gulp/htmlTask.js')(gulp, $, gulpConfig);
require('./gulp/imgTask.js')(gulp, $, gulpConfig);
require('./gulp/scssTask.js')(gulp, $, gulpConfig);
require('./gulp/spriteTask.js')(gulp, $, gulpConfig);
require('./gulp/cleanTask.js')(gulp, $, gulpConfig);
require('./gulp/buildTask.js')(gulp, $, gulpConfig);
require('./gulp/docTask.js')(gulp, $, gulpConfig);

gulp.task('default', $.taskListing);
