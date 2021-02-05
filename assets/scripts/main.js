// main.js

// TODO

// volume text changed --> reflect in volume level, slider bar, and volume bars
let volumeText = document.getElementById("volume-number");
volumeText.addEventListener("input", function() {
    document.getElementById("horn-sound").volume = volumeText.value / 100;
    document.getElementById("volume-slider").value = volumeText.value;
    updateVolumeBars(volumeText.value);
});

// volume slider changed --> reflect in volume text
let volumeSlider = document.getElementById("volume-slider");
volumeSlider.addEventListener("input", function() {
    document.getElementById("horn-sound").volume = volumeSlider.value / 100;
    document.getElementById("volume-number").value = volumeSlider.value;
    updateVolumeBars(volumeSlider.value);
});

// update volume bars based on volume level, un/mute button depending on vol
function updateVolumeBars(volumeNum)
{
    let volumeBars = document.getElementById("volume-image");

    if (volumeNum >= 67)
    {
        volumeBars.src = "./assets/media/icons/volume-level-3.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    else if (volumeNum >= 34 && volumeNum <= 66)
    {
        volumeBars.src = "./assets/media/icons/volume-level-2.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    else if (volumeNum >= 1 && volumeNum <= 33)
    {
        volumeBars.src = "./assets/media/icons/volume-level-1.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    else if (volumeNum == 0)
    {
        volumeBars.src = "./assets/media/icons/volume-level-0.svg";
        document.getElementById("honk-btn").disabled = true;
    }
}

// if Air Horn selected, radio should switch to play that audio and change picture
let airHornSound = document.getElementById("radio-air-horn");
airHornSound.addEventListener("click", function() {
    document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
    document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
});

// if Car Horn selected, radio should switch to play that audio and change picture
let carHornSound = document.getElementById("radio-car-horn");
carHornSound.addEventListener("click", function() {
    document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
    document.getElementById("sound-image").src = "./assets/media/images/car.svg";
});

// if Party Horn selected, radio should switch to play that audio and change picture
let partyHornSound = document.getElementById("radio-party-horn");
partyHornSound.addEventListener("click", function() {
    document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
    document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
});

// button that plays the selected horn sound, disabled if volume is muted
honkButton = document.getElementById("honk-btn");
honkButton.addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("horn-sound").play();
});