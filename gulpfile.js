var gulp = require('gulp')
var sass = require('gulp-sass')
var cleanCss = require('gulp-clean-css')
var sourcemaps = require('gulp-sourcemaps')

var browserSync = require('browser-snyc').create();

sass.compiler = require('node-sass')

gulp.task('sass', function() {
    return gulp.src("css/app.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(
        cleanCss({
            compatibility: 'ie8'
        })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("."))

})

gulp.task('watch', function () {

    browserSync.init({
        server: {
            baseDir: '.'
        }
    })

    gulp.watch("css/app.scss", ["sass"])
})


gulp.task('default', ["sass", "watch"])
    // we wnat to run "sass css/app.scss app.css --watch"