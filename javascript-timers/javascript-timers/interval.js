var h1 = document.querySelector('h1');
var countdown = 3;

var handle = setInterval(function() {
  h1.textContent = countdown;
  countdown--;
  if (h1.textContent === '0') {
    h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(handle);
  }
}, 1000);
