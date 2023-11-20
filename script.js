function translateText() {
    const textInput = document.getElementById('inputText').value.toUpperCase();
    const outputText = document.getElementById('outputText');
  
    let translatedText = '';
    for (let i = 0; i < textInput.length; i++) {
      const char = textInput.charAt(i);
      let code;
      if (char === ' ') {
        code = 0;
      } else if (char >= 'A' && char <= 'Z') {
        code = char.charCodeAt(0) - 64;
      } else {
        continue;
      }
      translatedText += code + '-';
    }
    outputText.value = translatedText.slice(0, -1);
  }
  
  function translateNumbers() {
    const numbersInput = document.getElementById('inputNumbers').value;
    const outputNumbers = document.getElementById('outputNumbers');
    const error = document.getElementById('error');
  
    const numberPattern = /^([0-9]+|-([0-9]+))*$/;
    if (!numberPattern.test(numbersInput)) {
      error.textContent = 'Error: Invalid input format';
      outputNumbers.value = '';
      return;
    }
  
    const numbersArray = numbersInput.split('-');
    let translatedNumbers = '';
    numbersArray.forEach(number => {
      const parsedNumber = parseInt(number);
      if (parsedNumber >= 0 && parsedNumber <= 26) {
        if (parsedNumber === 0) {
          translatedNumbers += ' ';
        } else {
          const letter = String.fromCharCode(parsedNumber + 64);
          translatedNumbers += letter;
        }
      }
    });
    outputNumbers.value = translatedNumbers;
    error.textContent = '';
  }  