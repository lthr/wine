const gulp = require('gulp');
const del = require('del');
const concat = require('gulp-concat');
const htmlreplace = require('gulp-html-replace');

const appJs = [
    './src/**/*.js'
];

const vendorJs = [
  './node_modules/angular/angular.min.js',
  './node_modules/angular-ui-router/release/angular-ui-router.min.js',
  './node_modules/ngstorage/ngStorage.min.js'
];

const vendorCss = [
  './node_modules/bootstrap/dist/css/bootstrap.min.css'
];

gulp.task('clean', () => {
  return del(['./dist/*']);
});

gulp.task('dist:app:js', () => {
  return gulp.src(appJs)
      .pipe(concat('app.js'))
      .pipe(gulp.dest('./dist/js'));
});

gulp.task('dist:vendor:js', () => {
  return gulp.src(vendorJs)
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest('./dist/js'));
});

gulp.task('dist:vendor:css', () => {
  return gulp.src(vendorCss)
      .pipe(concat('vendor.css'))
      .pipe(gulp.dest('./dist/css'));
});

gulp.task('dist:app:css', () => {
  return gulp.src('./src/style/style.css')
      .pipe(concat('app.css'))
      .pipe(gulp.dest('./dist/css'));
});

gulp.task('dist', ['dist:vendor:js', 'dist:vendor:css', 'dist:app:css', 'dist:app:js'], () => {
  return gulp.src('./src/index.html')
      .pipe(htmlreplace({
        'vendorCss': 'css/vendor.css',
        'vendorJs': 'js/vendor.js',
        'appCss': 'css/app.css',
        'appJs': 'js/app.js'
      }))
      .pipe(gulp.dest('./dist'));
});