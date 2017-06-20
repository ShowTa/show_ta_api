import webpack from 'webpack'
import gulp from 'gulp'
import sass from 'gulp-ruby-sass' //Ruby sass
import autoprefixer from 'gulp-autoprefixer' //ベンダープレフィックス
import cmq from 'gulp-combine-media-queries' //メディアクエリの整理
import rename from 'gulp-rename' //ファイルのリネーム
import cssmin from 'gulp-cssmin' //css圧縮
import uglify from 'gulp-uglify' //js圧縮
import plumber from 'gulp-plumber' //エラーでgulpが終了するのを止める

import notify from 'gulp-notify'

// sass compile
gulp.task('styles', function() {
  return sass('./css/**/*.scss', {
    style: 'expanded',
  })
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>')
    }))
    .pipe(autoprefixer({
      browsers: ["last 4 versions", "ie >= 11", "Android >= 4", "iOS >= 8"]
    }))
    .pipe(cmq({
      log: true
    }))
    .pipe(gulp.dest('./www/'))
    .pipe(notify('sass finished'))
});

//watch
gulp.task('watch', function() {
  gulp.watch('./css/**/*.scss', function(event) {
    gulp.run('styles')
  });
});

//Default
gulp.task('default', ['watch'])
