	$(function() {
		$.fn.scrollToTop = function() {
			$(this).hide().removeAttr("href");
			if ($(window).scrollTop() >= "400") $(this).fadeIn("slow")
			var scrollDiv = $(this);
			$(window).scroll(function() {
				if ($(window).scrollTop() <= "400") $(scrollDiv).fadeOut("slow")
				else $(scrollDiv).fadeIn("slow")
			});
			$(this).click(function() {
				$("html, body").animate({scrollTop: 0}, "slow")
			})
		}
	});

	$(function() {
		$(".scrollup_button").scrollToTop();
	});