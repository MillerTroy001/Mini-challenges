"use strict";

// const snackOptions = [
//   { type: "Lime-cola", price: 2 },
//   { type: "Salted-Peanuts", price: 3 },
//   { type: "Chocolate-Bar", price: 4 },
//   { type: "Fruit-Gummies", price: 6 },
// ];

// let total = 0;
// const price = document.querySelector(".price");
// const snack = document.querySelector(".snack");
// const totalPrice = document.querySelector(".total-price");
// const snackButtons = document.querySelector("button");

// const addAmountToTotal = () => {};

// snackButtons.addEventListener("click", (e) => {
//   console.log(e.target);
// });

const snackButtons = document.querySelectorAll(".price");
const total = document.querySelector(".total-price");
const allSnackButtons = document.querySelectorAll(".vending-machine");
const limeSoda = document.querySelector(".lime");
const saltedPeanuts = document.querySelector(".peanuts");
const chocolateBar = document.querySelector(".chocolate");
const fruitGummies = document.querySelector(".gummies");
let runningTotal = 0;

let addPrice;
console.dir(allSnackButtons);

allSnackButtons.addEventListener("click", (e) => {
  //console.dir(e.target);
  // this is on "click" here
  if (e.target.classList.contains("lime")) {
    runningTotal = +2;
  } else if (e.target.classList.contains("peanuts")) {
    runningTotal = +3; //put the last loop learned here
  } else if (e.target.classList.contains("chocolate")) {
    runningTotal = +4;
  } else if (e.target.classList.contains("gummies")) {
    runningTotal = +6;
  }
  console.log(runningTotal);
});
//need the change text of a paragraph function in here after each loop

//I know this is close, I'm just havaing trouble wrapping my head around everything and getting it to work

// also my event listener wasn't working for the most part

//------------- #2

const changeForm = document.querySelector(".money-form");
const addChange = document.querySelector(".change-container");

changeForm.addEventListener("submit", (e) => {
  if (e.target.classList.contains("penny")) {
    const newPenny = document.createElement("div");
    newPenny.setAttribute("class", "penny");
    addChange.append(newPenny);
    console.dir(e.target);
  }
});

//Again, I know this is the right direction, I'm just getting lost where I'm adding in function inside.

// #3 is similar to 4, but it's changing the style of the button, rather than adding to the total.
//wasn't able to get to this one. spent a lot of time researching, but my mind just wasn't cooperating
