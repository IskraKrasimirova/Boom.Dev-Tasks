//import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const url = `https://pokeapi.co/api/v2/pokemon?limit=10`;
  const ul = document.querySelector('ul');
  async function load() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    data.results.forEach((pokemon) => {
      const liElement = document.createElement('li');
      liElement.innerHTML = pokemon.name;
      ul.appendChild(liElement);
    });
  }
  load();
  // fetch(url)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     data.results.forEach((pokemon) => {
  //       const liElement = document.createElement('li');
  //       liElement.innerText = pokemon.name;
  //       ul.appendChild(liElement);
  //     });
  //   })
});
