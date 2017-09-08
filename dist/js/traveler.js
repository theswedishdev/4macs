"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Traveler = function Traveler(color) {
  _classCallCheck(this, Traveler);

  this.color = color;
  this.stop = stops[Math.floor(Math.random() * stops.length)];
  this.stop.addTraveler(this);
};