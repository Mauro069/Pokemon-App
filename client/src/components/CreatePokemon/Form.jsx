import React from "react";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";

import "./Form.css";

export const Form = ({
  handleSubmit,
  handleChange,
  handleTypes,
  labels,
  pokeTypes,
  Types,
  Alert,
  img,
}) => {
  return (
    <div>
      <Nav />
      <div>
        <div className="searchBar-container">
          <h2 className="poke-found">Create your Pokémon</h2>
          <div className="btn-conteiner">
            <Link to="/home">
              <button className="btn"> Back to home </button>
            </Link>
          </div>
        </div>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="principal">
          <div className="formm">
            <div className="form-top">
              {labels &&
                labels.map((el, i) => (
                  <div key={i}>
                    <div key={i}>
                      <label key={i}>{el.label}:</label>
                    </div>
                    <input
                      key={el.name}
                      name={el.name}
                      type="text"
                      autoComplete="off"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                ))}
              <div className="types-selects">
                <select
                  className="select"
                  onChange={(e) => handleTypes(e)}
                  type="text"
                >
                  {pokeTypes &&
                    pokeTypes.map((t, i) => (
                      <option key={i} value={t.nombre}>
                        {t.nombre}
                      </option>
                    ))}
                </select>
                <div className="selects">
                  {Types &&
                    Types.map((el, i) => (
                      <div key={i}>
                        <label>{el}</label>
                      </div>
                    ))}
                </div>
              </div>
              <div>
                <button className="create" type="submit">
                  Create
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <p className="title-img"> Image: </p>
            <div className="img-select-conteiner">
              {" "}
              <img className="image" src={img} />{" "}
            </div>
          </div>
        </div>

        {Alert.create ? <div>{alert("Pokémon created")}</div> : null}
      </form>
    </div>
  );
};

export default Form;
