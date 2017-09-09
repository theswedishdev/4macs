// Use this as an introductional configuration, like number of players, difficulty etc.
// This can be extended to a UI solution later on, but for now it's just a static container.
const config = {
  playerCount: 4,
  spawnsPerPlayer: 16,
  extraSpawnsCount: 4
};

// Maybe use a longer Array of hex codes in the future
const colorList = [ { name: 'red', hex: '#e74c3c' }, { name: 'yellow', hex: '#f1c40f' }, { name: 'purple', hex: '#9b59b6' }, { name: 'blue', hex: '#3498db'} ];

// Set up an Array of the players by iterating through the configured playerCount
let players = [];
for (let i = 0; i < config.playerCount; i++) {
  players.push( new Player(colorList[i]) );
}

// Set up all stops.
const stops = [];
const stopNodes = document.querySelectorAll('rect');
for (let i = 0; i < stopNodes.length; i++) {
  stops.push(new Stop(stopNodes[i]));
}

const travelers = [];

players.forEach((player) => {
  for (let i = 0; i < config.spawnsPerPlayer; i++) {
    // Spawn a new traveler with this players color.
    travelers.push( new Traveler(player.color) );
  }
});

for (let i = 0; i < config.extraSpawnsCount; i++) {
  // Spawn a new traveler.
  travelers.push( new Traveler('neutral') );
}

stops.forEach((stop) => {
  stop.renderTravelers();
});
