import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <main className = 'mainn'>
      <div className="contenedor">
        <div className="contenedor-h1">
          <h1> Pokémon App </h1>
        </div>
        <div className="contenedor-boton">
          <Link to="/home">
            <button className="home"> Home </button>
          </Link>
        </div>
      </div>
      <footer>
        <Link to="/aboutme">
          <button className="aboutMe"> Sobre Mi </button>
        </Link>
      </footer>
    </main>
  );
};

export default LandingPage;
