var gulp = require('gulp');

var dir = {
	'tmp': './tmp/',
	'src': './src/',
	'dest': './dest/'
};

gulp.task('copy',['copy_node_modules_to_src']);

gulp.task('copy_node_modules_to_src',function(){
	return gulp.src(['node_modules/jquery/dist/jquery.js'])
	.pipe(gulp.dest(dir.src + 'scripts'));
});

gulp.task('build',function(){

	return gulp.src(dir.src + '*')
	.pipe(gulp.dest(dir.dest));

});