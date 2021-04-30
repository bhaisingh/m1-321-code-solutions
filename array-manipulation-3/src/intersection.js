/* exported intersection */
function intersection(first, second) {
  var outArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      outArray.push(first[i]);
    }
  }
  return outArray;
}
