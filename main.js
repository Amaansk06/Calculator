let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('display').value = displayValue;
}

function toggleNegation() {
  if (displayValue.charAt(0) === '-') {
    displayValue = displayValue.slice(1);
  } else {
    displayValue = '-' + displayValue;
  }
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    displayValue = '';
  }
}

function calculatePercentage() {
  const percentage = parseFloat(displayValue) / 100;
  document.getElementById('display').value = percentage;
  displayValue = percentage.toString();
}


function multiply() {
  appendToDisplay('*');
}


function divide() {
  appendToDisplay('/');
}
