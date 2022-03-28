var lettersArray = document.querySelectorAll('span');
var letterIndex = 0;

document.addEventListener('keydown', function (event) {
  if (event.key === lettersArray[letterIndex].textContent) {
    lettersArray[letterIndex].id = 'correct';
    lettersArray[letterIndex + 1].id = 'selected';
    letterIndex++;
  } else {
    lettersArray[letterIndex].id = 'wrong';
  }
})
