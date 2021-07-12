const GetPokemonsViews = (array, min, max) => {
  if (!min && !max) {
    console.log(array);
    return array.slice(0, 12);
  }
  return array.slice(min, max);
};

export default GetPokemonsViews;
