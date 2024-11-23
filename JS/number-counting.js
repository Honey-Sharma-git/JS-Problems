//Selecting elements
const generateButtonElement = document.querySelector(".js-button-generate");
//Adding event listeners
generateButtonElement.addEventListener("click", () => {
  generate();
});

function generate() {
  saveValue();
  createCounting();
  displayCounting();
}

let startNum;
let endNum;
let countingStep;
function saveValue() {
  startNum = Number(document.querySelector(".js-input-startNum").value);
  endNum = Number(document.querySelector(".js-input-endNum").value);
  countingStep = Number(document.querySelector(".js-input-countingStep").value);
}

let countingElement = 0;
const countingArray = [];
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
    html = `<p>${num}</p>`;
    counting = counting + html;
    document.querySelector(".js-article__title").innerHTML = counting;
  }
}
