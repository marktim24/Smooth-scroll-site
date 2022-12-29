
$(document).ready(function(){

	$('nav ul li a').click(function(){

		let href = $(this).attr('href');
		let offset = $(href).offset().top - $('header').outerHeight();

		$('body, html').animate({
			scrollTop: offset,
			}, 1000);
	});

	$('.to-top').click(function(){

		$('body, html').animate({
			scrollTop: 0,
			}, 1000);
	});

});