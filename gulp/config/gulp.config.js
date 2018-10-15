const isProduction= require('./gulp.env');
const config = {

	html : {
		src	 : [
			'src/**/*.html',
			'./index.html'
		],
		dest	: 'dist/'
	},

	js : {
		src	 : 'src/js/*.js',
		dest	: 'dist/js'
	},

	scss : {
		src	 : 'src/scss/**/*.s+(a|c)ss',
		dest	: 'dist/css'
	},

	scssOptions : {
		outputStyle	: isProduction ? 'compressed' : 'expanded', // nested, expanded, compact, compressed
		indentType	: 'space',
		indentWidth	: 2, // maximum:10
		precision	: 6,
		linefeed	:'lf' // cr , crlf, lf , lfcr
	},

	image: {
		src	 : [
			'src/images/**/*.+(png|jpg|gif|svg)',
			'!src/images/sprite/**/*.png'
  				],
		dest	: 'dist/images'
	},

	sprite:{
		src	 : [
			'src/images/sprite/**/*.png',
			'!src/images/sprite/retina/*.png'
		],
		dest	: 'dist/images/sprite'
	},

	svg : {
		src		: 'src/images/svg/*.svg',
		clean	: [
					'dist/svg/svg-sprite.svg',
					'src/scss/vendors'
				]
	},

	retina:{
		src	 : 'src/images/sprite/retina/*.png',
		dest	: 'dist/images/sprite'
	},

	lint:{
		scss : './gulp/config/scsslint.yml',
		html : './gulp/config/.htmllintrc.json'
	},

	browsers : [
		'last 3 versions',
		'Android 2.3',
		'Android >= 4',
		'Chrome >= 20',
		'Firefox >= 15',
		'Explorer >= 8',
		'iOS >= 6',
		'Opera >= 12',
		'Safari >= 6'
	],

	svgOpt : {
		shape :
	   {
		   spacing :
		   {

		   }
	   },
	   mode :
	   {
		   css :
		   {
			   dimensions : false,
			   bust : false,
			   dest : '.',
			   sprite : './dist/svg/svg-sprite.svg',
			   prefix : '%s',
			   render :
			   {
				   scss    :
				   {
				   		template : './sprite_templates/svgsprite-scss-tmpl.mustache',
					   	dest : './src/scss/vendors/_sprites-svg.scss'
				   }
			   }
		   }
		}
	},

	purifyOpt : {
		info:true,
		minify:isProduction ? true : false,
		rejected:true
	}
};

module.exports = config;
