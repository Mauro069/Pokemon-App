import { Link } from "react-router-dom";
import estilos from "./nav.css";

const Nav = () => {
  return (
    <nav className="navv">
    <Link  to="/home"> 
        <h3 className='title'> Pokémon App </h3>
    </Link>
    <div className ='linksconteiner'>
        <div className='links'>
            <Link className='crear' to="/createpokemon"> Crear Pokemon </Link>
            <Link className='aboutme' to="/aboutme"> Sobre Mi </Link>
        </div>
    </div>
    </nav>
  );
};

export default Nav;
