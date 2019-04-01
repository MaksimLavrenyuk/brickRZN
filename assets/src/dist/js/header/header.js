$(document).ready(function() {
    var HeaderElem = document.getElementById('header');
    var HeaderBottom = document.getElementById('header__bottom');
    // сохраняем положение элементов относительно вверха,
    var HeaderTopFixed = HeaderBottom.getBoundingClientRect().top + window.pageYOffset;
    
    window.onscroll = function() {
        if (HeaderElem.classList.contains('header_fixed') && window.pageYOffset <  HeaderTopFixed) {
            HeaderElem.classList.remove('header_fixed');
        } else if (window.pageYOffset >  HeaderTopFixed) {
            HeaderElem.classList.add('header_fixed');
        };
    };
});