const time = document.getElementById("time");
const timeformat = document.getElementById("timeformat");

function showTime () {
    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let secs = date.getSeconds();
    let ampm = "AM"

    if (hr === 0) {
        hr = 12
    }
    if (hr > 12) {
        hr -= 12
        ampm = "PM"
    }

    hr = hr < 10 ? `0${hr}` : hr;
    min = min < 10 ? `0${min}` : min;
    secs = secs < 10 ? `0${secs}` : secs;

    time.innerHTML = `${hr} : ${min} : ${secs}`;
    timeformat.innerHTML = ampm
    
}
setInterval(showTime, 1000);