var gulp      = require('gulp'),
    plumber   = require('gulp-plumber'),
    babel     = require('gulp-babel'),
    concat    = require('gulp-concat'),
    connect   = require('gulp-connect');




gulp.task('buildJS', function () {
  return gulp.src(['./src/app.js', './src/javascripts/*.js'])
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(babel())
    .pipe(gulp.dest('./example/'))
});

gulp.task('startServer', function () {
  connect.server({
    root: './example/',
    port: 3337
  });
});

gulp.task('watch', function () {
  gulp.watch('./src/javascripts/*.js', ['buildJS']);
})

gulp.task('default', ['buildJS', 'startServer', 'watch']);