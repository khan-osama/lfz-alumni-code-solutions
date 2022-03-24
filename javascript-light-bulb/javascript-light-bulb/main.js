var lightbulb = document.querySelector('.lightbulb');
var background = document.querySelector('.lightbulb-container');
var isLightbulbOn = false;

lightbulb.addEventListener('click', function switchLightbulb() {
  if (isLightbulbOn === false) {
    lightbulb.className = 'lightbulb on';
    background.className = 'lightbulb-container on';
    isLightbulbOn = true;

  } else {
    lightbulb.className = 'lightbulb';
    background.className = 'lightbulb-container';
    isLightbulbOn = false;
  }
});
