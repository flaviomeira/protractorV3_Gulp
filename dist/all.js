exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js']
};
var
	protractor = require("gulp-protractor").protractor,
	gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename'); 



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
    console.log(gulp.src('*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist')).pipe);
});
describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('https://angularjs.org');

    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();
    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });
});

