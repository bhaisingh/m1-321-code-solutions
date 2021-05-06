/* exported isPalindromic */
function isPalindromic(string) {
  var outString = '';
  var stringLength = string.length - 1;
  for (var i = stringLength; i >= 0; i--) {
    if (string[i] === ' ') {
      outString = outString + string[i - 1] + ' ';
      i = i - 1;

    } else {
      outString = outString + string[i];
    }
  }
  if (outString === string) {
    return true;
  }
  return false;
}
