"use strict"

let newDivElement = document.createElement("div")
newDivElement.classList.add("wraper")

let newImgElement = document.createElement("img")

newDivElement.appendChild(newImgElement)

document.getElementById("container").appendChild(newDivElement)

let boxElement = document.querySelector(".box")

boxElement.addEventListener("click", function (event) {
  console.log(event.currentTarget)
});

let ulElement = document.querySelector(".ul-list")


let inputElement = document.getElementById("input-field")
let addBtn = document.querySelector(".btn-add")
let ulElementItems = document.querySelector(".ul-list-items")
let deleteAllItems = document.querySelector(".clearAll")
let formElement = document.getElementById("form-wraper")

formElement.addEventListener("submit", function (e) {
  e.preventDefault()
  let value = inputElement.value;
  
  if (value == " ") {
    addBtn.preventDefault
  }

  if (value == " ") {
    return
  }

  let li = document.createElement("li");
  let deleteBtn = document.createElement("button");
  let imgdelete = document.createElement("img")
  imgdelete.setAttribute('src', '4960488.png');
  imgdelete.setAttribute('width', '30');
deleteBtn.appendChild(imgdelete)

  deleteBtn.addEventListener("click", function () {
    li.remove()
  });

  li.textContent = value

  li.appendChild(deleteBtn)
  ulElementItems.appendChild(li)

  inputElement.value = " "
});

deleteAllItems.addEventListener("click", function (e) {
  ulElementItems.innerHTML = " "
})
let navigationElement = document.getElementById("navBar")
let burgerElement = document.getElementById("burgerBar")

burgerElement.addEventListener("click", function () {
  navigationElement.classList.toggle("navActive")
})
