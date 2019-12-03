function myFunction() {
    var w = window.innerWidth;
    var h = window.innerHeight;

    $("#slider_container").css("width", w / 4);
    $("#slider_container").css("height", w / 4);
    $("#slider_container").css("top", w / 24);
    $("#slider_container").css("left", w / 35);
  }
  $(document).ready(function() {
    myFunction();
    init();
  });
  function init() {
    $(".green")
    .fadeIn(300)
    .delay(2500)
    .fadeOut(300);
    $(".yellow")
    .delay(300)
    .fadeIn(300)
    .delay(2500)
    .fadeOut(300);
    $(".red")
    .delay(600)
    .fadeIn(300)
    .delay(2400)
    .fadeOut(300);
  }