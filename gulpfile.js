var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('pug', function buildHTML() {
  return gulp.src('src/pug/index.pug')
    .pipe(pug({}))
    .pipe(gulp.dest('./dist'))
});

gulp.task('pug:watch', function () {
  gulp.watch('./src/pug/**/*.pug', ['pug']);
});

gulp.task('sass', function () {
  return gulp.src('./src/scss/all.scss')
    .pipe(sass()
      .on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task('browserify', function () {
  browserify({
      entries: 'src/js/all.js',
      debug: true
    })
    .transform(babelify.configure({
      presets: ["es2015", "react"]
    }))
    .bundle()
    .pipe(source("all.js"))
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('browserify:watch', function () {
  gulp.watch('./src/js/**/*.js', ['browserify'])

});

gulp.task('basic', ['browserify:watch'], function () {
  gulp.watch('./dist')
})

gulp.task('default', ['sass:watch', 'pug:watch', 'browserify:watch']);