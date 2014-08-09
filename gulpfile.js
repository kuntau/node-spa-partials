
var gulp       = require('gulp'),
    livereload = require('gulp-livereload'),
    supervisor = require('gulp-supervisor');

gulp.task('default', function() {
  console.log('from gulp!');
  supervisor('server.js');
  livereload.listen();
  gulp.watch('public/**').on('change', livereload.changed);
    // .on('change', livereload.changed);
    // .on('restart', function() {
    //
    // });
});

gulp.task('watch', function() {
  gulp.watch('public/**').on('change', livereload.changed);
});
