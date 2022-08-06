import logo from "../img/logoMarvel.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo Marvel" className="logo" />
        </Link>
      </div>

      <div>
        <Link to="/comics">
          <button className="button-comics">comics</button>
        </Link>
        <Link to="/characters">
          <button className="button-characters">characters</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
