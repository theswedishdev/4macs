const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

gulp.task('scss', () => {
    gulp.src('src/**.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'));
});

gulp.task('js', () => {
    gulp.src('src/**.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['scss', 'js']);

gulp.task('watch', () => {
    gulp.watch('src/**.scss', ['scss'])
    gulp.watch('src/**.js', ['js'])
});

gulp.task('default', ['build', 'watch']);
