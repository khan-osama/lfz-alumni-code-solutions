const myRequest = new Request('https://jsonplaceholder.typicode.com/users')


fetch(myRequest)
  .then(data => {
    return data.json();
  })
  .then(array => {
    console.log(array);
  })


const pokeRequest = new Request('https://pokeapi.co/api/v2/pokemon/pikachu')

fetch(pokeRequest)
  .then(data => {
    return data.json()
  })
  .then(pokeData => {
    console.log(pokeData)
  })
