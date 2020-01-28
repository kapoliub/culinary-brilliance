$(function(){
    $(".second-wine-block").hide();
    $("#contact-form").hide();
    
    $("#wine-btn").click(showHideWineBlock);
    $(".contact-form-show").click(openForm);
    $("#close-btn").click(closeForm);

    function showHideWineBlock(){
        $(".second-wine-block").slideToggle("slow");
        if($("#wine-btn").text() == 'Load More'){
            $("#wine-btn").text('Hide');
        }
        else{
            $("#wine-btn").text('Load More');
        }
    }

    function openForm(){
        let paddingHeight = $(document).height() - $('#contact-form').height() - 500;
        $("#contact-form").css('padding-bottom', paddingHeight)
        $("#contact-form").slideToggle("fast");
        $('body').css('background-color', 'rgba(0, 0, 0, 0.5)')
        $("html:not(:animated),body:not(:animated)").animate({
            scrollTop: $('#contact-form').offset().top + 350
        }, 800);
        $("#user-name").focus();

    }

    function closeForm(){
        $('body').css('background', 'none')
        $("#contact-form").slideToggle("fast");
        $("#user-name").val('');
        $("#user-phone").val('');
        $("#user-mail").val('');
    }

    $("#about-btn").click(function(){
        window.location.href = "https://www.google.com/search?q=culinary+brilliance";
    })

    $("#contact-form").keyup(function(e){
        if(e.which == 13){
            $("#submit-btn").click();
        }
    });

    $('#contact-form input').keydown(function (e) {
        if (e.keyCode == 13) {
            let inputs = $(this).parents("form").eq(0).find(":input");
            if (inputs[inputs.index(this) + 1] != null) {                    
                inputs[inputs.index(this) + 1].focus();
            }
            e.preventDefault();
            return false;
        }
    });

    $('.cooking-container #recipeCarousel').carousel({
        interval : 3000
        })
        
        $('.cooking-container .carousel .carousel-item').each(function(){
            var next = $(this).next();
            if (!next.length) {
            next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
            
            for (var i=0;i<2;i++) {
                next=next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
                
                next.children(':first-child').clone().appendTo($(this));
            }
        });

})