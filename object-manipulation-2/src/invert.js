/* exported invert */

function invert(source) {
  var outInvert = {};
  for (var keys in source) {
    outInvert[source[keys]] = keys;
  }
  return outInvert;
}
