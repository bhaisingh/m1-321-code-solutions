/* exported take */

function take(array, count) {
  var outArray = [];
  if (array.length > 0) {
    for (var i = 0; i < count; ++i) {
      outArray.push(array[i]);
    }
  }
  return outArray;
}
