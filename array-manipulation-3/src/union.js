/* exported union */
function union(first, second) {
  var outArray = [];
  for (var i = 0; i < first.length; i++) {
    outArray.push(first[i]);
  }

  for (i = 0; i < second.length; i++) {
    if (outArray.indexOf(second[i]) === -1) {
      outArray.push(second[i]);
    }
  }
  return outArray;
}
