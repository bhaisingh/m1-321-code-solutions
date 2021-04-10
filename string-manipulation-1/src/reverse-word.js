/* exported reverseWord */

function reverseWord(word) {
  var reverseString = '';
  var i = word.length;
  while (i--) {
    reverseString += word[i];
  }
  return reverseString;
}
