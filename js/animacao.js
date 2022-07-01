$(window).on('load',function(){
    $(".loading").fadeOut(1500);
    $(".site").fadeIn(1000)
});

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX
    + "px; top: " + e.clientY + "px;";
});

$(".menu-toggle-btn").click(function(){
    $(this).toggleClass("fa-times");
    $(".menu").toggleClass("ativo");
});

var typed = new Typed(".typed",{
    strings : [
        'senvolvedor',
        'signer'
      ],
    smartBackspace: false,
    typeSpeed : 100,
    backSpeed : 80,
    startDelay : 1000,
    backDelay : 1500,
    loop : true,
    loopCount : Infinity,
});