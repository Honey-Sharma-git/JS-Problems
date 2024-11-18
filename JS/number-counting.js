
function generate(){
const startNum = Number(document.querySelector('.js-input-startNum').value);
const endNum = Number(document.querySelector('.js-input-endNum').value);
const countingStep =Number(document.querySelector('.js-input-countingStep').value);
for(let i = startNum; i <= endNum; i += countingStep){
    console.log(i);
}
}