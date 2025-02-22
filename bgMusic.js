document.addEventListener("click", function () {
    const audio = document.getElementById("bgMusic");
    if (audio.paused) {
      audio.play().catch(error => console.log("Autoplay blocked:", error));
    }
  }, { once: true });
