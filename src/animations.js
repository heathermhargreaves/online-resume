$( document ).ready(function() {
    console.log( "ready!" );

    $('.carousel').carousel({
       dist:0,
       shift:0,
       padding:20,
    });

    $(window).scroll(function() {
      if($(this).scrollTop()>0) {
        $('.top').slideUp();
      }
      else {
        $('.top').slideDown();
      }
    });
    $(window).scroll(function() {
      if($(this).scrollTop()>150) {
        $('.middle').slideUp();
      }
      else {
        $('.middle').slideDown();
      }
    });
    $(window).scroll(function() {
      if($(this).scrollTop()>300) {
        $('.bottom').slideUp();
      }
      else {
        $('.bottom').slideDown();
      }
    });


    $('.carousel-slider').carousel({
      full_width: true
    });


}); //end jquery doc
