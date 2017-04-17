smoothScroll.init({
		offset: 50
	});

$(function() {

	$(window).on("scroll", function() {
		if( $(window).scrollTop() > $("header").height() ) {
			$("nav").addClass("navbar-fixed-top scrolled");
			$("nav").removeClass("absoulte");
		} else {
			$("nav").removeClass("navbar-fixed-top scrolled");
			$("nav").addClass("absoulte");
		}
	});
	// Auto slider
	(function autoSlider() {
        $(".slider.active").delay(1500).fadeOut(1500,function() {
            $(this).removeClass("active");
            var next = ($(this).index() + 1 ) % 3;
            $(".slider").eq(next).addClass("active").fadeIn(1500);
           	autoSlider();
        });   
    })();﻿
  // Shuffle
  $('#portfolio .shuffel').click(function() {
  	$(this).addClass("selected").siblings().removeClass("selected")
    $($(this).data('shuffle')).parent().fadeIn(500);
    $('.images-placeholder').find('img').not($(this).data('shuffle')).parent().fadeOut(1000);
  });
});
