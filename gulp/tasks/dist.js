const gulp = require('gulp');
const config = require('../config').dist;
const concat = require('gulp-concat');
const htmlReplace = require('gulp-html-replace');
const templateCache = require('gulp-angular-templatecache');

gulp.task('dist:app:js', ['dist:templates'], () => {
  return gulp.src(config.src.appJs)
      .pipe(concat('app.js'))
      .pipe(gulp.dest(config.dest));
});

gulp.task('dist:vendor:js', () => {
  return gulp.src(config.src.vendorJs)
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest(config.dest));
});

gulp.task('dist:vendor:css', () => {
  return gulp.src(config.src.vendorCss)
      .pipe(concat('vendor.css'))
      .pipe(gulp.dest(config.dest));
});

gulp.task('dist:app:css', () => {
  return gulp.src(config.src.appCss)
      .pipe(concat('app.css'))
      .pipe(gulp.dest(config.dest));
});

gulp.task('dist', [
  'dist:vendor:js',
  'dist:vendor:css',
  'dist:app:css',
  'dist:app:js'
], () => {
  return gulp.src(config.src.index)
      .pipe(htmlReplace({
        'vendorCss': 'vendor.css',
        'vendorJs': 'vendor.js',
        'appCss': 'app.css',
        'appJs': 'app.js'
      }))
      .pipe(gulp.dest(config.dest));
});

gulp.task('dist:templates', function () {
  return gulp.src(config.src.templates)
      .pipe(templateCache({
        root: './app',
        module: 'app'
      }))
      .pipe(gulp.dest(config.temp));
});