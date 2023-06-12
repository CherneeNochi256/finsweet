Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

setInterval(() => {

    if ($(window).scrollTop() > 0 && !$(".header__top").hasClass("header__top--open")) {
        $(".burger").addClass("burger--follow")
    } else {
        $(".burger").removeClass("burger--follow")

    }
}, 0)

$(".burger").on("click", function (e) {
    e.preventDefault()

    $(".header__top").toggleClass("header__top--open")

    $(".overlay").toggleClass("overlay--visible")

    $(".burger span:nth-child(1)").toggleClass("burger_first_el_transformed")
    $(".burger span:nth-child(2)").toggleClass("burger_second_el_transformed")
    $(".burger span:nth-child(3)").toggleClass("burger_third_el_transformed")
})


var mixer = mixitup('.blog__list');


$('.reviews__slider').slick({
    infinite: false,
    slidesToShow: 2,
    arrows: false,
    dots: true,
    swipe:false,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                swipe: true
            }
        }
    ]
});

$('.reviews__slider-prev').on('click', function (e) {
    e.preventDefault()

    $('.reviews__slider').slick('slickPrev');
})

$('.reviews__slider-next').on('click', function (e) {
    e.preventDefault()

    $('.reviews__slider').slick('slickNext');
})


$('.faq__list-item-btn').click(function (e) {
    e.preventDefault()
    $(this).closest('.faq__list-item').find('.faq__list-item-answer').slideToggle();
    $(this).find('span:nth-of-type(2)').toggleClass('faq__list-item-btn--vertical-span-visible');
});







