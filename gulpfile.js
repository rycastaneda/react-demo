const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', () => {
    return gulp.src('*.jsx')
        .pipe(babel({
            presets: ['babel-preset-react']
        }))
        .pipe(gulp.dest('dist'));
});


gulp.task('watch', () => {
gulp.watch('*.jsx', [babel]);
});
