// Selectors
const mainBtn = document.querySelector(`.main`);
const resetBtn = document.querySelector(`.reset`);
const timeDiv = document.querySelector(`.time`);

// Functions variables
let interval;
let time;
let seconds;
let savedTime = 0;
let flag = true;

// Stopwatch function
const timer = () => {
  let startTime = Date.now();

  if (flag) {
    interval = setInterval(() => {
      let nowTime = Date.now();
      time = nowTime - startTime;
      seconds = (time + savedTime) / 1000;

      mainBtn.textContent = "Stop";
      timeDiv.textContent = `${(Math.round(seconds * 100) / 100).toFixed(2)}`;
    }, 10);

    flag = !flag;
  } else {
    clearInterval(interval);

    savedTime += time;

    mainBtn.textContent = "Start";

    flag = !flag;
  }
};

// Main listener
mainBtn.addEventListener(`click`, timer);

// Reset function
const reset = () => {
  clearInterval(interval);

  savedTime = 0;

  mainBtn.textContent = "Start";
  timeDiv.textContent = "---";

  flag = true;
};

// Reset listener
resetBtn.addEventListener(`click`, reset);
