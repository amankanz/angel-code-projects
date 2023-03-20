function appendToResult(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function calculate() {
  let finalResult = eval(document.getElementById("result").value);
  document.getElementById("result").value = finalResult;
}
