'use strict';

var gulp = require ('gulp');
var concat = require ('gulp-concat');
var sass = require ('gulp-sass');
var babel = require ('gulp-babel');
var plumber = require ('gulp-plumber');

const paths = {
  scssSource: './styles/**/*.scss',
  scssDest: './dist/styles',
  jsSource: ['./src/app.module.js', './src/**/*.js'],
  jsDest: './dist/js'
};

gulp.task('styles', () => {
  return gulp.src(paths.scssSource)
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('styles.css'))
  .pipe(gulp.dest(paths.scssDest));
});

gulp.task('frontjs', () => {
  return gulp.src(paths.jsSource)
  .pipe(plumber())
  .pipe(babel({
    presets: ["es2015"]
  }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest(paths.jsDest));
});

gulp.task('watch', () =>  {
  gulp.watch(paths.jsSource, ['frontjs']);
  gulp.watch(paths.scssSource, ['styles']);
});

gulp.task('default', ['watch', 'frontjs', 'styles']);
