const path = require('path');
const pkg = require('../package.json');

const config = {

    html : {
        src     : [
                    'src/**/*.html',
                    './index.html'
                ],
        dest    : 'dist/'
    },

    js : {
        src     : 'src/js/*.js',
        dest    : 'dist/js'
    },

    scss : {
        src     : 'src/scss/**/*.s+(a|c)ss',
        dest    : 'dist/css'
    },

    image: {
        src     : [
                    'src/images/**/*.+(png|jpg|gif|svg)',
                    '!src/images/sprite/**/*.png'
                  ],
        dest    : 'dist/images'
    },

    sprite:{
        src     : [
                    'src/images/sprite/**/*.png',
                    '!src/images/sprite/retina/*.png'
                ],
        dest    : 'dist/images/sprite'
    },

    retina:{
        src     : 'src/images/sprite/retina/*.png',
        dest    : 'dist/images/sprite'
    },

    lint:{
        scss : 'gulp/scsslint.yml',
        html : 'gulp/.htmllintrc.json'
    },
    sassdoc:{
        src : '.sassdocrc'
    },

    browsers : [
        "last 2 versions",
        "Android 2.3",
        "Android >= 4",
        "Chrome >= 20",
        "Firefox >= 15",
        "Explorer >= 8",
        "iOS >= 6",
        "Opera >= 12",
        "Safari >= 6"
    ],

    version     : pkg.version,
    env         : process.env.NODE_ENV || 'dev'
};

module.exports = config;
