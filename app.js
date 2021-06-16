const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector("button[data-action=start]"),
  stopBtn: document.querySelector("button[data-action=stop]"),
};

let timerId = null;
let isActive = false;

refs.startBtn.addEventListener("click", onStartBtnClick);
refs.stopBtn.addEventListener("click", onStopBtnClick);

function onStartBtnClick() {
  if (isActive) {
    return;
  }

  timerId = setInterval(setRandomColor, 1000, colors);
  isActive = true;
}

function onStopBtnClick() {
  clearInterval(timerId);
  isActive = false;
}

function setRandomColor(colors) {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length)];
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
