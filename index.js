function backgroundCSS(){
  if ($(window).width() < 992){
    var screenSize= "mobile";
  }else{
    var screenSize= "desktop";
  }

  for(i=1; i<=8; i++){
    var elementClass= document.querySelectorAll(".row .col")[i-1].classList[0];
    $("." + elementClass).css("background", "linear-gradient(rgba(0,0,0, 0.4), rgba(0,0,0, 0.4)), url(./images/" + screenSize + "/image-" + elementClass + ".jpg)");
    $("." + elementClass).css("background-size", "cover");
  }
}

$(window).on('load', backgroundCSS );

$(window).on("resize", backgroundCSS );



$(".navbar-toggler").on("click", function(){
    $(".div2").toggleClass("vanish");
    $(".div1").toggleClass("rotate1");
    $(".div3").toggleClass("rotate2");
    $(".navbar-toggler div").toggleClass("margin");
    $(".navbar-collapse").toggleClass("active");
    $("nav").toggleClass("black-bg");

});
