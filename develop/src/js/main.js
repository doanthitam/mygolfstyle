$(window).on('resize',function(){
  // resize();
})
var backtotop = $('#scrollTop');
$(window).scroll(function(){
  if ($(window).scrollTop() >= 500){
    backtotop.addClass('show');
  }else{
    backtotop.removeClass('show');
  }
  if ($(window).scrollTop() >= 0) {
    $('.header').addClass('fixed-header');
    $('.header .logo').addClass('visible-title');
    }else {
        $('.header').removeClass('fixed-header');
        $('.header .logo').removeClass('visible-title');
    }
});
backtotop.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// Anchor
$('a[href^="#"]').click(function(){
  var hasttop = $(this.hash).offset().top;
  var headerheight = $("#header").innerHeight();
  var hasttopNew = hasttop - headerheight
  $('html, body').animate({
    scrollTop: hasttopNew
  }, 500);
  return false;
});

// $(window).on('load scroll', function(){
//   var elem = $('.animated');
//   elem.each(function () {
//     var isAnimate = $(this).data('animate');
//     var elemOffset = $(this).offset().top;
//     var scrollPos = $(window).scrollTop();
//     var wh = $(window).height();
//
//     if(scrollPos > elemOffset - wh + (wh / 2)){
//       $(this).addClass(isAnimate);
//     }else{
//       $(this).removeClass(isAnimate);
//     }
//   });
// });
