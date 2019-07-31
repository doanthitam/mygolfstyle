resize();
function resize() {
	if ($(window).width() <= 768) {
		$('.resimg').each(function(index,el) {
			$(el).attr('src', $(el).attr('src').replace('pc', 'sp'));
		});
	}
	else {
		$('.resimg').each(function(index,el) {
			$(el).attr('src', $(el).attr('src').replace('sp', 'pc'));
		});
	}
}
$(window).on('resize',function(){
  resize();
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

// Anchor
$('a[href^="#"]').click(function(){
  var hasttop = $(this.hash).offset().top;
  var hasttopNew = hasttop - 104;
  var hasttopNewSp = hasttop - 83;
  if ($(window).width() > 768) {
    $('html, body').animate({
      scrollTop: hasttopNew
    }, 500);
  }
  $("#js-menuButton").removeClass("active");
  if ($(window).width() < 768) {
      $("#js-menu").hide();
      $('html, body').animate({
        scrollTop: hasttopNewSp
      }, 500);
    }
  return false;
});
