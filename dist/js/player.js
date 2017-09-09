'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function Player(color) {
  _classCallCheck(this, Player);

  // Set the start node for the player.
  this.start = document.querySelector('.player.' + color.name);
  this.color = color;

  this.start.addEventListener('touchstart', mouseDownHandler.bind(this));

  function mouseDownHandler(e) {
    e.preventDefault();
    console.log('Started tracking..');

    var x = e.touches ? e.touches[0].clientX : e.clientX;
    var y = e.touches ? e.touches[0].clientY : e.clientY;

    var pointer = new Pointer(this.color, x, y);
    // window.addEventListener('mousemove', mouseMove);
    window.addEventListener('touchmove', mouseMove);

    // window.addEventListener('mouseup', function stopTracking(e) {
    //   console.log('Stopped tracking!');
    //   pointer.destroy();
    //   window.removeEventListener('mousemove', mouseMove);
    //   window.removeEventListener('mouseup', stopTracking);
    // });

    window.addEventListener('touchend', function stopTracking(e) {
      e.preventDefault();
      console.log('Stopped tracking!');
      pointer.destroy();
      window.removeEventListener('touchmove', mouseMove);
      window.removeEventListener('touchend', stopTracking);

      stops.forEach(function (stop) {
        stop.node.style.fill = '#353535';
      });
    });

    function mouseMove(e) {
      e.preventDefault();
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
      if (hoverElement.classList.contains('stop')) {
        hoverElement.style.fill = this.color.hex;
      }
    }
    this.show();
  }
};