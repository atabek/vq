var gulp     = require('gulp'),
watch        = require('gulp-watch'),
browserSync  = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "."
    }
  });

  watch('./index.html', function() {
    browserSync.reload();
  });

  watch('./css/**/*.css', function() {
    gulp.start('cssInject');
  });

  watch('./js/**/*.js', function() {
    gulp.start('jsInject');
  });

});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./css/styles.css')
    .pipe(browserSync.stream());
});

gulp.task('jsInject', function() {
  return gulp.src('./js/main.js')
    .pipe(browserSync.stream());
});
