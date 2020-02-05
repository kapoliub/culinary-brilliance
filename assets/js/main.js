"use strict";

$(function () {
    $(".second-wine-block").hide();
    $("#contact-form").hide();
    $("#wine-btn").click(showHideWineBlock);
    $(".contact-form-show").click(openForm);
    $("#close-btn").click(closeForm);

    function showHideWineBlock() {
        $(".second-wine-block").slideToggle("slow");

        if ($("#wine-btn").text() == 'Load More') {
        $("#wine-btn").text('Hide');
        } else {
        $("#wine-btn").text('Load More');
        }
    }

    function openForm() {
        var paddingHeight = $(document).height() - $('#contact-form').height() - 500;
        $("#contact-form").css('padding-bottom', paddingHeight);
        $("#contact-form").slideToggle("fast");
        $('body').css('background-color', 'rgba(0, 0, 0, 0.5)');
        $("html:not(:animated),body:not(:animated)").animate({
        scrollTop: $('#contact-form').offset().top + 350
        }, 800);
        $("#user-name").focus();
    }

    function closeForm() {
        $('body').css('background', 'none');
        $("#contact-form").slideToggle("fast");
        $("#user-name").val('');
        $("#user-phone").val('');
        $("#user-mail").val('');
    }

    $("#wine-container figure img").mouseover(function () {
        $(this).parent().append(`
            <div class='hover-block' style='width:${this.width}px; height:${this.height+1}px'>
                <button id='read-btn'>Read</button)
            </div>
        `)
        $("#read-btn").click(function(){
            console.log($(this).parent().parent().children('img').attr('src'))
            let imgSrc = $(this).parent().parent().children('img').attr('src');
            let imgAlt = $(this).parent().parent().children('img').attr('alt');
            let title = $(this).parent().parent().children('figcaption').text();

            $("#wine-container .row").append(`
                <div class='wine-description col-12'>
                    <img class='col-5' src='${imgSrc}' alt='${imgAlt}'/>
                    <div class='col-6'>
                        <h4>${title}</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae recusandae minus quis incidunt maxime quod cumque? Saepe distinctio numquam tenetur beatae autem corrupti dolorum non praesentium iure, tempora consequuntur iste.
                            Omnis perspiciatis fugit veritatis atque id, molestiae quidem eveniet quam! Amet fuga culpa, neque necessitatibus iure suscipit eos veritatis optio, aspernatur quibusdam dolores fugiat, facere unde voluptatibus fugit ipsam dicta?
                            Veniam reprehenderit deleniti eligendi repudiandae hic aliquam, similique quam nisi perspiciatis, consectetur odio quidem autem delectus cumque a quasi possimus iste consequatur facilis id repellat nobis eius fuga officia. Doloremque!
                            Officia quam magnam excepturi ipsa at quos accusamus, culpa placeat voluptatem perspiciatis eos alias dignissimos eum, voluptas dolores provident dolorem beatae nostrum odit rem. Numquam maxime minus temporibus nam? Ex.
                            Ad laboriosam obcaecati ab dolore odit laborum laudantium, alias, voluptas consectetur error facere iste quas voluptatum minima fuga soluta et veritatis earum ipsa? Doloremque cumque cum eum quae iste asperiores.
                            Voluptas ea ad natus eius ipsam dolor magnam mollitia labore voluptatem voluptatibus inventore, saepe et possimus id ratione quos porro commodi, dolore officiis provident dolorum minima nostrum. Sint, nisi reprehenderit!
                            Cumque et vel quisquam non, tempora dolores reiciendis consequuntur? Provident asperiores mollitia ut illo, cum optio aspernatur quae explicabo earum accusamus, reprehenderit harum excepturi vitae eveniet, ad deleniti doloremque? Provident!
                            Consequatur consectetur omnis nostrum exercitationem. Est ad provident at ratione vitae totam quo sed repellendus officia non obcaecati, maiores corporis nam, facilis, numquam laboriosam iure eos dolor odit et recusandae.
                            Quaerat neque consequatur, accusantium cum aperiam quia aspernatur repudiandae! Quae enim, repellat consectetur ullam sapiente dignissimos rerum cum debitis? Earum eligendi aut debitis qui reprehenderit voluptatibus delectus accusantium dolore ducimus.
                            Fuga voluptatum incidunt quia fugiat et, culpa, assumenda provident quasi beatae ratione reiciendis modi, officiis cumque? Cupiditate, perferendis, vel repudiandae commodi sunt accusantium et ipsum quo mollitia expedita assumenda similique!
                            Pariatur explicabo perferendis obcaecati voluptas aliquam facilis nisi repellat commodi officiis eius aperiam dicta iure cupiditate tenetur, dolorem doloribus cum, odio, doloremque fugit mollitia. Sunt suscipit facere cupiditate facilis magni!
                            Tenetur debitis iusto aut expedita sint explicabo fugit ullam? Minus ut hic provident laudantium reiciendis similique quasi cupiditate, eaque, iure eligendi fugit. Natus, cum! Laboriosam nemo adipisci similique tempore asperiores!
                            Provident sit repellendus odit perferendis, dolorum quo fuga aut, temporibus vero minus dolorem iste aperiam, tempore explicabo incidunt voluptatem fugiat natus eos voluptates accusamus facilis quos illo. At, soluta rerum.
                            Molestias nemo at vero obcaecati, iure, ipsa amet odit deserunt repellendus rem culpa! Nostrum veritatis libero blanditiis! Officiis voluptatibus accusamus, deserunt, quasi maiores consectetur suscipit sapiente natus quaerat itaque sit.
                            Voluptatibus assumenda quibusdam id distinctio aut mollitia provident impedit hic accusamus pariatur soluta doloremque velit nesciunt odio omnis quis adipisci exercitationem alias, quia voluptatem eaque veniam eligendi? Assumenda, quas vitae.
                        </p>
                    </div>
                </div>
            `)

            // console.log($(this).parent().parent())

        })
    });

    $("#wine-container figure").mouseleave(function () {
        $(this).children('.hover-block').remove();
    });

    

    $("#about-btn").click(function () {
        window.location.href = "https://www.google.com/search?q=culinary+brilliance";
    });
    $("#contact-form").keyup(function (e) {
        if (e.which == 13) {
        $("#submit-btn").click();
        }
    });
    $('#contact-form input').keydown(function (e) {
        if (e.keyCode == 13) {
        var inputs = $(this).parents("form").eq(0).find(":input");

        if (inputs[inputs.index(this) + 1] != null) {
            inputs[inputs.index(this) + 1].focus();
        }

        e.preventDefault();
        return false;
        }
    });
    $('.cooking-container #recipeCarousel').carousel({
        interval: 3000
    });
    $('.cooking-container .carousel .carousel-item').each(function () {
        var next = $(this).next();

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
});