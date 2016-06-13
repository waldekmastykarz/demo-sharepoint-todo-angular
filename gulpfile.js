'use script';

var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('serve', function(){
  gulp.src('.')
    .pipe(webserver({
      https: true,
      port: '8443',
      host: 'localhost',
      directoryListing: false,
      fallback: 'index.html'
    }));
});
