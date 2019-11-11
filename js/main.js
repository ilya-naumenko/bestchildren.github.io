$(document).ready(function () {

  $('.news-box').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3500
  });

  $('.gallery-box').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.comments-box').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3500
  });

  $('.popup-link, .button-form').magnificPopup();

});