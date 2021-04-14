/* exported dropRight */

function dropRight(array, count) {
  var outDropArray = [];
  if (array.length > 0) {
    var endItem = array.length - count;
    for (var i = 0; i < endItem; ++i) {
      outDropArray.push(array[i]);
    }
  }
  return outDropArray;
}
