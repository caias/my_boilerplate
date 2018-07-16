/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

    gulp.task('sprite', () => {
    	const opts = {
    		spritesmith: (options, sprite, icons) => {
    			//options.imgPath = `/dist/images/sprite/${options.imgName}`;
                options.imgName = `${sprite}.png`;
    			options.cssName = `_${sprite}.scss`;
    			options.cssTemplate = null;
    			options.padding = 10;
    			options.cssVarMap = (sp) => {
    				sp.name = `${sp.name}`;
    			};

    			return options;
    		}
    	};
        const spriteData =
            gulp.src(config.sprite.src)
                .pipe($.spritesmithMulti(opts))
                .on('error', (err) => {
                    console.log(err)
                });

        const imgStream = spriteData.img
            .pipe($.vinylBuffer())
            .pipe($.cache($.imagemin({
                interlaced: true,
                progressive: true,
                optimizationLevel: 7
                })))
            .pipe(gulp.dest(config.sprite.dest));

    	const cssStream = spriteData.css
            .pipe(gulp.dest('src/scss/vendors/sprite/'));

    	return $.mergeStream(imgStream, cssStream);
    });

    gulp.task('cleansp', () => {
        return $.del('src/scss/vendors/sprite');
    });

    gulp.task('spsass' , () => {
        $.runSequence('cleansp' ,'sprite' , 'sass' )
    });

};
