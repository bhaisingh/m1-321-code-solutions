/* exported difference */
function difference(first, second) {
  var outArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      outArray.push(first[i]);
    }
  }

  for (i = 0; i < second.length; i++) {
    if (first.indexOf(second[i]) === -1) {
      outArray.push(second[i]);
    }
  }
  return outArray;
}
