/* exported firstChars */

function firstChars(length, string) {
  var outString = '';
  if (string.length > 0) {
    for (var i = 0; i < length && i < string.length; ++i) {
      outString += string[i];
    }
  }
  return outString;
}
