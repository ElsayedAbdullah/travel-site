var gulp = require("gulp"),
  imagemin = require("gulp-imagemin"),
  del = require("del"),
  usemin = require("gulp-usemin"),
  rev = require("gulp-rev"),
  uglify = require("gulp-uglify"),
  cssnano = require("gulp-cssnano"),
  browserSync = require("browser-sync").create();

// preview dist folder
gulp.task("previewDist", function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "docs"
    }
  });
});

// delete dist folder
gulp.task("deleteDistFolder", ["icons"], function() {
  return del("./docs");
});

// minify images
gulp.task("optimizeImages", ["deleteDistFolder"], function() {
  return gulp
    .src([
      "./app/assets/images/**/*",
      "!./app/assets/images/icons",
      "!./app/assets/images/icons/**/*"
    ])
    .pipe(
      imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
      })
    )
    .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task("useminTrigger", ["deleteDistFolder"], function() {
  gulp.start("usemin");
});

// copy files in html
gulp.task("usemin", ["styles", "scripts"], function() {
  return gulp
    .src("./app/index.html")
    .pipe(
      usemin({
        css: [
          function() {
            return rev();
          },
          function() {
            return cssnano();
          }
        ],
        js: [
          function() {
            return rev();
          },
          function() {
            return uglify();
          }
        ]
      })
    )
    .pipe(gulp.dest("./docs"));
});

gulp.task("build", ["deleteDistFolder", "optimizeImages", "useminTrigger"]);
