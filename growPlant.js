document.addEventListener("DOMContentLoaded", function() {
    let randomNumber = Math.floor(Math.random() * 8) + 1;
    let imagePath = `flower${randomNumber}.gif`;

    document.getElementById("flowerImage").src = imagePath;
});