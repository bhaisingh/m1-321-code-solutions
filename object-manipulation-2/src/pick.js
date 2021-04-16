/* exported pick */

function pick(source, keys) {
  var outPick = {};
  for (var i = 0; i <= keys.length - 1; ++i) {
    if (keys[i] in source && source[keys[i]] !== undefined) {
      outPick[keys[i]] = source[keys[i]];
    }
  }
  return outPick;
}
