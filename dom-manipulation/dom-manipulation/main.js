var numClicked = 0;
var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

hotButton.addEventListener('click', function addClicks() {
  numClicked++;
  clickCount.textContent = 'Clicks: ' + numClicked;
  if (numClicked < 4) {
    hotButton.className = 'hot-button cold';
  } else if (numClicked < 7) {
    hotButton.className = 'hot-button cool';
  } else if (numClicked < 10) {
    hotButton.className = 'hot-button tepid';
  } else if (numClicked < 13) {
    hotButton.className = 'hot-button warm';
  } else if (numClicked < 16) {
    hotButton.className = 'hot-button hot';
  } else {
    hotButton.className = 'hot-button nuclear';
  }
});
