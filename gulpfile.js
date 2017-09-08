const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const clean = require('gulp-clean');

gulp.task('scss', () => {
  return gulp.src('src/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', () => {
  return gulp.src('src/js/**/*.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('libs', () => {
  return gulp.src('src/lib/**/*.js')
    .pipe(gulp.dest('dist/js/lib'));
});

gulp.task('clean', () => {
  return gulp.src('dist', { read: false })
    .pipe(clean({ force: true }));
});

gulp.task('watch', () => {
  gulp.watch('src/css/**/*.scss', ['scss']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/lib/**/*.js', ['libs']);
});

gulp.task('build', ['scss', 'js', 'libs']);
gulp.task('default', ['build', 'watch']);
