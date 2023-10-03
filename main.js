// DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbols: getRandomSymbol
};

// Generate event listener
generateEl.addEventListener('click', () => {
  const length = +lengthRangeEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  const generatedPassword = generatePassword(
      hasLower,
      hasUpper,
      hasNumber,
      hasSymbol,
      length
  );

  displayPasswordAsAsterisks(generatedPassword);
});


// Copy password to clipboard
clipboardEl.addEventListener('click', () => {
  const password = getPasswordForCopying();

  if (!password) {
    return;
  }

  copyPasswordToClipboard(password);
});

// Generate password function
function generatePassword(lower, upper, number, symbols, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbols;
  const typesArr = [{ lower }, { upper }, { number }, { symbols }].filter(
      item => Object.values(item)[0]
  );

  if (typesCount === 0) {
      return '';
  }

  for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach(type => {
          const funcName = Object.keys(type)[0];
          generatedPassword += randomFunc[funcName]();
      });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}


// Generator functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbol = '!@#$^&*(){}[]=<>/,.';
  return symbol[Math.floor(Math.random() * symbol.length)];
}

// Display the password as asterisks
function displayPasswordAsAsterisks(password) {
  resultEl.innerText = '*'.repeat(password.length);
  resultEl.dataset.actualPassword = password;
}

// Get the actual password for copying
function getPasswordForCopying() {
  return resultEl.dataset.actualPassword || '';
}

// Copy the password to clipboard
function copyPasswordToClipboard(password) {
  const textarea = document.createElement('textarea');
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
}


// Copy the password to clipboard
function copyPasswordToClipboard(password) {
    const textarea = document.createElement('textarea');
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  
    // Display a brief message indicating that the password has been copied
    const copyMessage = document.getElementById('copy-message');
    copyMessage.innerText = 'Password copied!';
    copyMessage.style.display = 'block';
  
    // Hide the message after a short delay
    setTimeout(() => {
      copyMessage.innerText = '';
      copyMessage.style.display = 'none';
    }, 3000); // Hide the message after 2 seconds (2000 milliseconds)
  }
  


const toggleVisibilityButton = document.getElementById('toggle-visibility');

// Event listener to toggle password visibility
toggleVisibilityButton.addEventListener('click', () => {
  const password = getPasswordForCopying();

  if (!password) {
    return;
  }

  // Toggle visibility by switching between actual password and asterisks
  if (resultEl.innerText === password) {
    resultEl.innerText = '*'.repeat(password.length);
  } else {
    resultEl.innerText = password;
  }
});


const generateButton = document.getElementById('generate');
const copyButton = document.getElementById('clipboard');

generateButton.addEventListener('click', () => {
    generateButton.classList.add('clicked');
    setTimeout(() => {
        generateButton.classList.remove('clicked');
    }, 200);
});

copyButton.addEventListener('click', () => {
    copyButton.classList.add('clicked');
    setTimeout(() => {
        copyButton.classList.remove('clicked');
    }, 200);
});


const lengthRangeEl = document.getElementById('lengthRange');
const lengthValueEl = document.getElementById('lengthValue');

lengthRangeEl.addEventListener('input', () => {
    const length = lengthRangeEl.value;
    lengthValueEl.textContent = length;
});

generateEl.addEventListener('click', () => {
    const length = +lengthRangeEl.value;
});
