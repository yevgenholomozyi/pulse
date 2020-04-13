//slider
const slider = tns({               
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    speed: 1200,
    nav: false,
    responsive: {
        575: {
        arrowKeys: false,
        nav: true,
        },
    },
  });

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev') });
    document.querySelector('.next').addEventListener('click', function () {
        slider.goTo('next') });

// animation

new WOW().init();

(function($) {

    //modal

    $('[data-model=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function (){
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });


    // forms validation

    function validateForm (form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                },
                phone: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true,
                    },
                },
            messages: {
                name: "пожалуйста, введите ваше имя",
                phone: "пожалуйста, введите номер своего телефона",
                email: {
                    required: "пожалуйста, введите адрес електронной почты",
                    email: "неправильно введен адрес електронной почты",
                },
            },
        });
    };
    validateForm('#consultation-form');
    validateForm('#consultation form');
    validateForm('#order form');
    
    // mask

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    // tabs

    $(function() { 
    $('ul.catalog__tabs').on('click', 'li:not(catalog__tab_active)', function() {
        $(this)
.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        });  
    });

    // fadeIn/fadeOut scroll

    $(window).scroll(function() {
        if($(this).scrollTop()>2200) {
        $('.pageup').fadeIn(); 
        } else {
            $('.pageup').fadeOut();
        };
    });

    //smooth scroll

    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    // adding animation classes to catalog-item 

    $('.catalog-item').each(function () {
        $('.catalog-item').addClass('fadeInUp wow');
        $('.catalog-item').attr('data-wow-duration', '1s');
        $('.catalog-item').attr('data-wow-delay', '1s');

    })

    //toggle of content 

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

})(jQuery);


