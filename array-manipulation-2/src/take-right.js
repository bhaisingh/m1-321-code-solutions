/* exported takeRight */

function takeRight(array, count) {
  var outRightArray = [];
  if (array.length > 0) {
    var startItem = array.length - count;
    for (startItem; startItem <= (array.length - 1); ++startItem) {
      outRightArray.push(array[startItem]);
    }
  }
  return outRightArray;
}
