'use strict';

// Example of how we can do hover over (touch over).
window.addEventListener('mousemove', function (e) {
  var hoverElement = document.elementFromPoint(e.clientX, e.clientY);
});

window.addEventListener('touchmove', function (e) {
  var hoverElement = document.elementFromPoint(e.clientX, e.clientY);
});