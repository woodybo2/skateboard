const audio = document.getElementById("audio");
const soundToggleBtn = document.getElementById("soundToggleBtn");
const soundIcon = document.getElementById("soundIcon");

soundToggleBtn.addEventListener("click", toggleSound);

function toggleSound() {
  if (audio.paused) {
    audio.play();
    soundIcon.classList.remove("fa-volume-up");
    soundIcon.classList.add("fa-volume-mute");
    soundToggleBtn.innerHTML = '<i id="soundIcon" class="fa-solid fa-volume-high"></i>';
  } else {
    audio.pause();
    soundIcon.classList.remove("fa-volume-mute");
    soundIcon.classList.add("fa-volume-up");
    soundToggleBtn.innerHTML = '<i id="soundIcon" class="fa-solid fa-volume-xmark"></i>';
  }
}

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
