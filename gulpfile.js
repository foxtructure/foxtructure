var gulp = require('gulp'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    browsersync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    rename = require('gulp-rename');

gulp.task('sass', function(done) {
    return gulp.src('app/scss/**/*.scss')
    .pipe(plumber())
    .pipe(autoprefixer('last 10 versions'))
    .pipe(sass.sync())
    .pipe(csso())
    .pipe(gulp.dest('app/css'))
    .pipe(browsersync.reload({stream: true}));
    done();
});

gulp.task('html', function(done) {
    browsersync.reload();
    done();
});

gulp.task('compress', function(done) {
    pump([
        gulp.src('app/js/*.js'),
        uglify(),
        rename({ suffix: '.min'}),
        gulp.dest('dist')
    ], done );
});

gulp.task('browserSync', function(done) {
    browsersync.init({
        server: {
            baseDir: "app"
        },
        port: 3000
    });
    done();
});

gulp.task('watch', function(done) {
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('app/**/*.html', gulp.series('html'));
    gulp.watch('app/js/*.js', gulp.series('compress'));
    done();
});

gulp.task('default', gulp.series('browserSync', 'sass', 'compress', 'watch'));