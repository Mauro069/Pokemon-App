import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navv">
      <Link to="/">
        <h3 className="title"> Pokémon App </h3>
      </Link>
      <div className="linksconteiner">
        <div className="links">
          <Link className="crear" to="/createpokemon">
            {" "}
            Create Pokémon{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
