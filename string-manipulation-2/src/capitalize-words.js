/* exported capitalizeWords */

function capitalizeWords(string) {
  var outCapWords = '';
  var tempCapWordsArray = string.split(' ');
  for (var i = 0; i <= tempCapWordsArray.length - 1; ++i) {
    if (i > 0) {
      outCapWords += ' ';
    }
    for (var j = 0; j <= tempCapWordsArray[i].length - 1; ++j) {
      if (j === 0) {
        outCapWords += tempCapWordsArray[i][j].toUpperCase();
      } else {
        outCapWords += tempCapWordsArray[i][j].toLowerCase();
      }
    }
  }
  return outCapWords;
}
