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
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        320: {
            slidesPerView: 1.4,
            spaceBetween: 20,
        }
    }
});

let caseSlider = new Swiper('.case__list', { init: false });
let service = new Swiper('.service__list', { init: false });

$('input[name="phone"]').mask('+7 (000) 000-00-00');

let sameHeight = (elem) => {
    let highestBox = 0;

    $(elem).each(function() {
        if ($(this).height() > highestBox) {
            highestBox = $(this).height(); 
        }
    });  

    $(elem).removeClass('height');
    $(elem).height(highestBox);
}

sameHeight('.service__item');

let changeView = () => {
    if ($(window).width() <= 1023 && $('.hamburger').length === 0) {
        $('.header__main .container').append('<div class="hamburger"><span></span></div>');
        $('.header__menu').prepend('<img src="img/logo.png" alt="">');

        find = new Swiper('.find__list', {
            slidesPerView: 2,
            spaceBetween: 30,
            loopFillGroupWithBlank: true,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                320: {
                    slidesPerView: 1.4,
                    spaceBetween: 20,
                }
            }
        });

        $('.footer').append('<div class="container mobile"></div>');
        $('.footer .mobile').append($('.footer p'));
        $('.footer .mobile').append($('.footer__social'));

        if ($(window).width() <= 767) {
            $('.marketolog').each((el, i) => {
                $(i).find('.marketolog__online').before($(i).find($('.marketolog__statusbar')));
            });

            caseSlider = new Swiper('.case__list', {
                slidesPerView: 1.5,
                spaceBetween: 16,
                loopFillGroupWithBlank: true,
            });

            service = new Swiper('.service__list', {
                slidesPerView: 1.2,
                spaceBetween: 18,
                loopFillGroupWithBlank: true,
            });
        } else {
            $('.marketolog').each((el, i) => {
                $(i).find('.marketolog__info-top').append($(i).find($('.marketolog__statusbar')));
            });

            caseSlider.destroy();
            service.destroy();
        }
    } else if ($(window).width() > 1023  && $('.hamburger').length > 0) {
        $('.hamburger').remove();
        $('.header__menu img').remove();
        find.destroy();
        caseSlider.destroy();
        service.destroy();
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