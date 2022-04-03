import "./styles/main.css";
import { run, Calculator, ThemeSwitch, themes } from "./app";
//ROOT
const rootElement = document.documentElement;
//BUTTONS
const numberBtns = document.querySelectorAll(".key-number");
const operatorBtns = document.querySelectorAll(".key-operator");
const deleteBtn = document.querySelector("#key-delete");
const decimalBtn = document.querySelector("#key-decimal");
const resetBtn = document.querySelector("#key-reset");
const computeBtn = document.querySelector("#key-compute");
//THEME SWITCH
const themeSwitches = document.querySelectorAll(".theme-switch__input");
//SCREEN
const display = document.querySelector(".display");
//SERVICES
const calculator = new Calculator(
  numberBtns,
  operatorBtns,
  deleteBtn,
  decimalBtn,
  resetBtn,
  computeBtn,
  display
);
const themeSwitch = new ThemeSwitch(themeSwitches, themes, rootElement);
//RUN
run(calculator, themeSwitch);
