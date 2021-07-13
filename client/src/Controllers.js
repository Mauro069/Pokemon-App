import axios from "axios";

export const searchPokemon = async (pokemon) => {
  try {
    let url = `http://localhost:3001/pokemons?name=${pokemon}`;
    const response = await axios.get(url);
    const data = response.data;
    for (var i = 0; i < data.length; i++) {
      if (data[i].name === pokemon) {
        return data[i];
      }
    }
  } catch (error) {}
};

export const getPokemons = async () => {
  try {
    let url = "http://localhost:3001/pokemons";
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {}
};
