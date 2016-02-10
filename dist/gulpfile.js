var
	protractor = require("gulp-protractor").protractor,
	gulp = require('gulp');

var jshint = require('gulp-jshint');



gulp.src(["./src/tests/*.js"])
.pipe(protractor({
	configFile: "conf.js",
	args: ['--baseUrl', 'http://127.0.0.1:8000']
}))
.on('error', function(e) { throw e });

gulp.task('protractor-run', function (done) {
	console.log('terminou de rodar testes');

});

// gulp.task('default', ['protractor-run']);


gulp.task('default', function() {
    return gulp.src('*.js')
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});