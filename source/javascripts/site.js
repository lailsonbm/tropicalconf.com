$(function() {
  // Configures Flickity Carousel
  $('.carousel-main').flickity({
    wrapAround: true,
    pageDots: false
  });
  // 2nd carousel, navigation
  $('.carousel-nav').flickity({
    asNavFor: '.carousel-main',
    contain: true,
    prevNextButtons: false,
    pageDots: false
  });
});
