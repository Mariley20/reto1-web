'use stric';
const id = '001';

async function pokemon (id) {
    let pokemonData = await fetch('data/pokemon-list.json');
    let pokemonJSON = await pokemonData.json();
    console.log('data', pokemonJSON);
  }
  pokemon(id);