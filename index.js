const startBtn = document.getElementById("btn-start");
const stopBtn = document.getElementById("btn-stop");
const resetBtn = document.getElementById("btn-reset");

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

let interval;
let ms = 0;
let s = 0;
let min = 0;
let hr = 0;

const tensHTML = document.getElementById("tens");
const secondsHTML = document.getElementById("second");
const minutesHTML = document.getElementById("minute");
const hoursHTML = document.getElementById("hours");

function startTimer() {
    // Prevent multiple intervals stacking
    if (!interval) {
        interval = setInterval(increaseTime, 10);
    }
}

function increaseTime() {
    ms++;
    if (ms <= 99) {
        tensHTML.innerText = ms < 10 ? "0" + ms : ms;
    } else {
        s++;
        ms = 0;
        tensHTML.innerText = "00";
    }

    if (s <= 59) {
        secondsHTML.innerText = s < 10 ? "0" + s : s;
    } else {
        min++;
        s = 0;
        secondsHTML.innerText = "00";
    }

    if (min <= 59) {
        minutesHTML.innerText = min < 10 ? "0" + min : min;
    } else {
        hr++;
        min = 0;
        minutesHTML.innerText = "00";
    }

    hoursHTML.innerText = hr < 10 ? "0" + hr : hr;
}

function stopTimer() {
    clearInterval(interval);
    interval = null; // reset so startTimer can run again
}

function resetTimer() {
    ms = 0;
    s = 0;
    min = 0;
    hr = 0;
    tensHTML.innerText = "00";
    secondsHTML.innerText = "00";
    minutesHTML.innerText = "00";
    hoursHTML.innerText = "00";
    clearInterval(interval);
    interval = null;
}