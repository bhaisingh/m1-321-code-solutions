/* exported getKeys */

function getKeys(object) {
  var objectKeys = [];
  for (var key in object) {
    objectKeys.push(key);
  }
  return objectKeys;
}
