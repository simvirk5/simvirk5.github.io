$("#rotate")
	.mouseover(function(){
		$(this).toggleClass("rotated");
})
$("#rotate-right").mouseover(function(){
	$(this).toggleClass("rotated");
})
$("#rotate-l").mouseover(function(){
	$(this).toggleClass("rotated");
})
$("#rotate-left2").mouseover(function(){
	$(this).toggleClass("rotated");
})

// $(".about-text").click(function() {
//     $('html,body').animate({
//         scrollTop: $(".about").offset().top},
//         'slow');
// });
 $(document).ready(function(){
    $('.modal').modal();
  });

 $(window).bind('scroll', function() {
     if ($(window).scrollTop() > 100) {
         $('.disappear').hide();
     }
     else {
         $('.disappear').show();
     }
});