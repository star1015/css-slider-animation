function myFunction() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    $("#slider_container").css("width", w / 2.8);
    $("#slider_container").css("height", w / 2.8);
    $("#slider_container").css("top", w / 11);
    $("#slider_container").css("left", w / 13);
}
$(document).ready(function () {
    myFunction();
    init();
})
function init() {
    $(".green").fadeIn(800).delay(800).fadeOut(600);
    $(".yellow").delay(500).fadeIn(800).delay(1000).fadeOut(400);
    $(".red").delay(1000).fadeIn(800).delay(1200).fadeOut(200);
}