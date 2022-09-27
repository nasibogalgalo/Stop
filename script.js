// Global variables
const time_el = document.querySelector('.time');
const start_btn = document.querySelector('#start');
const stop_btn = document.querySelector("#stop");
const reset_btn = document.querySelector("#reset");

let seconds = 0;
let interval = null;

// Event listeners
start_btn.addEventListener('click', start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);


//Update the time
function timer() {
    seconds++;

    //Format our time
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;

    if (secs < 10) secs = '0' + secs;
    if (secs < 10) mins = "0" + mins;
    if (secs < 10) hrs = "0" + hrs;

    time_el.innerHTML = `${hrs}:${mins}:${secs}`;

}

function start() {
    if (interval) {
        return
    }
    interval = setInterval(timer, 1000);
}
function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    seconds = 0;
    time_el.innerText = '00:00:00';
}