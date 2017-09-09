'use strict';

// Use this as an introductional configuration, like number of players, difficulty etc.
// This can be extended to a UI solution later on, but for now it's just a static container.
var config = {
  playerCount: 4,
  spawnsPerPlayer: 16,
  extraSpawnsCount: 4
};

// Maybe use a longer Array of hex codes in the future
var colorList = [{ name: 'red', hex: '#e74c3c' }, { name: 'yellow', hex: '#f1c40f' }, { name: 'purple', hex: '#9b59b6' }, { name: 'blue', hex: '#3498db' }];

// Set up an Array of the players by iterating through the configured playerCount
var players = [];
for (var i = 0; i < config.playerCount; i++) {
  players.push(new Player(colorList[i]));
}

// Set up all stops.
var stops = [];
var stopNodes = document.querySelectorAll('rect');
for (var _i = 0; _i < stopNodes.length; _i++) {
  stops.push(new Stop(stopNodes[_i]));
}

var travelers = [];

players.forEach(function (player) {
  for (var _i2 = 0; _i2 < config.spawnsPerPlayer; _i2++) {
    // Spawn a new traveler with this players color.
    travelers.push(new Traveler(player.color));
  }
});

for (var _i3 = 0; _i3 < config.extraSpawnsCount; _i3++) {
  // Spawn a new traveler.
  travelers.push(new Traveler('neutral'));
}

stops.forEach(function (stop) {
  stop.renderTravelers();
});