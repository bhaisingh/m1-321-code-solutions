/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber += 1;
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumber = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumber.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumber;
}

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += word;
    count += 1;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    numbers[i] += numbers[i];
    doubled.push(numbers[i]);
  }
  return doubled;
}

function getKeys(object) {
  var keys = [];
  for (var eachKey in object) {
    keys.push(eachKey);
  }
  return keys;
}

function getValues(object) {
  var values = [];
  for (var eachKey in object) {
    values.push(object[eachKey]);
  }
  return values;
}
