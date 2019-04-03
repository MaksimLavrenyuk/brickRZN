//ПЛАГИНЫ
function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

preloadImages(["dist/img/preloader.svg"]);

// Импортируем необходимые js-файлы Bootstrap 4

//= ../../../../node_modules/bootstrap/js/dist/util.js
//модальное окно
//= ../../../../node_modules/bootstrap/js/dist/modal.js
//модальное окно
//= ../../../../node_modules/bootstrap/js/dist/modal.js
// коллапс
//= ../../../../node_modules/bootstrap/js/dist/collapse.js

// Импортируем телефонную валидацию
//= ../../../../node_modules/jquery.maskedinput/src/jquery.maskedinput.js

// Импортируем fancybox
//= ../../../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js


// Импортируем другие js-файлы

//файл с самописными скриптами
//= my.js