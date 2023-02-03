// Sample data for two Pokemon
const pokemon1 = {
  name: "Pikachu",
  attack: 55,
  defense: 40,
  hp: 35
};

const pokemon2 = {
  name: "Charmander",
  attack: 52,
  defense: 43,
  hp: 39
};

// Function to compare statistics of two Pokemon
function comparePokemon(pokemon1, pokemon2) {
  console.log(`Comparing stats of ${pokemon1.name} and ${pokemon2.name}:`);

  console.log(`${pokemon1.name} - Attack: ${pokemon1.attack} | Defense: ${pokemon1.defense} | HP: ${pokemon1.hp}`);
  console.log(`${pokemon2.name} - Attack: ${pokemon2.attack} | Defense: ${pokemon2.defense} | HP: ${pokemon2.hp}`);

  console.log(`${pokemon1.name} has higher attack: ${pokemon1.attack > pokemon2.attack}`);
  console.log(`${pokemon1.name} has higher defense: ${pokemon1.defense > pokemon2.defense}`);
  console.log(`${pokemon1.name} has higher HP: ${pokemon1.hp > pokemon2.hp}`);
}

// Call the function to compare statistics of two Pokemon
comparePokemon(pokemon1, pokemon2);
