function Parallax() {
	scrollPos = $(this).scrollTop();

	$('body, .grid.of-schedule').css({
		'background-position' : '0% ' + (-scrollPos/4)+"px"
	});
}
$(function() {

	// função
	$(window).scroll(function() {
		Parallax();
	});

	$('.is-schedule header').click(function(e) {
		// console.log($(this).parent().children().find('.some').css('display', 'block'));
		var state = $(this).parent().find('.is-hidden').css('display')
		var $element = $(this).parent().find('.is-hidden')

		if(state == 'none') {
			$element.css('display', 'block');
		} else {
			$element.css('display', 'none');
		}

	})

	$('.js-toggle-direction').click(function() {
		$(this).find('.icon-image').toggleClass('is-up');
	})
});
