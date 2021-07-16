export const ONLY_API = "ONLY_API";
export const ONLY_DB = "ONLY_DB";
export const ALL = "ALL";

export const pokemonByOrigin = (by) => (dispatch, getState) => {
	const pokemon = getState().pokemons.slice()
	let orderedByOrigin = [];
	switch (by) {
		case 'API':
			orderedByOrigin = pokemon.filter((el) => typeof el.id === 'number');
			dispatch({
				type: ONLY_API,
				payload: {
					orderedByOrigin,
					name: by
				}
			})
			break;

		case 'DB':
			let reg_ex = /-/;
			orderedByOrigin = pokemon.filter((el) => el.id.toString().search(reg_ex) !== -1);
			dispatch({
				type: ONLY_DB,
				payload: {
					orderedByOrigin,
					name: by
				}
			})
			break;

		case 'All':
			dispatch({
				type: ALL,
				payload: {
					pokemon,
					name: by
				}
			})
			break;

		default:
			return pokemon;
	}
};