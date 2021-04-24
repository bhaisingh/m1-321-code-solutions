var $spanFields = document.querySelectorAll('span');
var $body = document.querySelector('body');
var i = 0;

$body.addEventListener('keydown', function (e) {
  if (event.key === $spanFields[i].textContent ||
    ($spanFields[i].textContent === '\xa0' && event.keyCode === 32)) {
    $spanFields[i].className = 'letter correct';
    ++i;
    $spanFields[i].className = 'border';
  } else {
    $spanFields[i].className = 'letter wrong border';
  }
});
