class Pointer {
  constructor(color, x, y) {
    this.color = color;
    this.x = x;
    this.y = y;

    this.paint();
  }

  paint() {
    const pointer = document.createElement('div');
    this.node = pointer;

    pointer.classList.add('pointer');
    pointer.style.transform = 'translate3d(' + (this.x - 10) + 'px, ' + (this.y - 10) + 'px, 0px)';
    document.body.appendChild(pointer);
  }

  destroy() {
    document.body.removeChild(this.node);
  }

  move(x, y) {
    this.x = x;
    this.y = y;
    this.node.style.transform = 'translate3d(' + (this.x - 10) + 'px, ' + (this.y - 10) + 'px, 0px)';
  }

  hide() {
    this.node.style.display = 'none';
  }

  show() {
    this.node.style.display = 'block';
  }
}
