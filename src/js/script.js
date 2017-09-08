const playerNodes = document.querySelectorAll('.player');
for (let i = 0; i < playerNodes.length; i++) {

  playerNodes[i].addEventListener('mousedown', () => {
    window.addEventListener('mousemove', movePlayer);
  });

  playerNodes[i].addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', movePlayer);
  });

}

function movePlayer() {

}

// Example of how we can do hover over (touch over).
window.addEventListener('mousemove', (e) => {
  const hoverElement = document.elementFromPoint(e.clientX, e.clientY);
  if (hoverElement.classList.contains('rail')) {
    console.log(hoverElement.classList.contains('rail'));
  }
});

window.addEventListener('touchmove', (e) => {
  const hoverElement = document.elementFromPoint(e.clientX, e.clientY);
});
