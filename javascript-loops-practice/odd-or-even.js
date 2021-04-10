/* exported oddOrEven */

function oddOrEven(numbers) {
  var oddEvenValue = [];
  for (var i = 0; i <= (numbers.length - 1); ++i) {
    if ((numbers[i] % 2) === 0) {
      oddEvenValue.push('even');
    } else {
      oddEvenValue.push('odd');
    }
  }
  return oddEvenValue;
}
