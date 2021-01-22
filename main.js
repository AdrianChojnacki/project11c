// Selectors
const startBtn = document.querySelector(`.main`);
const resetBtn = document.querySelector(`.reset`);
const timeDiv = document.querySelector(`.time`);

// Functions variables
let interval;
let time;
let flag = true;

// Start-stop function
const startStop = () => {
  const startTime = Date.now();
  if (flag) {
    interval = setInterval(() => {
      const nowTime = Date.now();
      time = nowTime - startTime;
      timeDiv.textContent = time;
    }, 1);

    flag = !flag;
  } else {
    clearInterval(interval);

    flag = !flag;
  }
};

// Start-stop listener
startBtn.addEventListener(`click`, startStop);

// Reset function
const reset = () => {
  clearInterval(interval);

  timeDiv.textContent = "---";

  flag = true;
};

// Reset listener
resetBtn.addEventListener(`click`, reset);
