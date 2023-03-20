"use strict";

window.addEventListener("load", ready);

//start- funktion
function ready() {
  document.querySelector("#btn-add-item").addEventListener("click", addToDo);
}

// globale konstanter
const newToDo = document.querySelector("#input-new-to-do");
const list = document.querySelector("#to-do-list");

function addToDo() {
  const listItem = document.createElement("li");
  const listBtn = document.createElement("button");
  const listText = document.createElement("span");
  listBtn.textContent = "Delete";
  listText.textContent = newToDo.value;

  listItem.appendChild(listText);
  listItem.appendChild(listBtn);

  list.appendChild(listItem);

  listBtn.addEventListener("click", removeToDo);

  newToDo.value = "";
  newToDo.focus();
}

function removeToDo() {
  this.parentNode.remove();
}

// function addToDo() {
//   const myHTML = /html/`
//     <li>
//         <span>${newToDo.value}</span>
//         <button>Delete</button>
//     </li>`;
//   // at tilføje elementet i en bestemt position.
//   list.insertAdjacentHTML("beforeend", myHTML);

//   list
//     .querySelector("li:last-child button")
//     .addEventListener("click", removeToDo);

//   newToDo.value = " ";
// }

// function removeToDo() {
//   this.parentNode.remove();
// }

// "use strict";

// window.addEventListener("load", initApp);

// const newToDo = document.querySelector("#input-new-to-do");
// const list = document.querySelector("#to-do-list");

// function initapp() {
//   document.querySelector("btn-add-item").addEventListener(load, addToDo);
// }

// function addToDo() {
//   const uL = document.createElement("ul");
//   const newParagraph = document.querySelector("p")
//   uL.textContent = "Hey";
//   console.log(uL);
//   document.querySelector("body").appendChild(uL);
// }

// addToDo();
