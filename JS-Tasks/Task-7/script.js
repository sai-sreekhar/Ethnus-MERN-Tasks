// Select the video element for control
let videoControl = document.querySelector(".video-control");

// Select the start and stop buttons
let startButton = document.querySelector(".start-button");
let stopButton = document.querySelector(".stop-button");

// Function to start playing the video
let startVideo = function () {
  videoControl.play();
};

// Function to stop the video
let stopVideo = function () {
  videoControl.pause();
};

// Add event listeners to the start and stop buttons
startButton.addEventListener("click", startVideo);
stopButton.addEventListener("click", stopVideo);
