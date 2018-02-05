console.log("criando versao dist")

const gulp = require('gulp');
//const uglifycss = require('gulp-uglifycss')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const concat = require('gulp-concat')

//gulp.task('cssmin',function(){
    //gulp
    //.src('src/**/*.css') //pega os arquivos css
    //.pipe(uglifycss()) //mimifica o arquivo css
  //  .pipe(gulp.dest('dist')) //salva o arquivo css na dist
//})

gulp.task('jsmin',function(){
    gulp
    .src('src/**/*.js') 
    .pipe(babel({presets:['es2015']})) //escolhendo qual es vai ser gerado o arquivo
    .pipe(uglify()) 
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('dist')) 
})

