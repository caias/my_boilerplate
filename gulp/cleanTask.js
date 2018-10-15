const del = require('del');
/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

    function clean(){
        return del('dist')
    }
    clean.description = 'Dist 폴더를 삭제합니다.'

	function svgclean(){
        return del(config.svg.clean)
    }
    svgclean.description = 'svg sprite 이미지파일과 관련SCSS 파일을 제거합니다.'

    gulp.task(svgclean);
    gulp.task(clean);

};
