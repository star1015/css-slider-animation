var slide_1_red = null,
  slide_1_yellow = null,
  slide_1_green = null;
var slide_1_red_container = null,
  slide_1_yellow_container = null,
  slide_1_green_container = null;

function myFunction() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  $("#slider_container").css("width", (w * 73) / 300);
  $("#slider_container").css("height", (w * 73) / 300);
  $("#slider_container").css("top", w / 19);
  $("#slider_container").css("left", w / 13);
  if (slide_1_red && slide_1_yellow && slide_1_green) {
    slide_1_red.onReSize(w / 150);
    slide_1_yellow.onReSize(w / 150);
    slide_1_green.onReSize(w / 150);
  }
  document.getElementById("green_back").style.left = w / 4 + "px";
  document.getElementById("yellow_back").style.left = w / 4 + "px";
  document.getElementById("red_back").style.left = w / 4 + "px";
  document.getElementById("green_back").style.top = 0 + "px";
  document.getElementById("yellow_back").style.top = 0 + "px";
  document.getElementById("red_back").style.top = 0 + "px";
  document.getElementById("green_back").style.height = "auto";
  document.getElementById("yellow_back").style.height = "auto";
  document.getElementById("red_back").style.height = "auto";
}
$(document).ready(function() {
  myFunction();
  init();
});
function init() {
  $("#green_back")
    .fadeIn(300)
    .delay(2700)
    .fadeOut(300);
  $("#yellow_back")
    .delay(300)
    .fadeIn(300)
    .delay(2700)
    .fadeOut(300);
  $("#red_back")
    .delay(600)
    .fadeIn(400)
    .delay(2600)
    .fadeOut(400);
  var w = document.getElementById("slide_1_container").clientWidth;
  var startingAngle = -(Math.PI / 2);
  slide_1_red = new AnimableArc(
    document.getElementById("slide_1_red"),
    startingAngle,
    w / 40
  );
  slide_1_yellow = new AnimableArc(
    document.getElementById("slide_1_yellow"),
    startingAngle,
    w / 40
  );
  slide_1_green = new AnimableArc(
    document.getElementById("slide_1_green"),
    startingAngle,
    w / 40
  );
  slide_1_red.draw();
  slide_1_yellow.draw();
  slide_1_green.draw();
}
