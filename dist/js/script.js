'use strict';

var playerNodes = document.querySelectorAll('.player');
for (var i = 0; i < playerNodes.length; i++) {

  playerNodes[i].addEventListener('mousedown', function (e) {
    console.log('Started tracking..');

    var pointer = new Pointer('lul', e.clientX, e.clientY);
    window.addEventListener('mousemove', mouseMove);

    window.addEventListener('mouseup', function stopTracking(e) {
      console.log('Stopped tracking!');
      pointer.destroy();
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseup', stopTracking);
      removePointer(focusPointer);
    });

    function mouseMove(e) {
      movePlayer.call(pointer, e);
    }
  });
}

function movePlayer(e) {
  this.hide();
  var hoverElement = document.elementFromPoint(e.clientX, e.clientY);
  if (hoverElement.classList.contains('rail') || hoverElement.classList.contains('stop') || hoverElement.classList.contains('player')) {
    this.move(e.clientX, e.clientY);
  }
  this.show();
}