var switchStatus = 'off';
var $checkPopup = '';

var $checkButton = document.querySelector('.openSesame');

$checkButton.addEventListener('click', function () {
  if (switchStatus === 'off') {
    switchStatus = 'on';
    $checkPopup = document.querySelector('.popUpBoxOff');
    $checkPopup.className = 'popUpBoxOn';
  }
});

var $noButton = document.querySelector('.noButton');

$noButton.addEventListener('click', function () {
  switchStatus = 'off';
  $checkPopup = document.querySelector('.popUpBoxOn');
  $checkPopup.className = 'popUpBoxOff';
});
