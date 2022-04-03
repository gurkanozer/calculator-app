class Calculator {
  constructor(
    numberBtns,
    operatorBtns,
    deleteBtn,
    decimalBtn,
    resetBtn,
    computeBtn,
    display
  ) {
    this.numberBtns = numberBtns;
    this.operatorBtns = operatorBtns;
    this.deleteBtn = deleteBtn;
    this.decimalBtn = decimalBtn;
    this.resetBtn = resetBtn;
    this.computeBtn = computeBtn;
    this.display = display;
    this.operators = ["+", "-", "*", "/"];
    this.totalChar = 0;
  }
  //PRIVATE FUNCTIONS
  _getLastNumber(item, op) {
    return item.split(op).pop();
  }
  _numberWitoutCommas(x) {
    return x.replace(/,/g, "");
  }
  _numberWithCommas(x) {
    return x
      .replace(/,/g, "")
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  _decimalCounter(x) {
    let counter = 0;
    let found = false;
    x.split("").forEach((y) => {
      if (y === ".") found = true;
      if (found) {
        counter++;
      }
    });
    return counter;
  }
  //GLOBAL FUNCTIONS
  pressedNumberKey(e) {
    const { value } = e.target;
    let currentDisplay = this.display.innerHTML;
    let zeros = this._decimalCounter(
      this._getLastNumber(currentDisplay, /[+ * \/ -]/)
    );
    if (zeros < 5 && this.totalChar < 16)
      if (currentDisplay == "0" || currentDisplay == "NaN") {
        this.display.innerHTML = value;
      } else {
        this.display.innerHTML = this._numberWithCommas(
          this.display.innerHTML + value
        );
        this.totalChar++;
      }
  }
  pressedOperatorKey(e) {
    const { value } = e.target;
    let display = this.display.innerHTML;
    let lastItem = this._getLastNumber(display, "");
    if (this.totalChar < 16)
      if (this.operators.indexOf(lastItem) > -1 || lastItem === ".") {
        this.display.innerHTML =
          display.substring(0, display.length - 1) + value;
      } else {
        this.display.innerHTML += value;
        this.totalChar++;
      }
  }
  pressedResetKey() {
    this.display.innerHTML = "0";
    this.totalChar = 0;
  }
  pressedDecimalKey() {
    let display = this.display.innerHTML;
    let partial = this._getLastNumber(display, /[+ * \/ -]/);
    let result = partial.indexOf(".");
    let lastItem = this._getLastNumber(display, "");
    if (result < 0 && this.operators.indexOf(lastItem) === -1)
      this.display.innerHTML += ".";
  }
  pressedDeleteKey() {
    let display = this.display.innerHTML;
    if (display === "NaN") this.display.innerHTML = 0;
    else if (display.length > 1) {
      this.display.innerHTML = this._numberWithCommas(
        display.substring(0, display.length - 1)
      );
      this.totalChar--;
    } else {
      this.display.innerHTML = 0;
      this.totalChar = 0;
    }
  }
  pressedComputeKey() {
    let result;
    let data = this._numberWitoutCommas(this.display.innerHTML);
    //tnx for this regex for stackoverflow
    //https://stackoverflow.com/questions/41122093/regular-expression-for-division-by-0
    if (data.match(/.*\/0([^.]|$|\.(0{4,}.*|0{1,4}([^0-9]|$))).*/g))
      result = "NaN";
    else result = new Function("return " + data)();
    this.counter = 0;
    this.operationCount = 0;
    this.totalChar = 0;
    if (result === "NaN") this.display.innerHTML = "NaN";
    else
      this.display.innerHTML = this._numberWithCommas(
        String(parseFloat(result.toFixed(4)))
      );
  }
}
export default Calculator;
