// Импортируем формы
//= form/form.js

// Импортируем формы
//= header/header.js

// Импортируем прилипалку
//= sticky/sticky.js

// Импортируем мобильное меню
//= mobile-menu/mobile-menu.js

$(document).ready(function() {
    $('[type="tel"]').mask("+7 (999) 999-99-99");
    $("#scroll-on-top").stick_in_parent({
 		offset_top: 650
    });
    $("#scroll-on-top").click(function(e) {
    	e.preventDefault();
        $('html, body').stop().animate({
        	'scrollTop': 0
         }, 900);
    });
});