let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 100000);

btn.onclick = function () {
    // Add audio element dynamically
    let audio = document.createElement("audio");
    audio.src = "spin-sound.mp3"; // Replace with the path to your audio file
    audio.play();

    container.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 100000);

    // Stop audio after 12 seconds and show popup
    setTimeout(function () {
        audio.pause();
        audio.currentTime = 0;

        // Show popup
        let popup = document.createElement("div");
        popup.classList.add("popup");
        popup.textContent = "Semangat! Kamu mendapatkan hadiah.";

        let prize = document.createElement("div");
        prize.classList.add("prize");
        prize.textContent = "Hadiah: Free Ongkir";

        popup.appendChild(prize);
        document.body.appendChild(popup);

        // Close popup after 3 seconds
        setTimeout(function () {
            document.body.removeChild(popup);
        }, 3000);
    }, 12000);
};
