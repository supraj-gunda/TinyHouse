document.addEventListener("DOMContentLoaded", function () {
  const bgMusic = document.getElementById("bgMusic");
  const soundButton = document.querySelector(".sound-button");
  const soundIcon = document.getElementById("soundIcon");

  // Set initial volume from HTML attribute
  bgMusic.volume = parseFloat(bgMusic.dataset.volume) || 0.4;

  // Try autoplay, if blocked, start muted
  bgMusic.play().then(() => {
      soundIcon.src = "soundOn.png"; // Set correct initial state
  }).catch(() => {
      bgMusic.pause();
      soundIcon.src = "soundOff.png"; // Start muted if autoplay blocked
  });

  // Toggle music and icon on click
  soundButton.addEventListener("click", function () {
      if (bgMusic.paused) {
          bgMusic.play();
          soundIcon.src = "soundOn.png";
      } else {
          bgMusic.pause();
          soundIcon.src = "soundOff.png";
      }
  });
});
