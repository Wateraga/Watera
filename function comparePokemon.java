function comparePokemon() {
  // Define variables for selected pokemon 1 and 2
  var pokemon1 = document.getElementById("pokemon1").value;
  var pokemon2 = document.getElementById("pokemon2").value;

  // Find the selected pokemon in the data table and store their statistics
  var pokemon1Data;
  var pokemon2Data;
  for (var i = 0; i < pokemonData.length; i++) {
    if (pokemonData[i][1] == pokemon1) {
      pokemon1Data = pokemonData[i];
    } else if (pokemonData[i][1] == pokemon2) {
      pokemon2Data = pokemonData[i];
    }
  }

  // Compare the statistics of the selected pokemon and display the results
  var results = "";
  for (var i = 5; i <= 11; i++) {
    if (pokemon1Data[i] > pokemon2Data[i]) {
      results += pokemon1 + " has higher " + statNames[i] + " than " + pokemon2 + ".\n";
    } else if (pokemon1Data[i] < pokemon2Data[i]) {
      results += pokemon2 + " has higher " + statNames[i] + " than " + pokemon1 + ".\n";
    } else {
      results += pokemon1 + " and " + pokemon2 + " have the same " + statNames[i] + ".\n";
    }
  }
  alert(results);
}
