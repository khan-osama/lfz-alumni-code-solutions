var countdown = 3;

var handle = setInterval(function() {
  var h1 = document.querySelector('h1');
  h1.textContent = countdown;
  countdown--;
  if (h1.textContent === '0') {
    h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(handle);
  }
}, 1000);
