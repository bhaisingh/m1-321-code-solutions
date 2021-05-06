/* exported reverseWords */
function reverseWords(string) {
  var outString = '';
  var stringArray = string.split(' ');

  for (var i = 0; i < stringArray.length; i++) {

    for (var j = stringArray[i].length - 1; j >= 0; j--) {
      outString = outString + stringArray[i][j];
    }
    if (i !== stringArray.length - 1) {
      outString += ' ';
    }
  }
  return outString;
}
