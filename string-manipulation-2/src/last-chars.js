/* exported lastChars */

function lastChars(length, string) {
  var outLastChars = '';
  var startChar = string.length - length;
  if (startChar < 0) {
    startChar = 0;
  }
  for (startChar; startChar < string.length; ++startChar) {
    outLastChars += string[startChar];
  }
  return outLastChars;
}
