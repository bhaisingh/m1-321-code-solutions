/* exported filterOutStrings */

function filterOutStrings(values) {
  var noString = [];
  for (var i = 0; i <= (values.length - 1); ++i) {
    if (typeof (values[i]) === 'number') {
      noString.push(values[i]);
    }
  }
  return noString;
}
