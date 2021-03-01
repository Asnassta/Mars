$(function() {
/*Toggle_menu*/
	let show_toggle_menu = $("#show_toggle_menu");
	let toggle_menu = $("#toggle_menu");

	show_toggle_menu.on("click", function(event) {
		event.preventDefault();

		toggle_menu.slideToggle()
	})

	/*Slider*/
	$('.intro_slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	vertical: true
	});
})