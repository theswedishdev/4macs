'use strict';

var colors = ['red', 'yellow', 'purple', 'blue'];

var config = {
  playerCount: 4
};

var players = [];
for (var i = 0; i < config.playerCount; i++) {
  players.push(new Player(colors[i]));
}