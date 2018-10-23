const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

gulp.task('bundle', function() {
  return webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest('./dist/js'));
});
gulp.task('watch', ['bundle'], function() {
  gulp.watch('src/js/**/*.js  ', ['bundle']);
});

gulp.task('default', ['watch']);
