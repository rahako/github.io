// スクロールして表示領域に入ったらclass付与
$(function () {
  $(".reason1").on("inview", function () {
    $(this).addClass("slide-left");
  });
});
$(function () {
  $(".reason2").on("inview", function () {
    $(this).addClass("slide-right");
  });
});


// スクロールして表示領域に入ったらclass付与
$(function () {
  $(".inview").on("inview", function () {
    $(this).addClass("balloon");
  });
});

$(function () {
  $('.hamburger').on('click', function () {
    $('.hamburger').toggleClass('fade');
    $('.navi').toggleClass('active');
  });
});
