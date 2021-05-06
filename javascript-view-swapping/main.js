
var $tabContainer = document.querySelector('.tab-container');
var $classTab = document.querySelectorAll('.tab');
var $classView = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (e) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $classTab.length; i++) {
      if ($classTab[i] === event.target) {
        $classTab[i].className = 'tab active';
      } else {
        $classTab[i].className = 'tab';
      }
    }
    var $dataViewAttr = event.target.getAttribute('data-view');
    for (var j = 0; j < $classView.length; j++) {
      if ($classView[j].getAttribute('data-view') === $dataViewAttr) {
        $classView[j].className = 'view';
      } else {
        $classView[j].className = 'hidden';
      }
    }
  }
});
