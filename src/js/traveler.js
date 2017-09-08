class Traveler {
  constructor(color) {
    this.color = color;
    this.stop = stops[Math.floor(Math.random() * stops.length)];
    this.stop.addTraveler(this);
  }
}
