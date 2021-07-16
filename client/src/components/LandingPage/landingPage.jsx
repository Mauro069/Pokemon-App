import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <main className="mainn">
      <div className="header">
        <Link to="/home">
          {" "}
          <div className="izq">Home</div>
        </Link>
        <div className="derecha">
          <Link to="/createpokemon">
            {" "}
            <div className="der">Create Pokémon</div>
          </Link>
          <Link to="/aboutme">
            {" "}
            <div className="der">About Me</div>
          </Link>
        </div>
      </div>
      <div className="contenedor">
        <div className="centro">
          <div className="contenedor-h1">
            <h1> Pokémon App </h1>
          </div>
          <div className="contenedor-boton">
            <Link to="/home">
              <button className="home"> Home </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
