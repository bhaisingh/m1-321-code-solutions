/* exported capitalizeWord */

function capitalizeWord(word) {
  var outString = '';
  if (word.toUpperCase() === 'JAVASCRIPT') {
    return 'JavaScript';
  } else {
    for (var i = 0; i <= word.length - 1; ++i) {
      if (i === 0) {
        outString += word[i].toUpperCase();
      } else {
        outString += word[i].toLowerCase();
      }
    }
    return outString;
  }
}
