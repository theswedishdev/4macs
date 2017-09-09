'use strict';

var playerNodes = document.querySelectorAll('.player');
for (var i = 0; i < playerNodes.length; i++) {

  // playerNodes[i].addEventListener('mousedown', mouseDownHandler);
  playerNodes[i].addEventListener('touchstart', mouseDownHandler);
}

function mouseDownHandler(e) {
  console.log('Started tracking..');

  var x = e.touches ? e.touches[0].clientX : e.clientX;
  var y = e.touches ? e.touches[0].clientY : e.clientY;

  var pointer = new Pointer('lul', x, y);
  // window.addEventListener('mousemove', mouseMove);
  window.addEventListener('touchmove', mouseMove);

  // window.addEventListener('mouseup', function stopTracking(e) {
  //   console.log('Stopped tracking!');
  //   pointer.destroy();
  //   window.removeEventListener('mousemove', mouseMove);
  //   window.removeEventListener('mouseup', stopTracking);
  // });

  window.addEventListener('touchend', function stopTracking(e) {
    console.log('Stopped tracking!');
    pointer.destroy();
    window.removeEventListener('touchmove', mouseMove);
    window.removeEventListener('touchend', stopTracking);
  });

  function mouseMove(e) {
    movePlayer.call(pointer, e);
  }
}

function movePlayer(e) {
  var x = e.touches ? e.touches[0].clientX : e.clientX;
  var y = e.touches ? e.touches[0].clientY : e.clientY;

  this.hide();
  var hoverElement = document.elementFromPoint(x, y);
  if (hoverElement.classList.contains('rail') || hoverElement.classList.contains('stop') || hoverElement.classList.contains('player')) {
    this.move(x, y);
  }
  this.show();
}