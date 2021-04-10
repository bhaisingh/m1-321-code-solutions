/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var arrayOut = [];
  for (var i = 0; i <= (words.length - 1); ++i) {
    arrayOut.push(words[i] + suffix);
  }
  return arrayOut;
}
