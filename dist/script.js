const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()-_+=';


const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');
const passwordField = document.getElementById('password');
const lengthField = document.getElementById('length');
const upperCheck = document.getElementById('uppercase');
const lowerCheck = document.getElementById('lowercase');
const numberCheck = document.getElementById('numbers');
const symbolCheck = document.getElementById('symbols');

// generateButton

generateBtn.addEventListener('click', ()=>{
  const length = +lengthField.value;
  const includeUpper = upperCheck.checked;
  const includeLower = lowerCheck.checked;
  const includeNumber = numberCheck.checked;
  const includeSymbol = symbolCheck.checked;

  passwordField.value = generatePassword(length , includeUpper , includeLower , includeNumber ,includeSymbol);
});

// copy to clipboard

copyBtn.addEventListener('click' , () =>{
    passwordField.select();
    document.execCommand('copy');
    alert('Password Copied to Clipboard');
});

// password generate

function generatePassword(length , upper ,lower , number , symbol) {
   let generatedPassword = ' ';
   const typesCount = upper + lower + number + symbol;
   const typesArray = [{upper} ,{lower} ,{number} ,{symbol}].filter(item => Object.values(item)[0]);    

   if (typesCount === 0) {
     return ' ';
   }

   for (let i = 0; i < length; i+=typesCount) {
    typesArray.forEach(type => {
       const funcName = Object.keys(type)[0];
       generatedPassword += randomFunc[funcName]();


    });
    
   }

   const finalPassword = generatedPassword.slice(0, length+1);
  return finalPassword;
}
const randomFunc = {
    upper: () => upperLetters[Math.floor(Math.random() * upperLetters.length)],
    lower: () => lowerLetters[Math.floor(Math.random() * lowerLetters.length)],
    number: () => numbers[Math.floor(Math.random() * numbers.length)],
    symbol: () => symbols[Math.floor(Math.random() * symbols.length)]
  };