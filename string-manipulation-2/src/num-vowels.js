/* exported numVowels */

function numVowels(string) {
  var count = 0;
  var vowelString = 'aeiou';
  for (var i = 0; i <= string.length - 1; ++i) {
    for (var j = 0; j <= vowelString.length - 1; ++j) {
      if (string[i].toLowerCase() === vowelString[j]) {
        count += 1;
        break;
      }
    }
  }
  return count;
}
