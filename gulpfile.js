var
	protractor = require("gulp-protractor").protractor,
	gulp = require('gulp');

gulp.task('protractor-run', function (done) {
	return gulp.src(["./src/tests/*.js"])
	.pipe(protractor({
		configFile: "conf.js",
		args: ['--baseUrl', 'https://angularjs.org']
	}))
	.on('error', function(e) { throw e });
});

gulp.task('default', ['protractor-run']);
