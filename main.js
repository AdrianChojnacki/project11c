// Selectors
const mainBtn = document.querySelector(`.main`);
const resetBtn = document.querySelector(`.reset`);
const timeDiv = document.querySelector(`.time`);

// Functions variables
let interval;
let time;
let seconds;
let milliseconds;
let savedSeconds = 0;
let savedMilliseconds = 0;
let flag = true;

// Start-stop function
const startStop = () => {
  let startTime = Date.now();

  if (flag) {
    interval = setInterval(() => {
      let nowTime = Date.now();
      time = nowTime - startTime;
      seconds = Math.floor(time / 1000);
      milliseconds = time % 1000;

      mainBtn.textContent = "Stop";
      timeDiv.textContent = `${savedSeconds + seconds}.${savedMilliseconds + milliseconds}`;
    }, 1);

    flag = !flag;
  } else {
    clearInterval(interval);

    savedSeconds += seconds;
    savedMilliseconds += milliseconds;

    mainBtn.textContent = "Start";

    flag = !flag;
  }
};

// Start-stop listener
mainBtn.addEventListener(`click`, startStop);

// Reset function
const reset = () => {
  clearInterval(interval);

  savedSeconds = 0;
  savedMilliseconds = 0;

  mainBtn.textContent = "Start";
  timeDiv.textContent = "---";

  flag = true;
};

// Reset listener
resetBtn.addEventListener(`click`, reset);
