$(document).ready(function() {

    /*Sticky Nav*/
    $('.js--features').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
  offset: '25%'
});
    
    
    /*Scroll buttons*/
$('.js--scroll-to-plans').click(function (){
    $('html, body').animate({scrollTop: $('.js--plans').offset().top}, 1000);
});
    
$('.js--scroll-to-start').click(function (){
    $('html, body').animate({scrollTop: $('.js--features').offset().top}, 1000);
});
    
    /*Nav scroll*/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

});