var gulp=require('gulp');
var less=require('gulp-less');
var cssmin=require('gulp-minify-css');

gulp.task('testLess',function(){
    gulp.src('less/index.less')
    .pipe(less())
    .pipe(gulp.dest('css'))
})

gulp.task('testWatch',function(){
    gulp.watch('less/**/*.less',[testLess]);
})