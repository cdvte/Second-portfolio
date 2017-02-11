$("#about").click(function(){
 $("#about").addClass("active");
 $("#contact").removeClass("active");
 $("#portfolio").removeClass("active");
});
$("#portfolio").click(function(){
 $("#portfolio").addClass("active");
 $("#about").removeClass("active");
 $("#contact").removeClass("active");
});
$("#contact").click(function(){
 $("#contact").addClass("active");
 $("#about").removeClass("active");
 $("#portfolio").removeClass("active");
});
$(".navbar-brand").click(function(){
 $("#contact").removeClass("active");
 $("#about").removeClass("active");
 $("#portfolio").removeClass("active");
});


