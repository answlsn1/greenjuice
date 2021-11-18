$(document).ready(function () {

    // 모달창
    let modal = $('.modal');
    let modal_cont = $('.modal-cont');
    let modal_close = $('.modal-close');

    modal.fadeIn();

    modal_close.click(function () {
        modal.fadeOut();
    });

    modal.click(function () {
        modal.fadeOut();
    });

    modal_cont.click(function (event) {
        event.stopPropagation();
    });



    // 베스트 상품 메뉴 
    var best_cate_list = $('.best-cate-list>li');
    var best_cate_bg = $('.best-cate-bg');
    var distanceY = 55;
    $.each(best_cate_list, function (index, item) {
        var aTag = $(this).find('>a');
        var nowLi = $(this);
        aTag.click(function (e) {
            e.preventDefault();
            best_cate_bg.css('top', index * distanceY);
            best_cate_list.removeClass('best-cate-focus');
            nowLi.addClass('best-cate-focus');
        });
    });

    // 배너슬라이드
    new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        effect: "fade",
        crossEffect: {
            crossFade: true
        },
        speed: 1000,
    });

    // 펼침 목록 만들기
    $('.f-site-bt').click(function () {
        $('.f-site-list').stop().slideToggle();
        $('.f-site-bt').toggleClass('f-site-bt-active');
    });

});
