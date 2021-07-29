import reducer from "./reducer";

describe("reducer", () => {
  it("Deberia retornar el estado inicial", () => {
    expect(reducer(undefined, [])).toEqual({
      error: "",
      filteredPokemon: [],
      filtered_by: "All",
      loading: false,
      ordered_by: "All",
      pokemon_search: [],
      pokemons: [],
      types: [],
    });
  });
});
