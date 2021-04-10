/* exported compact */

function compact(array) {
  var validateArray = [];
  for (var i = 0; i <= (array.length - 1); ++i) {
    if (array[i] !== false) {
      if (array[i] !== null) {
        if (Number.isNaN(array[i]) === false) {
          if (array[i] !== 0) {
            if (array[i] !== undefined) {
              if (array[i] !== '') {
                validateArray.push(array[i]);
              }
            }
          }
        }
      }
    }
  }
  return validateArray;
}
