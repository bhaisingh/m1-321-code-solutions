/* exported capitalize */

function capitalize(word) {
  var returnString = '';
  for (var i = 0; i <= (word.length - 1); ++i) {
    if (i === 0) {
      returnString += word[i].toUpperCase();
    } else {
      returnString += word[i].toLowerCase();
    }
  }
  return returnString;
}
