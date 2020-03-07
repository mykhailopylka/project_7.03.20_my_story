$(function() {
  $(".slider").slick({
    arrows: false,
    fade: true,
    autoplay: 3000,
    dots: true
  });

  // .addClass - додає функцію, відкриває меню
  $(".header-btn").on("click", function() {
    $(".menu").addClass("active");
  });
  //  .removeClass - дана функція закриває меню
  $(".close-btn").on("click", function() {
    $(".menu").removeClass("active");
  });
});
