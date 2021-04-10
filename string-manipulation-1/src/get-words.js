/* exported getWords */

function getWords(string) {
  var retrunArray = [];
  if (string.length !== 0) {
    retrunArray = string.split(' ');
  }
  return retrunArray;
}
