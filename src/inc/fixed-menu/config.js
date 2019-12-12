		$(document).on("scroll", window, function () {
			if (window.screen.width <= 768)		{
				if($(window).scrollTop() > 400) 
				{
					$(".desktop_fixed_menu").fadeIn();
				}
				else
				{
					$(".desktop_fixed_menu").fadeOut();
				}
			}
		});