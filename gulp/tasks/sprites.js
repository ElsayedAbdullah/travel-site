var gulp = require("gulp"),
  svgSprite = require("gulp-svg-sprite"),
  rename = require("gulp-rename"),
  del = require("del");

var config = {
  shape: {
    spacing: {
      padding: 1
    }
  },
  mode: {
    css: {
      sprite: "sprite.svg",
      render: {
        css: {
          template: "./gulp/templates/sprite.css"
        }
      }
    }
  }
};

gulp.task("beginClean", function() {
  return del(["./app/temp/sprite", "./app/assets/images/sprites"]);
});

// create sprite folder
gulp.task("createSprite", ["beginClean"], function() {
  return gulp
    .src("./app/assets/images/icons/**/*.svg")
    .pipe(svgSprite(config))
    .pipe(gulp.dest("./app/temp/sprite/"));
});

// copy sprite graphic svg from temp folder and move to images folder in assets in app
gulp.task("copySpriteGraphic", ["createSprite"], function() {
  return gulp
    .src("./app/temp/sprite/css/**/*.svg")
    .pipe(gulp.dest("./app/assets/images/sprites"));
});

// copy sprite css file and transfer into modules with sprite.scss
gulp.task("copySpriteCSS", ["createSprite"], function() {
  return gulp
    .src("./app/temp/sprite/css/*.css")
    .pipe(rename("_sprite.scss"))
    .pipe(gulp.dest("./app/assets/styles/modules"));
});

gulp.task("endClean", ["copySpriteGraphic", "copySpriteCSS"], function() {
  return del("./app/temp/sprite");
});

gulp.task("icons", [
  "beginClean",
  "createSprite",
  "copySpriteGraphic",
  "copySpriteCSS",
  "endClean"
]);
