$(document).ready(function() {
    $('.footer-btn').click(function() {
      if ($('.footer').is(':visible')) {
        $('.footer').slideUp('slow');
        $('.footer-btn').animate({
          bottom : 0
        },600);
      } else {
        $('.footer').slideDown('slow');
        $('.footer-btn').animate({
          bottom : '50%'
        },600);
      }
    });
  });