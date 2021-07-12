import GetPokemonsViews from '../controllers/getPokemonsViews'

const initialState = {
  pokemons: [],
  pokemonDetail: [],
  pokemonViews: {
    all: [],
    now: [],
  },
  Types: [],
  Filter: "All",
  pokemonOrigin: "All",
};

const pokeReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: payload,
        pokemonViews: {
          all: payload,
          now: GetPokemonsViews(payload),
        },
      };
    default:
      return state;
  }
};
