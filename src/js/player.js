class Player {

  constructor(color) {
    // Set the start node for the player.
    this.start = document.querySelector('.player.' + color);
    this.color = color;
  }

}
