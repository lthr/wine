import gulp from 'gulp';
import config from '../config.js';
import del from 'del';

gulp.task('clean', () => {
  return del([`${config.dest}/**/*`, `${config.temp}/**/*`]);
});