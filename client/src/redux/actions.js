import axios from "axios";

export const GET_POKEMON = "GET_POKEMON";
export const FILTER_BY_TYPES = "FILTER_BY_TYPES";
export const GET_TYPES = "GET_TYPES";
export const POKE_REQUEST = "POKE_REQUEST";
export const POKE_REQUEST_SUCCESS = "POKE_REQUEST_SUCCESS";
export const POKE_REQUEST_FAILURE = "POKE_REQUEST_FAILURE";


export const getPokemons = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/pokemons");
    dispatch({ type: GET_POKEMON, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export function getTypes() {
  return (dispatch) =>
    axios.get("http://localhost:3001/types").then((answer) =>
      dispatch({
        type: GET_TYPES,
        payload: answer,
      })
    );
}

export const getPokemonSearch = (pokemonName) => {
  return (dispatch) => {
    dispatch(pokemonRequest());
    axios
      .get(`http://localhost:3001/pokemons?name=${pokemonName}`)
      .then((response) => {
        dispatch(pokemonRequestSuccess(response.data));
      })
      .catch((error) => dispatch(pokemonRequestFailure("Pokémon not found")));
  };
};

export const pokemonRequest = () => {
  return {
    type: POKE_REQUEST,
  };
};

export const pokemonRequestSuccess = (pokemon) => {
  return {
    type: POKE_REQUEST_SUCCESS,
    payload: pokemon,
  };
};

export const pokemonRequestFailure = (error) => {
  return {
    type: POKE_REQUEST_FAILURE,
    payload: error,
  };
};

