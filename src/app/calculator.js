class Calculator {
  constructor(
    numberBtns,
    operatorBtns,
    deleteBtn,
    dotBtn,
    resetBtn,
    equalBtn,
    display
  ) {
    this.numbersBtn = numberBtns;
    this.operatorBtns = operatorBtns;
    this.deleteBtn = deleteBtn;
    this.dotBtn = dotBtn;
    this.resetBtn = resetBtn;
    this.equalBtn = equalBtn;
    this.display = display;
    this.operators = ["+", "-", "*", "/"];
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
  //GLOBAL FUNCTIONS
  pressedNumberKey(e) {
    const { value } = e.target;
    let currentDisplay = this.display.innerHTML;
    if (currentDisplay == "0" || currentDisplay == "NaN") {
      this.display.innerHTML = value;
    } else {
      this.display.innerHTML = this._numberWithCommas(
        this.display.innerHTML + value
      );
    }
  }
  pressedOperatorKey(e) {
    const { value } = e.target;
    let display = this.display.innerHTML;
    let lastItem = this._getLastNumber(display, "");
    if (this.operators.indexOf(lastItem) > -1 || lastItem === ".") {
      this.display.innerHTML = display.substring(0, display.length - 1) + value;
    } else {
      this.display.innerHTML += value;
    }
  }
  pressedResetKey() {
    this.display.innerHTML = "0";
  }
  pressedDotKey() {
    let display = this.display.innerHTML;
    let partial = this._getLastNumber(display, /[+ * \/ -]/);
    let result = partial.indexOf(".");
    let lastItem = this._getLastNumber(display, "");
    if (result < 0 && this.operators.indexOf(lastItem) === -1)
      this.display.innerHTML += ".";
  }
  pressedDeleteKey() {
    let display = this.display.innerHTML;

    if (display.length > 1)
      this.display.innerHTML = this._numberWithCommas(
        display.substring(0, display.length - 1)
      );
    else this.display.innerHTML = 0;
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
    this.display.innerHTML = this._numberWithCommas(String(result));
  }
}
export default Calculator;