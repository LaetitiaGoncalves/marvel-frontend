import logo from "../img/logoMarvel.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo Marvel" className="logo" />
      </Link>

      <div>
        <Link to="/comics">
          <button>comics</button>
        </Link>
        <Link to="/characters">
          <button>characters</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
