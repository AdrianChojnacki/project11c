// Selectors
const startBtn = document.querySelector(`.main`);
const resetBtn = document.querySelector(`.reset`);
const timeDiv = document.querySelector(`.time`);

// Functions variables
let interval;
let startTime;
let time;
let savedTime = 0;
let flag = true;

// Start-stop function
const startStop = () => {
  startTime = Date.now();

  if (flag) {
    interval = setInterval(() => {
      const nowTime = Date.now();
      time = nowTime - startTime;
      timeDiv.textContent = savedTime + time;
    }, 1);

    flag = !flag;
  } else {
    clearInterval(interval);

    savedTime = savedTime + time;

    flag = !flag;
  }
};

// Start-stop listener
startBtn.addEventListener(`click`, startStop);

// Reset function
const reset = () => {
  clearInterval(interval);

  savedTime = 0;
  timeDiv.textContent = "---";

  flag = true;
};

// Reset listener
resetBtn.addEventListener(`click`, reset);
