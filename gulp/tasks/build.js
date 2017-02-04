const gulp = require('gulp');
const config = require('../config');
const concat = require('gulp-concat');
const htmlReplace = require('gulp-html-replace');
const ngAnnotate = require('gulp-ng-annotate');
const pump = require('pump');
const templateCache = require('gulp-angular-templatecache');
const uglify = require('gulp-uglify');

gulp.task('build:app:js', ['build:app:templates'], () => {
  return pump([
    gulp
      .src(config.appJs.src)
      .pipe(concat('app.js'))
      .pipe(ngAnnotate()),
    uglify(),
    gulp.dest(config.appJs.dest)
  ])
});

gulp.task('build:vendor:js', () => {
  return gulp
    .src(config.vendorJs.src)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(config.vendorJs.dest));
});

gulp.task('build:vendor:css', () => {
  return gulp
    .src(config.vendorCss.src)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest(config.vendorCss.dest));
});

gulp.task('build:app:css', () => {
  return gulp
    .src(config.appCss.src)
    .pipe(concat('app.css'))
    .pipe(gulp.dest(config.appCss.dest));
});

gulp.task('build:app:templates', () => {
  return gulp
    .src(config.appTemplates.src)
    .pipe(templateCache({root: './app', module: 'app'}))
    .pipe(gulp.dest(config.appTemplates.dest));
});

gulp.task('build', [
  'build:vendor:js', 'build:vendor:css', 'build:app:css', 'build:app:js', 'build:app:templates'
], () => {
  return gulp
    .src(config.index.src)
    .pipe(htmlReplace({'vendorCss': 'css/vendor.css', 'vendorJs': 'js/vendor.js', 'appCss': 'css/app.css', 'appJs': 'js/app.js'}))
    .pipe(gulp.dest(config.index.dest));
});
