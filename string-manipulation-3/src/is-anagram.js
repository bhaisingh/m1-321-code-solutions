/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var tempFirstString = '';
  // var tempSecondString = '';
  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      if (tempFirstString.length === 0) {
        tempFirstString += firstString[i];
      } else {
        for (var j = 0; j < tempFirstString.length; j++) {
          if (firstString[i] <= tempFirstString[j]) {
            tempFirstString = firstString[i] + tempFirstString;
            break;
          } else if (j === tempFirstString.length - 1) {
            tempFirstString = tempFirstString + firstString[i];
          }
        }
      }
    }
  }
}
