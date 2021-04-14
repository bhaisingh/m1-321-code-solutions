/* exported drop */

function drop(array, count) {
  var outDropArray = [];
  var itemNo = count;
  if (array.length > 0) {
    for (itemNo; itemNo <= (array.length - 1); ++itemNo) {
      outDropArray.push(array[itemNo]);
    }
  }
  return outDropArray;
}
