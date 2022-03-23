var lightbulb = document.querySelector('.lightbulb');
var background = document.querySelector('.lightbulb-container');

lightbulb.addEventListener('click', function switchLightbulb() {
  if (lightbulb.className === 'lightbulb' && background.className === 'lightbulb-container') {
    lightbulb.className = 'lightbulb on';
    background.className = 'lightbulb-container on';
  } else {
    lightbulb.className = 'lightbulb';
    background.className = 'lightbulb-container';
  }
});
