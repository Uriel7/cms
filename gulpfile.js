var gulp = require('gulp');

//Import Task
gulp.task('lint', require('./gulp/eslint'));

//Tasks
gulp.task('analyze', ['lint']);
//gulp.task('pre-push', ['lint']);