import "./styles/main.css";
import { run, Calculator } from "./app";
//BUTTONS
const numberBtns = document.querySelectorAll(".key-number");
const operatorBtns = document.querySelectorAll(".key-operator");
const deleteBtn = document.querySelector("#key-delete");
const dotBtn = document.querySelector("#key-dot");
const resetBtn = document.querySelector("#key-reset");
const equalBtn = document.querySelector("#key-compute");
//THEME SWITCH
const themeSwitch = document.querySelector(".theme-switch__input");
//SCREEN
const display = document.querySelector(".display");
//SERVICES
const calculator = new Calculator(
  numberBtns,
  operatorBtns,
  deleteBtn,
  dotBtn,
  resetBtn,
  equalBtn,
  display
);

numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", (e) => {
    calculator.pressedNumberKey(e);
  });
});
operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", (e) => {
    calculator.pressedOperatorKey(e);
  });
});
resetBtn.addEventListener("click", (e) => {
  calculator.pressedResetKey();
});
dotBtn.addEventListener("click", () => {
  calculator.pressedDotKey();
});
deleteBtn.addEventListener("click", () => {
  calculator.pressedDeleteKey();
});
equalBtn.addEventListener("click", () => {
  calculator.pressedComputeKey();
});
run();
