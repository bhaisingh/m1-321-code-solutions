/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var outSwap = '';
  for (var i = 0; i <= string.length - 1; ++i) {
    if (i === firstIndex) {
      outSwap += string[secondIndex];
    } else if (i === secondIndex) {
      outSwap += string[firstIndex];
    } else {
      outSwap += string[i];
    }
  }
  return outSwap;
}
