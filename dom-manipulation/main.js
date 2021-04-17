var clickCount = 0;

var $checkHotButton = document.querySelector('.hot-button');
var $checkClickCount = document.querySelector('.click-count');

$checkHotButton.addEventListener('click', function () {
  clickCount += 1;
  $checkClickCount.textContent = 'Clicks: ' + clickCount;
  if (clickCount < 4) {
    $checkHotButton.className = 'hot-button cold';
  } else if (clickCount >= 4 && clickCount < 7) {
    $checkHotButton.className = 'hot-button cool';
  } else if (clickCount >= 7 && clickCount < 10) {
    $checkHotButton.className = 'hot-button tepid';
  } else if (clickCount >= 10 && clickCount < 13) {
    $checkHotButton.className = 'hot-button warm';
  } else if (clickCount >= 13 && clickCount < 16) {
    $checkHotButton.className = 'hot-button hot';
  } else {
    $checkHotButton.className = 'hot-button nuclear';
  }
});
