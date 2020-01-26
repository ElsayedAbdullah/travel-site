var gulp = require("gulp");
var plumber = require("gulp-plumber"); //prevent errors form breaking gulp watch
var gutil = require("gulp-util"); //prevent errors form breaking gulp watch
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");

//Compile Sass
gulp.task("styles", function() {
  return (
    gulp
      .src("./app/assets/styles/**/*.scss")
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
      .pipe(
        sass({
          /*outputStyle: "compressed" */
        })
      )
      .pipe(sourcemaps.write("."))

      .pipe(gulp.dest("./app/temp/styles"))
  );
});
