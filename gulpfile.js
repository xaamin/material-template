var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var paths = {
	src: 'app/',
	dest: 'dist/',
	js: 'app/js/**/*.js'
}

// Watch for file changes
gulp.task('watch', function() {
	gulp.watch(paths.js, ['scripts']);
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(paths.js)
      .pipe(plugins.concat('app.js'))
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.dest + 'js'));
});

// Set default task
gulp.task('default', ['scripts']);