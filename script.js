$(function(){
  var $window = $(window);
  var $header = $("header");
  var scroll_y = $window.scrollTop();

  // ヘッダーの背景
  $window.scroll(function(){
    if (scroll_y <= 0) {
      $header.removeClass("is-white");
    } else {
      $header.addClass("is-white");
    }
  // $header.css("background-color","red");  

  });

  

});
