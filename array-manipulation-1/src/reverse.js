/* exported reverse */

function reverse(array) {
  var reverseArray = [];
  var i = array.length;
  while (i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}
