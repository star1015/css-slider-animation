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
      .fadeIn(800)
      .delay(1000)
      .fadeOut(600);
    $(".yellow")
      .delay(500)
      .fadeIn(800)
      .delay(1200)
      .fadeOut(600);
    $(".red")
      .delay(1000)
      .fadeIn(800)
      .delay(1000)
      .fadeOut(600);
  }