var $usersList = document.querySelector('#user-list');

function getUserData() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log('xhr status: ', xhr.status);
    console.log('xhr response: ', xhr.response);

    for (var i = 0; i < xhr.response.length; i++) {
      var listElement = document.createElement('li');
      listElement.textContent = xhr.response[i].name;
      $usersList.appendChild(listElement);
    }
  })
  xhr.send();
}

getUserData();
