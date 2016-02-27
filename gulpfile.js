var
	protractor = require("gulp-protractor").protractor,
	gulp = require('gulp');

gulp.task('protractor-run', function (done) {
	return gulp.src(["*.js"])
	.pipe(protractor({
		configFile: "conf.js",
		args: ['--baseUrl', 'https://angularjs.org']
	}))
	.on('error', function(e) { throw e });
});

gulp.task('run-dev', function(done){
	// return 
});

gulp.task('default', ['protractor-run']);

