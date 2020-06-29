import gulpHelp from 'gulp-help';
import setupProject from './build/setup-project';
import bundle from './build/bundle';

const gulp = gulpHelp(require('gulp'), { hideDepsMessage: true });

setupProject(gulp, __dirname);
bundle(gulp, __dirname);
