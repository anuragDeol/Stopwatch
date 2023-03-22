document.addEventListener("DOMContentLoaded", function() {
    const startBtn = document.getElementById("start-btn");
    const resetBtn = document.getElementById("reset-btn");
    const timer = document.getElementById("timer");

    let intervalID;
    let isPaused = true;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    // START-STOP:: start/stop the timer
    startBtn.addEventListener("click", () => {
        if (isPaused) {
            startBtn.innerHTML = "Stop";    // as soon as 'Start' button is clicked, changing the text to 'Stop'
            // 'setInterval()' called after 1000ms, after each call 'seconds' is incrementing by 1
            intervalID = setInterval(() => {
                seconds++;
                // if 1 minute completes, incrementing 'minutes' by 1
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                }
                // if 1 hour completes, incrementing 'hours' by 1
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
                // changing the innerHTML of timer after each second and showing as -> HH:MM:SS
                timer.innerHTML = `${hours<10 ? '0' + hours.toString() : minutes.toString()}:${minutes<10 ? '0' + minutes.toString() : minutes.toString()}:${seconds<10 ? '0' + seconds.toString() : seconds.toString()}`;
            }, 1000);
            // once the timer starts, setting 'isPause' to 'false' representing the timer is not in pause state
            isPaused = false;
        } else {
            // if 'isPause' was false, setting it to true and pausing the timer
            startBtn.innerHTML = "Start";
            clearInterval(intervalID);
            isPaused = true;
        }
    });

    // RESET:: reset the timer
    resetBtn.addEventListener("click", () => {
        clearInterval(intervalID);
        startBtn.innerHTML = "Start";
        isPaused = true;
        seconds = 0;
        minutes = 0;
        hours = 0;
        timer.innerHTML = "00:00:00";
    });
})