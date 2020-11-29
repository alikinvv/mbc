let main = new Swiper('.main__slider', {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.main__slider .swiper-button-next',
        prevEl: '.main__slider .swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

$('body').on('mouseover', '.main', () => {
    main.autoplay.stop();
});

$('body').on('mouseleave', '.main', () => {
    main.autoplay.start();
});

let reviews = new Swiper('.reviews__slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.reviews__slider .swiper-button-next',
        prevEl: '.reviews__slider .swiper-button-prev',
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
        },
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
        375: {
            slidesPerView: 1.4,
            spaceBetween: 20,
        }
    }
});

let docs = new Swiper('.docs-slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.docs.swiper-button-next',
        prevEl: '.docs.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        320: {
            slidesPerView: 1.4,
            spaceBetween: 20,
        }
    }
});

let photo = new Swiper('.photo-slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.photo.swiper-button-next',
        prevEl: '.photo.swiper-button-prev',
    },
    breakpoints: {
        767: {
            slidesPerView: 1.4,
            spaceBetween: 20,
        }
    }
});

let article = new Swiper('.article-slider', {
    slidesPerView: 2,
    spaceBetween: 30,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.article.swiper-button-next',
        prevEl: '.article.swiper-button-prev',
    },
    breakpoints: {
        767: {
            slidesPerView: 1,
            spaceBetween: 20,
        }
    }
});

let specialistCases = new Swiper('.case__list:not(.slider-mobile)', {
    slidesPerView: 3,
    spaceBetween: 30,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.case.swiper-button-next',
        prevEl: '.case.swiper-button-prev',
    },
    breakpoints: {
        767: {
            slidesPerView: 1.4,
            spaceBetween: 20,
        }
    }
});

let caseSlider = new Swiper('.case__list.slider-mobile', { init: false });
let service = new Swiper('.service__list', { init: false });

// $('input[name="phone"]').mask('+7 (000) 000-00-00');

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
        if ($('.sidebar.show-mobile').length > 0) {
            $('.header__main .container').append('<div class="lk"><span></span> <svg class="icon"><use xlink:href="img/symbol-defs.svg#icon-user"></use></svg></div>');
            $('.sidebar').prepend('<div class="close"></div>');
        }

        $('.header__menu').prepend('<img src="img/logo.png" alt="">');

        find = new Swiper('.find__list', {
            slidesPerView: 2,
            spaceBetween: 30,
            loopFillGroupWithBlank: true,
            breakpoints: {
                767: {
                    slidesPerView: 1.4,
                    spaceBetween: 20,
                },
                374: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                },
            }
        });

        $('.footer').append('<div class="container mobile"></div>');
        $('.footer .mobile').append($('.footer p'));
        $('.footer .mobile').append($('.footer__social'));
        $('.services .content__main').prepend('<div class="filter__toggle">Фильтр <svg class="icon"><use xlink:href="img/symbol-defs.svg#icon-filter"></use></svg></div>');
        $('.services').append($('.filter'));

        if ($(window).width() <= 767) {
            $('.marketolog').each((el, i) => {
                $(i).find('.marketolog__online').before($(i).find($('.marketolog__statusbar')));
            });

            caseSlider = new Swiper('.case__list.slider-mobile', {
                slidesPerView: 1.5,
                spaceBetween: 16,
                loopFillGroupWithBlank: true,
            });

            service = new Swiper('.service__list', {
                slidesPerView: 1.2,
                spaceBetween: 18,
                loopFillGroupWithBlank: true,
            });

            if ($('.blog__category a').length > 5) {
                for (let i = 6; i <= $('.blog__category a').length; i++) {
                    $(`.blog__category a:nth-child(${i})`).addClass('hide');
                }

                $('.blog__category').append('<a href="javascript:void(0)" class="blog__category-more">Все теги</a>');
            }

        } else {
            $('.marketolog').each((el, i) => {
                $(i).find('.marketolog__info-top').append($(i).find($('.marketolog__statusbar')));
            });

            if ($('.case__list.mobile-slider').length > 0) { caseSlider.destroy(); }
            if ($('.service__list').length > 0) { service.destroy(); }

            $('.blog__category-more').remove();
            $('.blog__category a').removeClass('hide');
        }
    } else if ($(window).width() > 1023  && $('.hamburger').length > 0) {
        $('.hamburger').remove();
        $('.lk').remove();
        $('.sidebar .close').remove();
        $('.header__menu img').remove();
        
        if ($('.find__list').length > 0) { find.destroy(); }
        if ($('.case__list.mobile-slider').length > 0) { caseSlider.destroy(); }
        if ($('.service__list').length > 0) { service.destroy(); }
        
        $('.footer .container:not(.mobile) .footer__col:last').append($('.footer .container.mobile p'));
        $('.footer .container:not(.mobile) .footer__col:last').append($('.footer .container.mobile .footer__social'));
        $('.footer .container.mobile').remove();
        $('.filter__toggle').remove();
        $('.services .sidebar').append($('.filter'));
    }
}

if ($(window).width() <= 1023) {
    changeView();
    
    if ($('.find__list').length > 0) {
        find.init();
    }
}

$(window).on('resize', changeView);

$('body').on('click', '.hamburger', (e) => {
    $(e.currentTarget).toggleClass('active');
    $('.header__menu').toggleClass('active');
    $('html, body').toggleClass('overflow');
});

$('body').on('click', '.lk', (e) => {
    $(e.currentTarget).toggleClass('active');
    $('.sidebar').toggleClass('active');
    $('html, body').addClass('overflow');
});

$('body').on('click', '.show-password', (e) => {
    $(e.currentTarget).toggleClass('active');

    if ($(e.currentTarget).hasClass('active')) {
        $(e.currentTarget).parent().find('input').attr('type', 'text');
    } else {
        $(e.currentTarget).parent().find('input').attr('type', 'password');
    }
});

$('body').on('click', 'select', (e) => {
    $(e.currentTarget).parent().toggleClass('active');
});

$('body').on('blur', 'select', (e) => {
    if ( $(e.currentTarget).parent().hasClass('active')) {
        $(e.currentTarget).parent().toggleClass('active');
    }
});

$('body').on('click', '.remove-row', (e) => {
    $(e.currentTarget).closest('.content__table-row').slideUp();
});

$('body').on('click', '.filter__toggle', (e) => {
    $('.filter').toggleClass('active');
    $('html, body').toggleClass('overflow');
});

$('body').on('click', '.filter__close', (e) => {
    $('.filter').removeClass('active');
    $('html, body').removeClass('overflow');
});

$('body').on('change', 'input[data-tab]', (e) => {
    $(e.currentTarget).closest('section').find('.tab').removeClass('active');
    $(`.tab[data-tab="${$(e.currentTarget).attr('data-tab')}"]`).addClass('active');
});

$('body').on('click', '.sidebar .close', (e) => {
    $('.sidebar').removeClass('active');
    $('html, body').removeClass('overflow');
});

$('body').on('click', '.blog__category-more', (e) => {
    $(e.currentTarget).remove();
    $('.blog__category a').removeClass('hide');
});

$('body').on('click', '.specialist__review-text a', (e) => {
    $(e.currentTarget).parent().find('span').toggleClass('block');
    $(e.currentTarget).remove();
});

if ($(window).width() > 768) {
    $(".specialist__user").sticky({ 
        topSpacing: 140,
        bottomSpacing: $('.footer').height() + $('.copyright').height() + 160
     });
}