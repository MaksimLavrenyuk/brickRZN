$(document).ready(function() {
    $(function() {
        if ($(window).width() < 1200) {
            $('<div>', { class: 'mobile-menu__header' }).appendTo('.mobile-menu');

            $('.header .navbar-toggler').clone().appendTo('.mobile-menu__header');

            $('<div>', { class: 'mobile-menu__content' }).appendTo('.mobile-menu');
            $('<ul>', { class: 'mobile-menu__nav' }).appendTo('.mobile-menu__content');

            $('.navbar-nav .nav-item').each(function(index) {
                var mobileAccordionNavItmText = $(this).find('.nav-link').text();
                if ($(this).hasClass('dropdown')) {

                    var mobileAccordionNavItmContent = $(this).find('.dropdown-menu').html();



                } else {
                    var mobileAccordionNavItmContent = $(this).html();
                    $('<div class="mobile-menu-nav-itm">' +
                        mobileAccordionNavItmContent +
                        '</div>').appendTo('.mobile-menu__nav');

                };

            });
            $('.header-nav > .header-nav__itm').each(function(index) {
                var navItm = $(this);
                var navItmChildren = $(this).children();

                if (navItmChildren.length > 1) {

                    var navItmName = $(this).children().eq(0).text();
                    var navItmSubmenu = navItmChildren.children();
                    var navItmSubmenuItm = '';

                    for (var i = 0, len = navItmSubmenu.length; i < len; i++) {
                        var navItmSubmenuChild = navItmSubmenu.eq(i);
                        if (navItmSubmenuChild.children().hasClass('header-nav__itm_secondary')) {

                        } else {
                            navItmSubmenuItm = navItmSubmenuItm + '<li>' + navItmSubmenuChild.html() + '</li>';
                        }

                    };

                    $('<li class="mobile-menu-nav-itm">' +
                        '<div class="mobile-menu-nav-itm__header" id="mobileNavAccordion' + index + '">' +
                        '<button class="btn" type="button" data-toggle="collapse" data-target="#collapse' + index + '" aria-expanded="true" aria-controls="collapse' + index + '">' +
                        navItmName +
                        '</button>' +
                        '</div>' +
                        '<div id="collapse' + index + '" class="collapse" aria-labelledby="mobileNavAccordion' + index + '">' +
                        '<ul class="mobile-menu-nav-itm__list">' +
                        navItmSubmenuItm +
                        '</ul>' +
                        '</div>' +
                        '</li>').appendTo('.mobile-menu__nav');

                } else {
                    var navItmName = $(this).children().removeClass('header-nav__link').addClass('mobile-menu-nav-itm');
                    var navItmNameLink = navItmName.prop('href');
                    $('<li class="mobile-menu-nav-itm"><a href="'+navItmNameLink+'">' +navItmName.html() +'</a></li>').appendTo('.mobile-menu__nav');
                }


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
            setTimeout(function() {
                $('#body-overlay').addClass('body-overlay_done');
            }, 500);
            $('#body-overlay').click(function(e) {
                closeMenu();
            });
        };

        function removeBodyOverlay() {
            $('#body-overlay').removeClass('body-overlay_done');
            setTimeout(function() {
                $('#body-overlay').remove();
            }, 500);
        };

    });

});