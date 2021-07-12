import axios from "axios";

export const getPokemons = async (dispatch) => {
  try {
    let response = axios.get("http://localhost:3001/pokemons");
    dispatch({ type: "GET_POKEMONS", payload: response.data });
  } catch (error) {
    console.error(error);
  }
};
