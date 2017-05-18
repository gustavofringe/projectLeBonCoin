$(document).ready(function () {
    $('.list').hover(function () {
        var x = this.id;
        var links = '#pays_' + x[5];
        $(links).addClass('hover');

    }, function () {
        var x = this.id;
        var links = '#pays_' + x[5];
        $(links).removeClass('hover');
    });
    $('.land').hover(function () {
        var x = this.id;
        var links = '#list_' + x[5];
        $(links).addClass('hover');

    }, function () {
        var x = this.id;
        var links = '#list_' + x[5];
        $(links).removeClass('hover');
    });
});
(function ($) {
    $('#header-icon').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('with--sidebar');
    })
    $('#site-hidden').click(function (e) {
        $('body').removeClass('with--sidebar');
    })

})(jQuery);