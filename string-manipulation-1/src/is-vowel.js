/* exported isVowel */

function isVowel(char) {
  var vowelArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < (vowelArray.length - 1); ++i) {
    if (char === vowelArray[i]) {
      return true;
    }
  }
  return false;
}
