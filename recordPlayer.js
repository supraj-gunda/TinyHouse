document.getElementById("fileInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const audioPlayer = document.getElementById("audioPlayer");

    if (file) {
        const objectURL = URL.createObjectURL(file);
        audioPlayer.src = objectURL;
        audioPlayer.style.display = "block";
        audioPlayer.play();
    }
});