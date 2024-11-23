//Selecting elements
const generateButtonElement = document.querySelector(".js-button-generate");
const resetButtonElement = document.querySelector(".js-reset-button");

//Adding event listeners
generateButtonElement.addEventListener("click", () => {
  generate();
});
resetButtonElement.addEventListener("click", () => {
  reset();
});

//To reset:
function reset() {
  countingArray = [];
  counting = "";
  document.querySelector(".js-article__title").innerHTML = "";
}

//Generating counting numbers
function generate() {
  saveValue();
  createCounting();
  displayCounting();
}

let startNum;
let endNum;
let countingStep;

//Selecting and saving values
function saveValue() {
  startNum = Number(document.querySelector(".js-input-startNum").value);
  endNum = Number(document.querySelector(".js-input-endNum").value);
  countingStep = Number(document.querySelector(".js-input-countingStep").value);
}

let countingElement = 0;
let countingArray = [];
function createCounting() {
  for (let i = startNum; i <= endNum; i += countingStep) {
    countingElement = i;
    countingArray.push(countingElement);
  }
}
let num = 0;
let counting = "";
let html;
function displayCounting() {
  for (let i = 0; i <= countingArray.length - 1; i++) {
    num = countingArray[i];
    html = `<p class="num">${num}</p>`;
    counting += html;
    document.querySelector(".js-article__title").innerHTML = counting;
  }
}
