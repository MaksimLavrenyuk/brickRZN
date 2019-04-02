$(document).ready(function() {
    $('.dfield > input, .dfield > select').focus(function(i) {
        $(this).parents('.fields').find('label').css({ 'color': '#971018' });
        var a;
        a = i.target.id;
        //      console.log(a);
        $('.fence_img > [data-click="' + a + '"]').addClass('marked');
    });
    $('.dfield > input, .dfield > select').focusout(function() {
        $(this).parents('.fields').find('label').css({ 'color': 'initial' });
        $('.fence_img > .fence_num').removeClass('marked');
    });
    $('.js-btn_popup').click(function(e) {
        $('#calcModal').modal();
    });

    $('.calcFeedbackForm').submit(function(e) {
        e.preventDefault();
        var submit = $("[type=submit]", this);
        var submitText = $("[type=submit]", this).text();
        var width = $("[type=submit]", this).css("width");
        var url = $(this).attr('action');
        var calcResult = $('[name=calcResult]').serialize();
        var FeedbackData = $(this).serialize();
        $.ajax({
            beforeSend: $.proxy(function() {
                $(this).find('input').prop('disabled', true);
                submit.prop('disabled', true);
                submit.html("");
                submit.css('min-width', '' + width + '');
                $('<img class="preloader" src="dist/img/preloader.svg" alt="preloader">').appendTo(submit);
            }, this),
            url: url,
            type: 'post',
            data: {
                "calcResult": calcResult, // результаты расчета
                "FeedbackData": FeedbackData,
            },
            dataType: 'json',
            success: $.proxy(function(data) {
                //поведение кнопок
                submit.html("");
                submit.css('min-width', 'none');
                submit.html("Отправлено");
            }, this),
            error: function(data) {
                alert('Ошибка при отправке данных на сервер');
            }
        });

    });
});