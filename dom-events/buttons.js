// Click Event

function handleClick(event) {
  console.log('button clicked');
  console.log('event: ', event);
  console.log('event target: ', event.target);

}

var $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick, false);

// Mouseover Event

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event: ', event);
  console.log('event target: ', event.target);
}

var $mouseOver = document.querySelector('.hover-button');
$mouseOver.addEventListener('mouseover', handleMouseover, false);

// Double-click Event

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event: ', event);
  console.log('event target: ', event.target);
}

var $doubleClick = document.querySelector('.double-click-button');
$doubleClick.addEventListener('dblclick', handleDoubleClick, false);
