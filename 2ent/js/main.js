$(function () {
    $('.slider').slick({
        nextArrow: '<button class="slick-arrow slick-next"><img src="./images/arrow_right.svg" alt="next arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src = "./images/arrow_left.svg" alt = "prev arrow"></button >',
        fade: true,
        responsive: [
            {
                breakpoint: 441,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});





