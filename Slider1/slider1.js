function myFunction() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    $("#slider_1").roundSlider({
        circleShape: "half-right",
        sliderType: "min-range",
        radius: w / 9,
        showTooltip: false,
        startAngle: 90,
        handleSize: "+12",
        width: w / 150
    });

    $("#slider_1").css("top", w / 22);
    $("#slider_2").roundSlider({
        circleShape: "half-right",
        sliderType: "min-range",
        radius: w / 7.5,
        showTooltip: false,
        startAngle: 90,
        handleSize: "+12",
        width: w / 150
    });
    $("#slider_2").css("top", w / 42);
    $("#slider_3").roundSlider({
        circleShape: "half-right",
        sliderType: "min-range",
        showTooltip: false,
        radius: w / 6.5,
        startAngle: 90,
        handleSize: "+12",
        width: w / 150
    });
    $("#slider_3").css("top", "5px");
    $("#slider_container").css("width", w / 4);
    $("#slider_container").css("height", w / 4);
    $("#slider_container").css("top", w / 24);
    $("#slider_container").css("left", w / 35);
}
$(document).ready(function () {
    myFunction();
    init();
    setTimeout(function () {
        $("#slider_1").roundSlider({
            value: -1
        });

        $("#slider_2").roundSlider({
            value: -1
        });
        $("#slider_3").roundSlider({
            value: -1
        });

    }, 2500);
    setTimeout(function () {
        $("#slider_1 .rs-handle.rs-move").css("display", "none");
        $("#slider_2 .rs-handle.rs-move").css("display", "none");
        $("#slider_3 .rs-handle.rs-move").css("display", "none");

    }, 3000);


})
function init() {

    $(".green").fadeIn(800).delay(1200).fadeOut(800);
    $(".yellow").delay(500).fadeIn(800).delay(1400).fadeOut(800);
    $(".red").delay(1000).fadeIn(800).delay(1600).fadeOut(800);

    $("#slider_1").slideUp(1);
    $("#slider_1").slideDown(300);
    $("#slider_2").slideUp(1);
    $("#slider_2").slideDown(300);
    $("#slider_3").slideUp(1);
    $("#slider_3").slideDown(300);
    $("#slider_1 .rs-handle.rs-move").css("display", "none");
    $("#slider_2 .rs-handle.rs-move").css("display", "none");
    $("#slider_3 .rs-handle.rs-move").css("display", "none");

    setTimeout(function () {
        $("#slider_1 .rs-handle.rs-move").css("display", "block");
        $("#slider_2 .rs-handle.rs-move").css("display", "block");
        $("#slider_3 .rs-handle.rs-move").css("display", "block");

        $("#slider_1").roundSlider({
            value: 55
        });

        $("#slider_2").roundSlider({
            value: 75
        });
        $("#slider_3").roundSlider({
            value: 90
        });

    }, 500);
    setTimeout(function () {
        $("#slider_1").slideUp(800);
        $("#slider_2").slideUp(800);
        $("#slider_3").slideUp(800);

    }, 3000);

}