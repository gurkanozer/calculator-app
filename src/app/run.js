const run = (calculator, themeSwitch) => {
  //THEME SWITCHER
  themeSwitch.switches.forEach((ts) => {
    ts.addEventListener("click", (e) => {
      themeSwitch.changer(e.target.value);
    });
  });
  //CALCULATOR
  calculator.numberBtns.forEach((numberBtn) => {
    numberBtn.addEventListener("click", (e) => {
      calculator.pressedNumberKey(e);
    });
  });
  calculator.operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", (e) => {
      calculator.pressedOperatorKey(e);
    });
  });
  calculator.resetBtn.addEventListener("click", (e) => {
    calculator.pressedResetKey();
  });
  calculator.decimalBtn.addEventListener("click", () => {
    calculator.pressedDecimalKey();
  });
  calculator.deleteBtn.addEventListener("click", () => {
    calculator.pressedDeleteKey();
  });
  calculator.computeBtn.addEventListener("click", () => {
    calculator.pressedComputeKey();
  });

  console.log("app is running...");
};

export default run;
