const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');

gulp.task('css', function() {
  gulp.src('src/scss/main.scss')
    .pipe(sass({errLogToConsole: true}))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('dist/css'))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('js', function() {
  gulp.src('src/js/main.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({stream:true, once: true}));
});

gulp.task('browser-sync', function() {
  browserSync.init(null, {
    server: {
      baseDir: "."
    }
  });
});

gulp.task('bs-reload', function() {
  browserSync.reload();
});

gulp.task('default', ['css', 'js', 'browser-sync'], function() {
  gulp.watch("src/scss/*/*.scss", ['css']);
  gulp.watch("src/js/*.js", ['js']);
  gulp.watch("*.html", ['bs-reload']);
});
