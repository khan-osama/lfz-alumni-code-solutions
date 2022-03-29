var tabContainer = document.querySelector('.tab-container');
var tabArr = document.querySelectorAll('.tab');
var viewArr = document.querySelectorAll('.view');

tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabArr.length; i++) {
      if (event.target === tabArr[i]) {
        tabArr[i].className = 'tab active';
      } else {
        tabArr[i].className = 'tab';
      }
    }

    var dataAttr = event.target.getAttribute('data-view');
    for (var i = 0; i < viewArr.length; i++) {
      if (dataAttr === viewArr[i].getAttribute('data-view')) {
        viewArr[i].className = 'view';
      } else {
        viewArr[i].className = 'view hidden';
      }
    }
  }
})
