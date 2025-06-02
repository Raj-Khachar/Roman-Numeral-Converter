document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements
  const numberInput = document.getElementById('number');
  const convertBtn = document.getElementById('convert-btn');
  const output = document.getElementById('output');

  // Add event listener to the convert button
  convertBtn.addEventListener('click', function() {
    convertToRoman();
  });

  // Add event listener for Enter key in the input field
  numberInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      convertToRoman();
    }
  });

  // Main conversion function
  function convertToRoman() {
    // Get the input value
    const num = numberInput.value;

    // Validation checks
    if (num === '') {
      output.textContent = 'Please enter a valid number';
      return;
    }

    // Convert to a number to perform checks
    const numValue = parseInt(num);

    if (numValue < 1) {
      output.textContent = 'Please enter a number greater than or equal to 1';
      return;
    }

    if (numValue >= 4000) {
      output.textContent = 'Please enter a number less than or equal to 3999';
      return;
    }

    // Convert the number to Roman numeral
    output.textContent = toRoman(numValue);
  }

  // Function to convert a number to Roman numeral
  function toRoman(num) {
    // Define the Roman numeral symbols and their values
    const romanNumerals = [
      { value: 1000, symbol: 'M' },
      { value: 900, symbol: 'CM' },
      { value: 500, symbol: 'D' },
      { value: 400, symbol: 'CD' },
      { value: 100, symbol: 'C' },
      { value: 90, symbol: 'XC' },
      { value: 50, symbol: 'L' },
      { value: 40, symbol: 'XL' },
      { value: 10, symbol: 'X' },
      { value: 9, symbol: 'IX' },
      { value: 5, symbol: 'V' },
      { value: 4, symbol: 'IV' },
      { value: 1, symbol: 'I' }
    ];
    
    let result = '';
    
    // Iterate through the romanNumerals array
    for (let i = 0; i < romanNumerals.length; i++) {
      // While the current value can be subtracted from the number
      while (num >= romanNumerals[i].value) {
        // Add the symbol to the result
        result += romanNumerals[i].symbol;
        // Subtract the value from the number
        num -= romanNumerals[i].value;
      }
    }
    
    return result;
  }
});