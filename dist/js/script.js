'use strict';

// Temporary variable to store the pointer in focus.
var focusPointer = void 0;

var playerNodes = document.querySelectorAll('.player');
for (var i = 0; i < playerNodes.length; i++) {

  playerNodes[i].addEventListener('mousedown', function (e) {
    console.log('Started tracking..');
    paintPointer(e.clientX, e.clientY);
    window.addEventListener('mousemove', movePlayer);

    window.addEventListener('mouseup', function stopTracking() {
      console.log('Stopped tracking!');
      window.removeEventListener('mousemove', movePlayer);
      window.removeEventListener('mouseup', stopTracking);
    });
  });
}

function movePlayer(e) {
  var hoverElement = document.elementFromPoint(e.clientX, e.clientY);
  if (hoverElement.classList.contains('rail') || hoverElement.classList.contains('stop')) {
    movePointer(focusPointer, e.clientX, e.clientY);
    console.log('I am on a ' + hoverElement.classList.value);
  }
}

function paintPointer(x, y) {
  var pointer = document.createElement('div');
  pointer.classList.add('pointer');
  pointer.style.top = y - 10 + 'px';
  pointer.style.left = x - 10 + 'px';
  document.body.appendChild(pointer);
  focusPointer = pointer;
}

function movePointer(pointer, x, y) {
  pointer.style.top = y - 10 + 'px';
  pointer.style.left = x - 10 + 'px';
}

// Example of how we can do hover over (touch over).
// window.addEventListener('mousemove', (e) => {
//
// });
//
// window.addEventListener('touchmove', (e) => {
//   const hoverElement = document.elementFromPoint(e.clientX, e.clientY);
// });