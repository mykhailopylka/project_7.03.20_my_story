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

/* зміна фонового кольору при наведенні 
my_changebody - id в body ідентифікатор який саме виконує дію скрипта по зміні фону
changeItem1 - ідентифікатор функції, яка передається через index.html
===========================*/

function changeItem() {
  document.getElementById("changebody").style.background =
    "url(../img/firs_layer.png)";
}
// function rechangeItem() {
//   document.getElementById("my_changebody").style.background =
//     "url(../img/firs_layer.png)";
// }

// function changeItem1() {
//   document.getElementById("changebody").style.background =
//     "url(../img/firs_layer__1.png)";
// }

// var x = document.getElementById("main-article__1");
// x.addEventListener("mouseover", myFunction);
// x.addEventListener("mouseout", myThirdFunction);

// function myFunction() {
//   document.getElementById("changebody").style.background =
//     "url(../img/firs_layer__1.png)";
// }

// function myThirdFunction() {
//   document.getElementById("changebody").style.background =
//     "url(../img/firs_layer.png)";
// }
// function rechangeItem1() {
//   document.getElementById("my_changebody").style.background =
//     "url(../img/firs_layer.png)";
//   setInterval(rechangeItem2, 500);
// }

// function changeItem2() {
//   document.getElementById("changebody").style.background =
//     "url(../img/firs_layer__2.png)";
// }
// function rechangeItem2() {
//   document.getElementById("changebody").style.background =
//     "url(../img/firs_layer__2.png)";
// }

// function changeItem3() {
//   document.getElementById("changebody").style.background =
//     "url(../img/firs_layer__3.png)";
// }
// function changeItem4() {
//   document.getElementById("changebody").style.background =
//     "url(../img/firs_layer__4.png)";
// }
// function changeItem5() {
//   document.getElementById("changebody").style.background =
//     "url(../img/firs_layer__5.png)";
// }
// function changeItem6() {
//   document.getElementById("changebody").style.background =
//     "url(../img/firs_layer__6.png))";
// }
