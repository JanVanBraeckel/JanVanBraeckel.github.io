const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const sass = require('gulp-sass');
const typescript = require('gulp-typescript');
const typescriptProject = typescript.createProject('tsconfig.json');

const styles = './src/styles/**/*.scss';
const scripts = './src/scripts/**/*.ts';

gulp.task('css', () => {
  return gulp.src(styles)
    .pipe(sass())
    .pipe(csso())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./build/styles/'));
});

gulp.task('ts', () => {
  return gulp.src(scripts)
    .pipe(typescriptProject())
    .js
    .pipe(gulp.dest('./build/scripts/'));
});

gulp.task('watch', () => {
  gulp.watch(styles, ['css']);
  gulp.watch(scripts, ['ts']);
});