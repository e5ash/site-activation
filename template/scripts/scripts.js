jQuery(document).ready(function($) {
	$('.faq__question').click(function() {
		var icon = $(this).find('.icon-arrow-down'),
			answer = $(this).next('.faq__answer');
		icon.toggleClass('rotate');
		answer.slideToggle(300);
	});
	$(window).on('load resize', function() {
		var windowWidth = $(window).width();
		if (windowWidth > 1200) {
			var aside = $('.aside'),
			asideTop = aside.offset().top;
			$(window).scroll(function() {
				var windowScrollY = $(window).scrollTop();
				if (windowScrollY > asideTop) {
					aside.css('top', windowScrollY);
				} else {
					aside.css('top', '3px');
				}
			});
		}
		
	});
	
});