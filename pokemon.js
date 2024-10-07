'use strict'



let apiURL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"; // Reduced limit for testing
let arr = [];

fetch(apiURL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const result = data.results;
    console.log(result);
    result.forEach((pokemon) => {
      let apiURL2 = pokemon.url; 
      fetch(apiURL2)
        .then((response) => response.json())
        .then((details) => {
          details.abilities.forEach((abilityObj) => {
            arr.push({
              name: pokemon.name, 
              ability: abilityObj.ability.name,
              img: details.sprites.front_default 
            });
          });

          addHtmlCode();
        });
    });
  });

function addHtmlCode() {
  const container = document.getElementById('PokContainer');
  container.innerHTML = '';

  arr.forEach((e) => {
    const CountryDiv = document.createElement('div');
    CountryDiv.classList.add('Pok');

    CountryDiv.innerHTML = `
      <h3 class="cName">Pokémon Name: ${e.name}</h3>
      <p>Ability: ${e.ability}</p>
      <img src="${e.img}" alt="${e.name}" width="100px" height="100px">
    `;
    container.appendChild(CountryDiv);
  });
}
