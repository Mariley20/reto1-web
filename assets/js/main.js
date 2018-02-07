const id = '001';
pokemon(id);
async function pokemon (id) {
    const pokemonData = await fetch(`data/pokemon-list.json`);
    const pokemonJSON = await pokemonData.json();
    console.log('data', pokemonJSON);
  }