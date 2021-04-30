/* exported flatten */
function flatten(array) {
  var outArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        outArray.push(array[i][j]);
      }
    } else {
      outArray.push(array[i]);
    }
  }
  return outArray;
}
