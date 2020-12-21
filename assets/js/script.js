$(document).ready(function () {
    // intro slider

    $(".intro-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        dots: true,
        autoplaySpeed: 1500,
    });

    5; // opneMnue
    $(".nav-section .menu-icon i").click(function () {
        $(".nav-section .nav-link").addClass("opne-menu");
        $("body").addClass("body-over");
        $(".over-lay").show();
    });
    $(".nav-section .nav-link .close-icon i, .over-lay").click(function () {
        $(".nav-section .nav-link").removeClass("opne-menu");
        $("body").removeClass("body-over");
        $(".over-lay").hide();
    });

    // scroll link
    $('.link-box a').click(function() {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top
        }, 900);
    });


    // show form

    $(".select-careers").on("change", function () {
        $("#" + this.value)
            .toggleClass("show-form hide-form")
            .siblings()
            .addClass("hide-form")
            .removeClass("show-form");
    });
    // gallaery-slider-slider

    $(".gallery-slider").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        dots: false,
        autoplaySpeed: 1500,
        prevArrow: "<div class='arrow-slider-header left-arrow'> <i class='fas fa-arrow-left'></i></div>",
        nextArrow: "<div class='arrow-slider-header right-arrow'> <i class='fas fa-arrow-right'></i></div>",
    });
    // gallaery-slider-slider

    $(".construction-slider").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        dots: false,
        autoplaySpeed: 1500,
        prevArrow: "<div class='arrow-slider-header left-arrow'> <i class='fas fa-arrow-left'></i></div>",
        nextArrow: "<div class='arrow-slider-header right-arrow'> <i class='fas fa-arrow-right'></i></div>",
    });

    $(".project-slider").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        dots: false,
        autoplaySpeed: 1500,
        prevArrow: "<div class='arrow-slider-header left-arrow'> <i class='fas fa-arrow-left'></i></div>",
        nextArrow: "<div class='arrow-slider-header right-arrow'> <i class='fas fa-arrow-right'></i></div>",
    });
    $(".news-slider").slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        dots: false,
        autoplaySpeed: 1500,
        prevArrow: "<div class='arrow-slider-header left-arrow'> <i class='fas fa-arrow-left'></i></div>",
        nextArrow: "<div class='arrow-slider-header right-arrow'> <i class='fas fa-arrow-right'></i></div>",
        responsive: [
            {
                breakpoint: 997,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });


    // floor-plans-selcet
    $('#floor-select').on('change', function() {
        $('#' + this.value).toggleClass('show-form hide-form').siblings().addClass('hide-form').removeClass('show-form');
    });


    // AOS
    AOS.init();
});
