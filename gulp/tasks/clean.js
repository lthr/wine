const gulp = require('gulp');
const config = require('../config.js');
const del = require('del');

gulp.task('clean', () => {
  return del([
    `${config.dest}/**/*`,
    `${config.temp}/**/*`
  ]);
});