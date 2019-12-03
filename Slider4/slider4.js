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

    $(".green")
    .fadeIn(300)
    .delay(2700)
    .fadeOut(300);
    $(".yellow")
    .delay(300)
    .fadeIn(300)
    .delay(2700)
    .fadeOut(300);
    $(".red")
    .delay(600)
    .fadeIn(400)
    .delay(2600)
    .fadeOut(400);

}