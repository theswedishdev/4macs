const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

gulp.task('scss', () => {
  return gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'));
});

gulp.task('js', () => {
  return gulp.src(['src/**/*.js', '!src/lib/**/*.js'])
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('libs', () => {
  return gulp.src('src/lib/**/*.js')
    .pipe(gulp.dest('dist/lib'));
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.scss', ['scss']);
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('src/lib/**/*.js', ['libs']);
});

gulp.task('build', ['scss', 'js', 'libs']);
gulp.task('default', ['build', 'watch']);
