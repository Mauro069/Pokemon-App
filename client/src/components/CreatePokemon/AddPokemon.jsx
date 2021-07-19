import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getTypes } from "../../redux/actions";
import { Form } from "./Form";

/* Componente AddPokemon */
export const AddPokemon = ({ types, getTypes }) => {
  const pokeTypes = types.data;

  const [Data, setData] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    type: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png",
  });

  const [Types, setTypes] = useState([]);
  const [Alert, setAlert] = useState({ create: false });

  /* UseEffects */
  useEffect(() => {
    getTypes();
  }, [getTypes]);

  useEffect(() => {
    if (Types.length) {
      let typesArray = pokeTypes.reduce((acc, el) => {
        if (Types.includes(el.nombre) === true) {
          acc.push(el.id);
        }
        return acc;
      }, []);
      setData({ ...Data, type: typesArray });
    }
  }, [Types]);

  /* HandleSubmit */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/pokemons", Data);
      setAlert({ ...Alert, create: true });
    } catch (error) {
      console.error(error);
    }
  };

  /* HandleChange */
  const handleChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  /* HandleTypes */
  const handleTypes = (e) => {
    if (Types.length < 2) {
      if (!Types.includes(e.target.value)) {
        setTypes([...Types, e.target.value]);
      }
    } else setTypes([e.target.value]);
  };

  /* Labels */
  const Labels = [
    { label: "Name", name: "name" },
    { label: "HP", name: "hp" },
    { label: "Attack", name: "attack" },
    { label: "Defense", name: "defense" },
    { label: "Speed", name: "speed" },
    { label: "Height", name: "height" },
    { label: "Weight", name: "weight" },
    { label: "Img", name: "img" },
  ];

  return (
    <Form
      labels={Labels}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleTypes={handleTypes}
      pokeTypes={pokeTypes}
      Types={Types}
      Alert={Alert}
      img={Data.img}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    types: state.types,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTypes: () => dispatch(getTypes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPokemon);
