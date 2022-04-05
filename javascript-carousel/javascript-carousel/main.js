var imagesArray = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var imgIndex = 0;
var $chevronLeft = document.querySelector('.fa-chevron-left');
var $chevronRight = document.querySelector('.fa-chevron-right');

window.addEventListener('DOMContentLoaded', createDots);

function createDots() {
  var divDots = document.querySelector('.img-select-dots');
  for (var i = 0; i < imagesArray.length; i++) {
    var dotElement = document.createElement('i');
    dotElement.className = 'fa-regular fa-circle icon-style';
    divDots.appendChild(dotElement);
  }

  if (imgIndex === 0) {
    var dotsArray = document.querySelectorAll('.fa-circle');
    dotsArray[0].className = 'fa-solid fa-circle icon-style'
  }
}

$chevronLeft.addEventListener('click', function () {
  if (imgIndex === 0) {
    imgIndex = imagesArray.length - 1;
  } else {
    imgIndex--;
  }
  changeDots();
  changeImg();
})

$chevronRight.addEventListener('click', function () {
  if (imgIndex === imagesArray.length - 1) {
    imgIndex = 0;
  } else {
    imgIndex++;
  }
  changeDots();
  changeImg();
})

function changeDots() {
  var dotsArray = document.querySelectorAll('.fa-circle');
  for (var i = 0; i < dotsArray.length; i++) {
    dotsArray[i].className = 'fa-regular fa-circle icon-style';
    if (dotsArray[imgIndex]) {
      dotsArray[imgIndex].className = 'fa-solid fa-circle icon-style'
    }
  }
}

function changeImg() {
  var img = document.querySelector('img');
  img.src = imagesArray[imgIndex];
}

var handle = setInterval(function() {
  if (imgIndex === imagesArray.length - 1) {
    imgIndex = 0;
  } else {
    imgIndex++;
  }
  changeDots();
  changeImg();
}, 3000);
