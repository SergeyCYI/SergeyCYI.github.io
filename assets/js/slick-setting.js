$(document).ready(function(){
    $('.slider__review').slick({
        slidesToShow: 1,
        dots: true,
        speed: 2000,
        easing: 'ease',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        touchThreshold: 10,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: false,
        responsive:[
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
    $('.slider__before-after').slick({
        slidesToShow: 3,
        dots: true,
        speed: 2000,
        easing: 'ease',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        touchThreshold: 10,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: false,
        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });
    $('.slider__inst').slick({
        slidesToShow: 5,
        rows: 2,
        speed: 1000,
        easing: 'ease',
        lazyLoad: 'progressive',
        infinite: false,
        autoplay: false,
        autoplaySpeed: 500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        touchThreshold: 10,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: false,
        responsive:[
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                }
            },{
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
});