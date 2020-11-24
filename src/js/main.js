let main = new Swiper('.main__slider', {
    loop: true,
    navigation: {
        nextEl: '.main__slider .swiper-button-next',
        prevEl: '.main__slider .swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

let reviews = new Swiper('.reviews__slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.reviews__slider .swiper-button-next',
        prevEl: '.reviews__slider .swiper-button-prev',
    },
    breakpoints: {
        768: {
          slidesPerView: 3,
        }
      }
});

let find = new Swiper('.find__list', {
    init: false,
    slidesPerView: 2,
    spaceBetween: 30,
    loopFillGroupWithBlank: true,
});

$('input[name="phone"]').mask('+7 (000) 000-00-00');

let changeView = () => {
    if ($(window).width() <= 1023 && $('.hamburger').length === 0) {
        $('.header__main .container').append('<div class="hamburger"><span></span></div>');

        find = new Swiper('.find__list', {
            slidesPerView: 2,
            spaceBetween: 30,
            loopFillGroupWithBlank: true,
        });

        $('.footer').append('<div class="container mobile"></div>');
        $('.footer .mobile').append($('.footer p'));
        $('.footer .mobile').append($('.footer__social'));
    } else if ($(window).width() > 1023  && $('.hamburger').length > 0) {
        $('.hamburger').remove();
        find.destroy();
        $('.footer .container:not(.mobile) .footer__col:last').append($('.footer .container.mobile p'));
        $('.footer .container:not(.mobile) .footer__col:last').append($('.footer .container.mobile .footer__social'));
        $('.footer .container.mobile').remove();
    }
}

if ($(window).width() <= 1023) {
    changeView();
    find.init();
}

$(window).on('resize', changeView);

$('body').on('click', '.hamburger', (e) => {
    $(e.currentTarget).toggleClass('active');
    $('.header__menu').toggleClass('active');
    $('html, body').toggleClass('overflow');
});

$('body').on('click', '.close-menu', () => {
    $('.hamburger').toggleClass('active');
    $('.header__menu').toggleClass('active');
});