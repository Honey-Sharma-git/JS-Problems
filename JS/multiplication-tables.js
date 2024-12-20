function generateTable() {
    getNumber();
    doMultiplication();
    displayTable();
  }
  let number = 0;
  function getNumber() {
    number = Number(document.querySelector(".js-input").value);
  }
  let product = 0;
  let i;
  let multiplicationTable = [];
  function doMultiplication() {
    for (i = 1; i <= 10; i++) {
      product = number * i;
      let productLine = `${number} x ${i} = ${product}`;
      multiplicationTable.push(productLine);
    }
  }
  let tableSet = "";
  function displayTable() {
    for (let i = 0; i < multiplicationTable.length; i++) {
      let productPara = multiplicationTable[i];
      let html = `<p>${productPara}</p>`;
      tableSet += html;
      document.querySelector(".js-output").innerHTML = tableSet;
    }
  }
  function resetInput(){
    document.querySelector(".js-output").innerHTML = '';
    document.querySelector(".js-input").value = '';
    multiplicationTable = [];
    tableSet ='';
    buttonElement.innerHTML = 'Generate';
    buttonElement.classList.remove('button-clicked');
  }
  function handleKeydown(event) {
    if(event.key === 'Enter'){
      generateTable();
    }else if(event.key === 'Backspace'){
      resetInput();
    }
  }

  const buttonElement = document.querySelector('.js-generate-button');
  function buttonClicked(){
    if(buttonElement.innerText === 'Generate'){
      buttonElement.innerHTML = 'Generated';
      buttonElement.classList.add('button-clicked');
    }
  }