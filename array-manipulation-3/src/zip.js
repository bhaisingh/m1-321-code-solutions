/* exported zip */

function zip(first, second) {
  var arrayOut = [];
  var tempArray = [];
  var arrayLength = 0;
  if (first.length > second.length) {
    arrayLength = second.length;
  } else {
    arrayLength = first.length;
  }
  for (var i = 0; i < arrayLength; i++) {
    tempArray.push(first[i]);
    tempArray.push(second[i]);
    arrayOut.push(tempArray);
    tempArray = [];
  }
  return arrayOut;
}
