// script.js
  let display = document.getElementById('display');
  let currentInput = '';

  function updateDisplay() {
    display.textContent = currentInput || '0';
  }

  function appendNumber(number) {
    currentInput += number;
    updateDisplay();
  }

  function appendOperator(operator) {
    if (currentInput === '') return;
    const lastChar = currentInput.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
      currentInput = currentInput.slice(0, -1); // replace operator
    }
    currentInput += operator;
    updateDisplay();
  }

  function appendDot() {
    if (currentInput === '' || /[+\-*/]$/.test(currentInput)) {
      currentInput += '0.';
    } else {
      const parts = currentInput.split(/[+\-*/]/);
      const lastPart = parts[parts.length - 1];
      if (!lastPart.includes('.')) {
        currentInput += '.';
      }
    }
    updateDisplay();
  }

  function clearDisplay() {
    currentInput = '';
    updateDisplay();
  }

  function backspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
  }

  function calculate() {
    try {
      const result = eval(currentInput);
      currentInput = result.toString();
      updateDisplay();
    } catch {
      currentInput = 'Error';
      updateDisplay();
      setTimeout(() => {
        currentInput = '';
        updateDisplay();
      }, 1500);
    }
  }