const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const browsersync = require('browser-sync').create()


gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({options: {outputStyle: 'compressed'}}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'))
        .pipe(browsersync.stream())
})

gulp.task('serve', function() {
    browsersync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./sass/**/*.scss', gulp.series('sass'))
})


gulp.task('default', gulp.series('sass', 'serve', function(){}))
