var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify-es').default;
var browserSync = require('browser-sync').create();
var clean = require('gulp-clean');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');

sass.compiler = require('node-sass');

gulp.task('default', function () {
    return gulp.src('build/', {read: false})
        .pipe(clean())  
});

gulp.task('clean-css', function(){
    return gulp.src('build/css/*.min.css', {read: false})
    .pipe(clean())
})

gulp.task('clean-js', function(){
    return gulp.src('build/js/*.min.js', {read: false})
    .pipe(clean())
})

gulp.task('sass', function () {
    return gulp.src('assets/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 15 versions', '> 1%', 'ie 8', 'ie 7'],
            cascade: false
        }))
        .pipe(gulp.dest('assets/css/'))
        .pipe(browserSync.stream());
});

gulp.task('css-concat',function() {
    return gulp.src('assets/css/*.css')
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('build/css/'));
});

gulp.task('css-minify', gulp.series('clean-css', function () {
    return gulp.src('build/css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/css/'));
}));

gulp.task('js-concat', function() {
    return gulp.src('assets/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('build/js/'));
});

gulp.task("js-minify", gulp.series('clean-js', function () {
    return gulp.src("build/js/*.js")
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest("build/js/"));
}));

gulp.task('babel', function(){
    return gulp.src('build/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('build/js/'))
});

gulp.task('img-compress', function(){
    return gulp.src('assets/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img/'))
})

gulp.task('serve', function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("assets/scss/*.scss", gulp.series('sass', 'css-concat', 'css-minify')).on('change', browserSync.reload);
    gulp.watch('assets/js/*.js', gulp.series('js-concat', 'js-minify')).on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('build', gulp.series('sass', 'css-concat', 'css-minify', 'babel', 'js-concat', 'js-minify', 'img-compress'))
gulp.task('start', gulp.series('build', 'serve'))

