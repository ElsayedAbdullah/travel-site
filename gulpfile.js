var gulp = require("gulp");
var plumber = require("gulp-plumber"); //prevent errors form breaking gulp watch
var gutil = require("gulp-util"); //prevent errors form breaking gulp watch
var imagemin = require("gulp-imagemin");
var uglify = require("gulp-uglify");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var sourcemaps = require("gulp-sourcemaps");
var connect = require("gulp-connect");

/******** */
// sprites
// to make all icons with extend svg in one file to increase the speed of the website
require("./gulp/sprites");
/******** */

// copy all html files
gulp.task("copyHtml", function() {
  gulp
    .src("./app/*.html")
    .pipe(gulp.dest("./dist"))
    .pipe(connect.reload());
});

// optimize images
gulp.task("imageMin", function() {
  gulp
    .src("./app/assets/images/**")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/imgs"));
});

//Compile Sass
gulp.task("sass", function() {
  gulp
    .src("./app/assets/css/**/*.scss")
    //prevent errors form breaking gulp watch
    .pipe(
      plumber(function(error) {
        gutil.log(error.message);
        this.emit("end");
      })
    )
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        includePaths: require("node-normalize-scss").includePaths
      })
    )
    .pipe(sass(/*{ outputStyle: "compressed" }*/))
    .pipe(sourcemaps.write("."))

    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
});

// scripts
gulp.task("scripts", function() {
  gulp
    .src("./app/assets/js/*.js")
    .pipe(concat("script.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
});

// livereload
gulp.task("connect", function() {
  connect.server({
    root: "dist",
    livereload: true
  });
});

// watch
gulp.task("watch", function() {
  gulp.watch("./app/*.html", ["copyHtml"]);
  gulp.watch("./app/assets/images/**", ["imageMin"]);
  gulp.watch("./app/assets/css/**/*.scss", ["sass"]);
  gulp.watch("./app/assets/js/*.js", ["scripts"]);
});

gulp.task("default", ["watch", "connect"]);
