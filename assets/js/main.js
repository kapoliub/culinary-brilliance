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
    let paddingHeight = $(document).height() - $('#contact-form').height() - 500;
    $("#contact-form").css('padding-bottom', paddingHeight);
    $("#contact-form").slideToggle("fast");
    $('body').css('background-color', 'rgba(0, 0, 0, 0.5)');
    $("html:not(:animated),body:not(:animated)").animate({
      scrollTop: $('#contact-form').offset().top + 350
    }, 800);
    $("#user-name").focus();
  }

  $("#wine-container figure img").mouseover(function () {
    $(this).parent().append(`
      <div class='hover-block' style='width:${this.width}px; height:${this.height + 1}px'>
        <button id='read-btn'>Read</button>
      </div>
    `);
    $("#read-btn").click(function () {
      let height = $("#wine-container").height() + 140;
      $(".wine-description").css('height', height)

      $("html:not(:animated),body:not(:animated)").animate({
      scrollTop: $('.wine-container').offset().top + $('.wine-container').height()/4
      }, 800);
      let imgSrc = $(this).parent().parent().children('img').attr('src');
      let imgAlt = $(this).parent().parent().children('img').attr('alt');
      let title = $(this).parent().parent().children('figcaption').text(); 
      $.getJSON( "../../description.json", function( data ) {
        $(".wine-description").append(`
          <div class='container'>
            <div class='row d-flex justify-content-center align-items-center'>
              <img class='col-md-5 col-12' src='${imgSrc}' alt='${imgAlt}'/>
              <div class='col-lg-7 col-12 description'>
                <h4>${title}</h4>
                <p>
                  ${data.description}
                </p>
              </div>
            </div>
          </div>
        `);
      });
    });
  });

  // events

  $(document).mouseup(function (e) {
    let div = $(".wine-description .container");
    if (div.has(e.target).length === 0){
      $(".wine-description").css('height', 0)
      div.hide();
    }
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
});

function closeForm() {
  $('body').css('background', 'none');
  $("#contact-form").slideToggle("fast");
  $("#user-name").val('');
  $("#user-phone").val('');
  $("#user-mail").val('');
}