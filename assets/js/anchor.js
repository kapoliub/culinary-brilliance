$(document).ready(function () {
  $("a.scrollto").click(function () {
    let elementClick = $(this).attr("href");
    let destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination - 70
    }, 800);
    return false;
  });
});