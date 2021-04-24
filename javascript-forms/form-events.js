function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name ', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name ', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name ', event.target.name);
  console.log('value of name ', event.target.value);
}

var $nameSelection = document.querySelector('#user-name');
var $emailSelection = document.querySelector('#user-email');
var $messageSelection = document.querySelector('#user-message');

$nameSelection.addEventListener('focus', handleFocus);
$nameSelection.addEventListener('blur', handleBlur);
$nameSelection.addEventListener('input', handleInput);

$emailSelection.addEventListener('focus', handleFocus);
$emailSelection.addEventListener('blur', handleBlur);
$emailSelection.addEventListener('input', handleInput);

$messageSelection.addEventListener('focus', handleFocus);
$messageSelection.addEventListener('blur', handleBlur);
$messageSelection.addEventListener('input', handleInput);
