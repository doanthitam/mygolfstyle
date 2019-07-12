$(window).on('resize',function(){
  // resize();
})
//scroll//
$("#js-menuButton").on("click", function() {
 $(this).toggleClass("active");
 $("#js-menu").toggle();
 if ($(window).width() < 768) {
   $("#js-menu li").hide();
   $("#js-menu li").each(function(i) {
     $(this)
       .delay(50 * i)
       .fadeIn(500);
   });
 }
 return false;
});

$('.nav a[href^="#"]').on("click",function() {
 var speed = 500;
 var href = $(this).attr("href");
 var target = $(href == "#" || href == "" ? "html" : href);
 var position = target.offset().top - 104;
 $("html, body").animate({ scrollTop: position }, speed, "swing");
 $("#js-menuButton").removeClass("active");
 if ($(window).width() < 768) {
   $("#js-menu").hide();
 }
 return false;
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
