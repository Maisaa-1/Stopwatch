const startBtn = document.getElementById("btn-start")
const stopBtn = document.getElementById("btn-stop")
const resetBtn = document.getElementById("btn-reset")

startBtn.addEventListener("click", startTimer)
stopBtn.addEventListener("click", stopTimer)
resetBtn.addEventListener("click", resetTimer)

let interval
let ms = 0
let s = 0
let min = 0
let hr = 0
const tensHTML = document.getElementById("tens")
const secondsHTML = document.getElementById("second")
const minutesHTML = document.getElementById("minute")
const hoursHTML = document.getElementById("hours")



function startTimer() {
    interval = setInterval(increaseTime, 10)
}

function increaseTime() {
    ms++
    if (ms < 10) {
        tensHTML.innerText = "0" + ms
    }
    else if (ms >= 10 && ms <= 99) {
        tensHTML.innerHTML = ms
    } else {
        s++
        ms = 0
        tensHTML.innerHTML = "0" + ms

    }
    if (s < 10) {
        secondsHTML.innerText = "0" + s;

    } else if (s >= 10 && s <= 60) {
        secondsHTML.innerText = s
    } else {
        min++;
        s = 0
        secondsHTML.innerText = "0" + s
    }
    if (min < 10) {
        minutesHTML.innerText = "0" + min
    } else if (min >= 10) {
        minutesHTML.innerText = min
    } else {
        hr++
        min = 0
        minutesHTML.innerText = "0" + min
    }
    if (hr < 10) {
        hoursHTML.innerText = "0" + hr
    }
    else if (hr>=10) { 
        hoursHTML.innerText=hr 
    }


}


function stopTimer() {
 clearInterval(interval)
}

function resetTimer() {
    ms=0
    s=0
    min=0
    hr=0
    tensHTML.innerText = "0" + ms
    secondsHTML.innerText="0" + s
    minutesHTML.innerText="0" + min
    hoursHTML.innerText="0" + hr
    clearInterval(interval)
}