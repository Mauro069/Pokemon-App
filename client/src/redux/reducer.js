/* Estado Inicial */
const initialState = {
  pokemons: [],
  types: [],
  filteredPokemon: [],
  filtered_by: "All",
  ordered_by: "All",
  loading: false,
  pokemon_search: [],
  error: "",
};

/* Reducer */
const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POKEMON":
      return {
        ...state,
        pokemons: action.payload,
      };
    case "GET_TYPES":
      return {
        ...state,
        types: action.payload,
      };
    case "POKE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "POKE_REQUEST_SUCCESS":
      return {
        ...state,
        loading: false,
        pokemon_search: action.payload,
        error: "",
      };
    case "POKE_REQUEST_FAILURE":
      return {
        ...state,
        loading: false,
        pokemon_search: [],
        error: action.payload,
      };
    case "ADD_POKEMON":
      return {
        ...state,
        pokemon_created: action.payload,
      };

    case "POKEMONS_ASC":
      return {
        ...state,
        filteredPokemon: action.payload.orderedPokemon,
        ordered_by: action.payload.name,
      };
    case "POKEMONS_DESC":
      return {
        ...state,
        filteredPokemon: action.payload.orderedPokemon,
        ordered_by: action.payload.name,
      };
    case "ATTACK_ASC":
      return {
        ...state,
        filteredPokemon: action.payload.orderedPokemon,
        ordered_by: action.payload.name,
      };
      case "ATTACK_ASC":
        return {
          ...state,
          filteredPokemon: action.payload.orderedPokemon,
          ordered_by: action.payload.name,
        };  
    case "ATTACK_DESC":
      return {
        ...state,
        filteredPokemon: action.payload.orderedPokemon,
        ordered_by: action.payload.name,
      };
    case "NO_ORDER":
      return {
        ...state,
        filteredPokemon: action.payload.pokemon,
        ordered_by: action.payload.name,
      };
    case "ONLY_API":
      return {
        ...state,
        filteredPokemon: action.payload.orderedByOrigin,
        filtered_by: action.payload.name,
      };
    case "ONLY_DB":
      return {
        ...state,
        filteredPokemon: action.payload.orderedByOrigin,
        filtered_by: action.payload.name,
      };
    case "ALL":
      return {
        ...state,
        filteredPokemon: action.payload.array,
        filtered_by: action.payload.name,
      };
    case "BY_TYPE":
      return {
        ...state,
        filteredPokemon: action.payload.arrayByType,
        filtered_by: action.payload.name,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
