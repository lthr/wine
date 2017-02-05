import gulp from 'gulp';
import config from '../config';
import rev from 'gulp-rev';
import revdel from 'gulp-rev-delete-original';
import revReplace from 'gulp-rev-replace';

gulp.task('revision', ['build'], () => {
  return gulp
    .src(config.rev.src)
    .pipe(rev())
    .pipe(revdel())
    .pipe(gulp.dest(config.dest))
    .pipe(rev.manifest())
    .pipe(gulp.dest(config.rev.manifest.dest))
});

gulp.task('revreplace', ['revision'], () => {
  const manifest = gulp.src(config.rev.manifest.src);

  return gulp
    .src(config.rev.index.src)
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(config.rev.index.dest));
});