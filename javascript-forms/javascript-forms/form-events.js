var userNameInput = document.querySelector('#user-name');
var userEmailInput = document.querySelector('#user-email');
var userMessageInput = document.querySelector('#user-message');

function handleFocus(event) {
  console.log('focus event fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}

userNameInput.addEventListener('focus',handleFocus);
userNameInput.addEventListener('blur', handleBlur);
userNameInput.addEventListener('input', handleInput);

userEmailInput.addEventListener('focus',handleFocus);
userEmailInput.addEventListener('blur', handleBlur);
userEmailInput.addEventListener('input', handleInput);

userMessageInput.addEventListener('focus',handleFocus);
userMessageInput.addEventListener('blur', handleBlur);
userMessageInput.addEventListener('input', handleInput);
