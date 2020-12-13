$(document).ready(function () {
    // intro slider

    $(".intro-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // autoplay:true,
        dots: true,
        autoplaySpeed: 1000,
    });

    // opneMnue
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

    // show form

    $(".select-careers").on("change", function () {
        $("#" + this.value).toggleClass("show-form hide-form").siblings().addClass("hide-form").removeClass("show-form");
    });






    // floorPlan-slider

    $(".floorPlan-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay:true,
        adaptiveHeight:true,
        dots: false,
        autoplaySpeed: 1000,
        prevArrow: "<div class='arrow-slider-header left-arrow'> <i class='fas fa-arrow-left'></i></div>",
        nextArrow: "<div class='arrow-slider-header right-arrow'> <i class='fas fa-arrow-right'></i></div>",
    });

    // gallaery-slider-slider

    $(".gallery-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay:true,
        adaptiveHeight:true,
        dots: false,
        autoplaySpeed: 1000,
        prevArrow: "<div class='arrow-slider-header left-arrow'> <i class='fas fa-arrow-left'></i></div>",
        nextArrow: "<div class='arrow-slider-header right-arrow'> <i class='fas fa-arrow-right'></i></div>",
    });
    // gallaery-slider-slider

    $(".construction-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay:true,
        adaptiveHeight:true,
        dots: false,
        autoplaySpeed: 1000,
        prevArrow: "<div class='arrow-slider-header left-arrow'> <i class='fas fa-arrow-left'></i></div>",
        nextArrow: "<div class='arrow-slider-header right-arrow'> <i class='fas fa-arrow-right'></i></div>",
    });


    // opne pop-up
    // $('.gallery-box').click(function(s){
    //     s.stopPropagation();
    //     $("#" + $(this).data("open")).addClass('show-pop');
    //     $("body").addClass("body-over");
    //     $(".over-lay").show();
    // });
    // $('.pop-up-box .close-menu i').click(function(){
    //     $(".pop-up-box").removeClass('show-pop');
    //     $("body").removeClass("body-over");
    //     $(".over-lay").hide();
    // });


// AOS 
AOS.init();




});
