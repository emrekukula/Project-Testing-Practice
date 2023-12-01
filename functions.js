function capitalize(str) {
  const cappedWord = str[0].toUpperCase() + str.substring(1);
  console.log(cappedWord);
  return cappedWord;
}

function reverseString(str) {
  const string = str.split('').reverse().join('');
  return string;
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function divide(x, y) {
  return x / y;
}

function multiply(x, y) {
  return x * y;
}

function caeserCipher(str) {
  var alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz -_.&?!@#/';
    
  var alphabets13 = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm -_.&?!@#/';

  let result = '';

  for( let i = 0; i < str.length; i++) {
    let charIndex = alphabets.indexOf(str[i])
    if (charIndex !== -1) {
      result += alphabets13[charIndex];
    } else {
      result += str[i];
    }
  }

  return result;
}

function analyzeArray(arr) {
  let tmp = 0;
  let avg;
  let min = arr[0];
  let max = 0;
  
  for ( let i = 0; i < arr.length; i++) {
    tmp += arr[i]
    avg = tmp / arr.length
    
    if ( max < arr[i]) {
      max = arr[i];
    }
    
    if ( min > arr[i]) {
      min = arr[i];
    }
  }
  
  let length = arr.length;

  let object = {
    average: avg,
    min: min,
    max: max,
    length: length,
  }
  
  return object;
}

console.log(analyzeArray([1,8,3,4,2,6]));

module.exports = {
  capitalize,
  reverseString,
  add,
  subtract,
  divide,
  multiply,
  caeserCipher,
  analyzeArray,
}