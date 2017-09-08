const playerNodes = document.querySelectorAll('.player');
for (let i = 0; i < playerNodes.length; i++) {

  playerNodes[i].addEventListener('mousedown', (e) => {
    console.log('Started tracking..');

    let pointer = new Pointer('lul', e.clientX, e.clientY);
    window.addEventListener('mousemove', mouseMove);

    window.addEventListener('mouseup', function stopTracking(e) {
      console.log('Stopped tracking!');
      pointer.destroy();
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseup', stopTracking);
    });

    function mouseMove(e) {
      movePlayer.call(pointer, e);
    }
  });

}

function movePlayer(e) {
  this.hide();
  const hoverElement = document.elementFromPoint(e.clientX, e.clientY);
  if (hoverElement.classList.contains('rail') || hoverElement.classList.contains('stop') || hoverElement.classList.contains('player')) {
    this.move(e.clientX, e.clientY);
  }
  this.show();
}
