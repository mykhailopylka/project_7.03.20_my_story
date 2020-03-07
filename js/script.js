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

/* анімація центрального напису ===========================*/
var elem = document.getElementById("svgContainer");
var animData = {
  container: elem,
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "https://assets1.lottiefiles.com/packages/lf20_bzpzXJ.json"
};
anim = lottie.loadAnimation(animData);

/* зміна фонового кольору при наведенні ===========================*/
function changeItem2() {
  document.getElementById("mychangebody").style.background =
    "rgba(8,45,47,.95)";
}
function rechangeItem2() {
  document.getElementById("mychangebody").style.background =
    "rgba(0,15,14,.95)";
}
function changeItem3() {
  document.getElementById("mychangebody").style.background =
    "rgba(77,85,71, .95)";
}
function rechangeItem3() {
  document.getElementById("mychangebody").style.background =
    "rgba(0,15,14,.95)";
}
function changeItem4() {
  document.getElementById("mychangebody").style.background =
    "rgba(103,97,58, .95)";
}
function rechangeItem4() {
  document.getElementById("mychangebody").style.background =
    "rgba(0,15,14,.95)";
}
