$(function(){
  // function scrollWindow() {
    // var $window = $(window);
    // var $header = $("header");
    // var scroll_y = $window.scrollTop();
  //   if (scroll_y <= 0) {
  //   $header.removeClass("is-white");
  //   } else if (scroll_y > 0) {
  //     $header.addClass("is-white");
  //   }
  // }

  // $(window)
  // .on('scroll', scrollWindow)

  // ヘッダーの背景
  var $window = $(window);
  var $header = $("header");

  $window.scroll(function(){
    var scroll_y = $window.scrollTop();
    if (scroll_y <= 0) {
      console.log(scroll_y);
      $header.removeClass("mode-white", "mode-black");
    } else {
      $header.addClass("mode-white", "mode-black");
    }

    if (scroll_y <= 0) {
      console.log(scroll_y);
      $header.removeClass("x-black");
    } else {
      $header.addClass("x-black");
    }
   
  });

  // ハンバーガーメニュー
  $(".hamburger").click(function(){
    $(".header").toggleClass("x-active");
    $("body").toggleClass("x-noscroll");
    }); 

  $(".header-nav-link").click(function(){
    $(".header").removeClass("x-active");
    $("body").removeClass("x-noscroll");
  });  

  // お知らせのタブ
    $(".info-tab").on("click",function(){
  
     $(".info-tab").removeClass("x-open");
     $(".info-tab-content").removeClass("x-open");
     $(this).addClass("x-open");
     var $id = $(this).data("id");
     $("#" + $id).addClass("x-open");
  
    });
  
  

});
