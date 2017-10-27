$(function() {
  // Configures Flickity Carousel
  $('.carousel-main').flickity({
    wrapAround: true,
    draggable: true,
    adaptiveHeight: true,
    prevNextButtons: false,
    pageDots: false
  });
  // 2nd carousel, navigation
  $('.carousel-nav').flickity({
    asNavFor: '.carousel-main',
    contain: true,
    prevNextButtons: false,
    pageDots: false
  });

  (function changeBackgroundOnTime() {
    function isDark() {
      var currentTime = new Date().getHours();

      return (6 >= currentTime && currentTime > 20);
    }

    if (isDark()) {
      document.body.classList.add('is-dark');
    }
  })();
});
