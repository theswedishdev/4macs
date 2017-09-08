"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stop = function () {
  function Stop(node) {
    _classCallCheck(this, Stop);

    this.node = node;
    this.travelers = {};
  }

  _createClass(Stop, [{
    key: "addTraveler",
    value: function addTraveler(traveler) {
      if (!this.travelers[traveler.color]) this.travelers[traveler.color] = [];
      this.travelers[traveler.color].push(traveler);
    }
  }, {
    key: "renderTravelers",
    value: function renderTravelers() {
      var _this = this;

      // There are five sizes for number of travelers.
      // 10px (1-5)
      // 15px (6 - 10)
      // 20px (11 - 15)
      // 25px (16 - 20)
      // 30px (21px and more
      var groups = Object.keys(this.travelers);
      if (!groups.length) return;

      groups.forEach(function (color) {
        var travelers = _this.travelers[color];
        var size = 10;

        // console.log(travelers.length);
        // console.log( (10 + ( 5 * ( Math.ceil((5 / travelers.length) - 1) ) )) );

        // console.log( 10 + (5 * ( Math.ceil((5 / this.travelers.lenght) - 1)  )) );
      });
    }
  }]);

  return Stop;
}();