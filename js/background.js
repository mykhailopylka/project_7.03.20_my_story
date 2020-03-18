// 1
var x1 = document.getElementById("main-article__1");
x1.addEventListener("mouseover", overFunction1);
x1.addEventListener("mouseout", outFunction);

function overFunction1() {
  document.getElementById("changebody").style.background = "rgba(20,17,13,.5)";
  document.getElementById("changebody").style.boxShadow = "10px 10px 30px #fff";
}
function outFunction() {
  document.getElementById("changebody").style.background = "rgba(0,0,0,0)";
  document.getElementById("changebody").style.boxShadow = "none";
}
// 2
var x2 = document.getElementById("main-article__2");
x2.addEventListener("mouseover", overFunction2);
x2.addEventListener("mouseout", outFunction);

function overFunction2() {
  document.getElementById("changebody").style.background = "rgba(3,17,12,.5)";
  document.getElementById("changebody").style.boxShadow = "10px 10px 30px #fff";
}
// 3
var x3 = document.getElementById("main-article__3");
x3.addEventListener("mouseover", overFunction_3);
x3.addEventListener("mouseout", outFunction);

function overFunction_3() {
  document.getElementById("changebody").style.background = "rgba(31,36,29,.5)";
  document.getElementById("changebody").style.boxShadow = "10px 10px 30px #fff";
}
// 4
var x4 = document.getElementById("main-article__4");
x4.addEventListener("mouseover", overFunction_4);
x4.addEventListener("mouseout", outFunction);

function overFunction_4() {
  document.getElementById("changebody").style.background = "rgba(3,7,7,.5)";
  document.getElementById("changebody").style.boxShadow = "10px 10px 30px #fff";
}
//5
var x5 = document.getElementById("main-article__5");
x5.addEventListener("mouseover", overFunction_5);
x5.addEventListener("mouseout", outFunction);

function overFunction_5() {
  document.getElementById("changebody").style.background = "rgba(3,7,31,.5)";
  document.getElementById("changebody").style.boxShadow = "10px 10px 30px #fff";
}
