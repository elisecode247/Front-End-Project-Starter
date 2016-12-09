var gulp = require("gulp");
var sass = require("gulp-sass");
var pug = require("gulp-pug");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var browserSync = require("browser-sync")
  .create();

gulp.task("pug", function () {
  return gulp.src("src/pug/index.pug")
    .pipe(pug({}))
    .pipe(gulp.dest("./dist"))
    .pipe(browserSync.stream());
});

gulp.task("pug:watch", ["pug"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("sass", function () {
  return gulp.src("./src/scss/all.scss")
    .pipe(sass()
      .on("error", sass.logError))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("sass:watch", ["sass"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("browserify", function () {
  browserify({
      entries: "src/js/all.js",
      debug: true
    })
    .bundle()
    .pipe(source('all.js'))
    .pipe(gulp.dest("./dist/js"))
    .pipe(browserSync.stream());
});

gulp.task("browserify:watch", ["browserify"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("default", function () {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "./dist/index.html"
    }
  });
  gulp.watch("./src/scss/*.scss", ["sass:watch"]);
  gulp.watch("./src/pug/*.pug", ["pug:watch"]);
  gulp.watch("./src/js/**/*.js", ["browserify:watch"])
});

