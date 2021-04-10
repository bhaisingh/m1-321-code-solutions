/* exported countdown */

function countdown(number) {
  var downArray = [];
  for (var i = number; i >= 0; --i) {
    downArray.push(i);
  }
  return downArray;
}
