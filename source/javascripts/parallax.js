function Parallax() {
	scrollPos = $(this).scrollTop();

	$('body').css({
		'background-position' : '0% ' + (-scrollPos/4)+"px"
	});

	$('.content-right').css({
		'background-position' : '0% ' + (-scrollPos/2)+"px"
	});

}
$(document).on("ready",function(){

	// função
	$(window).scroll(function() {
		Parallax();
	});
});

// Accordion

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
