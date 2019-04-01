$(document).ready(function() {
	$(function() {
		if ($(window).width() < 1200){
			$('<div>', { class: 'mobile-menu__header'}).appendTo('.mobile-menu');

			$('.header .navbar-toggler').clone().appendTo('.mobile-menu__header');

			$('<div>', { class: 'mobile-menu__content'}).appendTo('.mobile-menu');
			$('<ul>', { class: 'mobile-menu__nav'}).appendTo('.mobile-menu__content');
			
			
			$('.header-nav > .header-nav__itm').each(function(index) {
				var navItm = $(this).clone();
				navItm.removeClass('header-nav__itm').addClass('mobile-menu__itm');
				navItm.children().removeClass('header-nav__link header-nav__link_caret').addClass('mobile-menu__link');
				navItm.appendTo('.mobile-menu__nav');
			});

		};

	 	$('.navbar-toggler').click(function(e) {
	 		e.preventDefault();
	 		if ($('.navbar-toggler').hasClass('open')) {
	 			closeMenu();
	    	} else {
	    		openMenu();
	    	};
	 	});

	 	function openMenu() {
			$('body').addClass('body_menu-open');
	 		$('.mobile-menu').addClass('open');
	 		$('.navbar-toggler').addClass('open');
 			createBodyOverlay();
		};

		function closeMenu() {
			$('body').removeClass('body_menu-open');
	 		$('.mobile-menu').removeClass('open');
	 		$('.navbar-toggler').removeClass('open');
	    	removeBodyOverlay();
		};

		function createBodyOverlay() {
			$('body').prepend('<div id="body-overlay" class="body-overlay"></div>');
			setTimeout(function () {
				$('#body-overlay').addClass('body-overlay_done');
			}, 500); 
			$('#body-overlay').click(function(e) {
	 			closeMenu();
	 		});
		};

		function removeBodyOverlay() {
			$('#body-overlay').removeClass('body-overlay_done');
	    	setTimeout(function () {
				$('#body-overlay').remove();
			}, 500); 
		};
	
	});

});