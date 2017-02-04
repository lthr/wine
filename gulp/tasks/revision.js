const gulp = require('gulp');
const config = require('../config').rev;
const rev = require('gulp-rev');
const revdel = require('gulp-rev-delete-original');
const revReplace = require('gulp-rev-replace');

gulp.task('revision', ['build'], () => {
  return gulp
    .src(config.src)
    .pipe(rev())
    .pipe(revdel())
    .pipe(gulp.dest(config.dest))
    .pipe(rev.manifest())
    .pipe(gulp.dest(config.manifest.dest))
});

gulp.task('revreplace', ['revision'], () => {
  var manifest = gulp.src(config.manifest.src);

  return gulp
    .src(config.index.src)
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(config.index.dest));
});