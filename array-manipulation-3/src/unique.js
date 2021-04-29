/* exported unique */
function unique(array) {
  var outArray = [];
  for (var i = 0; i < array.length; i++) {
    if (outArray.indexOf(array[i]) === -1) {
      outArray.push(array[i]);
    }
  }
  return outArray;
}
