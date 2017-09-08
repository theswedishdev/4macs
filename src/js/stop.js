class Stop {
  constructor(node) {
    this.node = node;
    this.travelers = {};
  }

  addTraveler(traveler) {
    if (!this.travelers[traveler.color]) this.travelers[traveler.color] = [];
    this.travelers[traveler.color].push(traveler);
  }

  renderTravelers() {
    // There are five sizes for number of travelers.
    // 10px (1-5)
    // 15px (6 - 10)
    // 20px (11 - 15)
    // 25px (16 - 20)
    // 30px (21px and more
    const groups = Object.keys(this.travelers);
    if (!groups.length) return;

    groups.forEach((color) => {
      const travelers = this.travelers[color];
      let size = 10;

      // console.log(travelers.length);
      // console.log( (10 + ( 5 * ( Math.ceil((5 / travelers.length) - 1) ) )) );

      // console.log( 10 + (5 * ( Math.ceil((5 / this.travelers.lenght) - 1)  )) );
    });
  }
}
