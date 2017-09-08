// Example of how we can do hover over (touch over).
window.addEventListener('mousemove', (e) => {
  const hoverElement = document.elementFromPoint(e.clientX, e.clientY);
});

window.addEventListener('touchmove', (e) => {
  const hoverElement = document.elementFromPoint(e.clientX, e.clientY);
});
