/* exported isUpperCased */

function isUpperCased(word) {
  for (var i = 0; i <= (word.length - 1); ++i) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
