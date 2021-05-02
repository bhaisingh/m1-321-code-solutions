/* exported isAnagram */
// @ts-check
function isAnagram(firstString, secondString) {
  var tempFirstString = '';
  var outFirstString = '';
  var tempSecondString = '';
  var outSecondString = '';

  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      if (outFirstString.length === 0) {
        outFirstString += firstString[i];
      } else {
        tempFirstString = '';
        for (var j = 0; j < outFirstString.length; j++) {
          if (firstString[i] <= outFirstString[j]) {
            tempFirstString = tempFirstString + firstString[i] + outFirstString.substring(j, outFirstString.length);
            outFirstString = tempFirstString;
            break;
          } else if (j === outFirstString.length - 1) {
            outFirstString = outFirstString + firstString[i];
            break;
          } else {
            tempFirstString += outFirstString[j];
          }
        }
      }
    }
  }

  for (i = 0; i < secondString.length; i++) {
    if (secondString[i] !== ' ') {
      if (outSecondString.length === 0) {
        outSecondString += secondString[i];
      } else {
        tempSecondString = '';
        for (j = 0; j < outSecondString.length; j++) {
          if (secondString[i] <= outSecondString[j]) {
            tempSecondString = tempSecondString + secondString[i] + outSecondString.substring(j, outSecondString.length);
            outSecondString = tempSecondString;
            break;
          } else if (j === outSecondString.length - 1) {
            outSecondString = outSecondString + secondString[i];
            break;
          } else {
            tempSecondString += outSecondString[j];
          }
        }
      }
    }
  }

  if (outFirstString === outSecondString) {
    return true;
  }
  return false;
}
