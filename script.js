let timer;
let timeLeft = 25 * 60;  // Default Pomodoro Mode (25 min)
let isRunning = false;

const timerDisplay = document.getElementById("timer-display");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const stopButton = document.getElementById("stop");
const alarmSound = document.getElementById("alarm-sound");

const pomodoroButton = document.getElementById("pomodoro");
const shortBreakButton = document.getElementById("short-break");
const longBreakButton = document.getElementById("long-break");

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                alarmSound.play(); 
                alert("Time's up!");
                isRunning = false;
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60;
    isRunning = false;
    updateDisplay();
}

function stopTimer() {
    clearInterval(timer);
    timeLeft = 0;
    isRunning = false;
    updateDisplay();
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
stopButton.addEventListener("click", stopTimer);

pomodoroButton.addEventListener("click", () => { timeLeft = 25 * 60; updateDisplay(); });
shortBreakButton.addEventListener("click", () => { timeLeft = 5 * 60; updateDisplay(); });
longBreakButton.addEventListener("click", () => { timeLeft = 15 * 60; updateDisplay(); });

updateDisplay();  // Initial display update
