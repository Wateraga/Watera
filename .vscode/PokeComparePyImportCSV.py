import csv

def compare_pokemon_stats(pokemon1, pokemon2):
  # Initialize the variables to store the stats of both pokemon
  pokemon1_stats = {}
  pokemon2_stats = {}
  
  # Read the csv file
  with open("pokemon.csv") as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
      # Check if the current row is for the first pokemon
      if row["Name"] == pokemon1:
        pokemon1_stats = row
      # Check if the current row is for the second pokemon
      if row["Name"] == pokemon2:
        pokemon2_stats = row
      # If both pokemon are found, break the loop
      if pokemon1_stats and pokemon2_stats:
        break
  
  # Compare the stats of both pokemon and return the result
  result = f"{pokemon1} vs {pokemon2}\n\n"
  for stat in pokemon1_stats:
    if stat == "Name":
      continue
    result += f"{stat}: {pokemon1_stats[stat]} vs {pokemon2_stats[stat]}\n"
  
  return result

# Example usage
pokemon1 = "Bulbasaur"
pokemon2 = "Ivysaur"
print(compare_pokemon_stats(pokemon1, pokemon2))
