$(function(){
    $('.cooking-container #recipeCarousel').carousel({
    interval: 3000
    });
    
    $('.cooking-container .carousel .carousel-item').each(function () {
        let next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        for (var i = 0; i < 2; i++) {
            next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        }
    });
})