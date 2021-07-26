"use strict";

//Selectors
const enterItem = document.querySelector(".enter-item");
const btn = document.querySelector(".btn");
const shoppingList = document.querySelector(".shopping-list");

//Event Listeners

//Functions

//Add item
const addToList = () => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    //create div
    const listDiv = document.createElement("div");
    listDiv.classList.add("list");

    //create list item
    const listItem = document.createElement("li");
    listItem.innerText = enterItem.value;
    listItem.classList.add("list-item");
    listDiv.append(listItem);

    //check mark
    const checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add("check-btn");
    listDiv.append(checkButton);
    checkButton.addEventListener("click", () => {
      checkButton.parentElement.classList.toggle("completed");
      shoppingList.append(listDiv);
    });

    //trash
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    listDiv.append(trashButton);
    trashButton.addEventListener("click", () => {
      trashButton.parentElement.remove();
    });

    //append to shopping list
    shoppingList.append(listDiv);

    //clear list item
    enterItem.value = "";
  });
};

addToList();
