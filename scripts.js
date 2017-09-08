// Amazing 😦
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}

draw();

// Example of how we can do hover over (touch over).
window.addEventListener('mousemove', (e) => {
  const hoverElement = document.elementFromPoint(e.clientX, e.clientY);
});

window.addEventListener('touchmove', (e) => {
  const hoverElement = document.elementFromPoint(e.clientX, e.clientY);
});
