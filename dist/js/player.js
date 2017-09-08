'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function Player(color) {
  _classCallCheck(this, Player);

  // Set the start node for the player.
  this.start = document.querySelector('.player.' + color);
  this.color = color;
};