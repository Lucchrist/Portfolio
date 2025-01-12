
import "../Styles/Components/_header.scss";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Christian</div>
      <nav>
        <ul className="menu">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">À propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

