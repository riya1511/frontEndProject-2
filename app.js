function startTimer(duration, display1, display2, display3, display4) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        days = (diff / (60 * 60 * 24)) | 0;
        hours = (diff / (60 * 60)) % 24 | 0;
        minutes = (diff / 60) % 60 | 0;
        seconds = (diff % 60) | 0;

        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // days + ":" + hours + ":" + minutes + ":" + seconds;

        display1.textContent = days ;
        display2.textContent = hours;
        display3.textContent = minutes;
        display4.textContent = seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

window.onload = function () {
    var eightDays = 9 * 24 * 60 * 60,
        displayD = document.querySelector('.days');
        displayH = document.querySelector('.hours');
        displayM = document.querySelector('.minutes');
        displayS = document.querySelector('.seconds');
    startTimer(eightDays, displayD, displayH,displayM,displayS);
};