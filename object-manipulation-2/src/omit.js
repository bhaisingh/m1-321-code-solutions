/* exported omit */

function omit(source, keys) {
  var outOmit = {};
  for (var checkKeys in source) {
    for (var i = 0; i <= keys.length - 1; ++i) {
      if (checkKeys === keys[i]) {
        break;
      }
      if (i === keys.length - 1) {
        outOmit[checkKeys] = source[checkKeys];
      }
    }
  }
  return outOmit;
}
