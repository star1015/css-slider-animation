function myFunction() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    $("#slider_container").css("width", w / 3.3);
    $("#slider_container").css("height", w / 3);
    $("#slider_container").css("top", w / 13);
    $("#slider_container").css("left", w / 13);
}
$(document).ready(function () {
    myFunction();
    init();
   
})
function init() {

    $(".green").fadeIn(800).delay(800).fadeOut(800);
    $(".yellow").delay(300).fadeIn(800).delay(1000).fadeOut(800);
    $(".red").delay(800).fadeIn(800).delay(1000).fadeOut(800);

}