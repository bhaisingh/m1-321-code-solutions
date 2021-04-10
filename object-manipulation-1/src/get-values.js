/* exported getValues */

function getValues(object) {
  var objectValues = [];
  for (var key in object) {
    objectValues.push(object[key]);
  }
  return objectValues;
}
