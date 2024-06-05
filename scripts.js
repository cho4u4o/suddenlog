$(document).ready(function () {
  $("#changeColor").click(function () {
    $(".section").css("background", "rgba(255, 255, 255, 0.2)");
    $(".section").css("box-shadow", "none");
    $(".content-box").css("background-color", "rgba(255, 255, 255, 0.2)");
    $(".content-box").css("box-shadow", "none");
    $("header").css("background-color", "rgba(255, 255, 255, 0.2)");
    $("header").css("box-shadow", "none");
    $(".inner-bar").css("background-color", "rgba(255, 255, 255, 0.2)");
    $(".inner-bar").css("box-shadow", "none");
    $("html").css(
      "background",
      "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
    );
  });
});
