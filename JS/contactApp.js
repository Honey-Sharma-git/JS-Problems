 //Selecting elements:
 const fNameInput = document.getElementById("fName");
 const lNameInput = document.getElementById("lName");
 const phoneInput = document.getElementById("phone");
 const formElement = document.getElementById("form");
 const buttonElement = document.getElementById("savebutton");
 const paraElement = document.getElementById("contactPara");
 //Adding event listeners:
 formElement.addEventListener("click", (event) => {
   event.preventDefault();
 });
 fNameInput.addEventListener("blur", () => {
   fNameInput.value = fNameInput.value.toUpperCase();
 });
 lNameInput.addEventListener("blur", () => {
   lNameInput.value = lNameInput.value.toUpperCase();
 });
 buttonElement.addEventListener("click", () => {
   saveContact();
   //Clearing input fields for next entry:
   clearInputField();
   displayList();
 });
 const contactList = [];
 function displayList() {
   let html = "";
   contactList.forEach((value) => {
     html =
       html + `<p>${value.firstName} ${value.lastName} ${value.phone}</p>`;
   });
   paraElement.innerHTML = html;
   console.log(contactList);
   console.log(html);
 }

 function saveContact() {
   //Taking new userDetails object:
   const userDetails = {};
   //Entering contact details:
   userDetails.firstName = fNameInput.value;
   userDetails.lastName = lNameInput.value;
   userDetails.phone = phoneInput.value;
   //Storing contacts into array:
   contactList.push(userDetails);
 }
 function clearInputField() {
   fNameInput.value = "";
   lNameInput.value = "";
   phoneInput.value = "";
 }