const colors = [ 'red', 'yellow', 'purple', 'blue' ];

const config = {
  playerCount: 4
};


let players = [];
for (let i = 0; i < config.playerCount; i++) {
  players.push( new Player(colors[i]) );
}
