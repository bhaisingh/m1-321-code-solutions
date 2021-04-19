var switchStatus = 'on';

var $checkOuter = document.querySelector('.outer');
var $checkCircle = document.querySelector('.circle');

$checkOuter.addEventListener('click', function () {
  if (switchStatus === 'on') {
    switchStatus = 'off';
    $checkOuter.className = 'outer outer-color-off';
    $checkCircle.className = 'circle circle-color-off';
  } else {
    switchStatus = 'on';
    $checkOuter.className = 'outer outer-color-on';
    $checkCircle.className = 'circle circle-color-on';
  }
});
