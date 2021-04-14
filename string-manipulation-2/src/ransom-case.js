/* exported ransomCase */

function ransomCase(string) {
  var outRansom = '';
  for (var i = 0; i <= string.length - 1; ++i) {
    if ((i + 1) % 2 === 0) {
      outRansom += string[i].toUpperCase();
    } else {
      outRansom += string[i].toLowerCase();
    }
  }
  return outRansom;
}
