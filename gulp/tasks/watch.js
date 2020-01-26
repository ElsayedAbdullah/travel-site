var gulp = require("gulp");
var browserSync = require("browser-sync").create();

// watch
gulp.task("watch", function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });
  gulp.watch("./app/index.html", function() {
    browserSync.reload();
  });
  gulp.watch("./app/assets/styles/**/*.scss", ["cssInject"]);
  gulp.watch("./app/assets/scripts/**/*.js", ["scriptsRefresh"]);
});

// cssInject
gulp.task("cssInject", ["styles"], function() {
  return gulp.src("./app/temp/styles/style.css").pipe(browserSync.stream());
});

// scriptsRefresh
gulp.task("scriptsRefresh", ["scripts"], function() {
  browserSync.reload();
});

gulp.task("default", ["watch"]);
