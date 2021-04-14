/* exported chunk */

function chunk(array, size) {
  var outChunkArray = [];
  var outTempArray = [];
  if (array.length > 0) {
    for (var i = 0; i <= (array.length - 1); ++i) {
      outTempArray.push(array[i]);
      if (outTempArray.length === size) {
        outChunkArray.push(outTempArray);
        outTempArray = [];
      }
    }
    if (outTempArray.length > 0) {
      outChunkArray.push(outTempArray);
    }
  }
  return outChunkArray;
}
