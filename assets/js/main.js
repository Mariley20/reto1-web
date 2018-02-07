'use stric';
const id = '001';
pokemon(id);
async function pokemon (id) {
    let pokemonData = await fetch('https://raw.githubusercontent.com/Mariley20/reto1-web/master/data/pokemon-list.json');
    let pokemonJSON = await pokemonData.json();
    console.log('data', pokemonJSON);
    showPokemon(pokemonJSON);
  }
function showPokemon(data) {
    
}