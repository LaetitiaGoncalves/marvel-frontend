import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>HomePage</h1>

      <Link to="/comics">
        <button>comics</button>
      </Link>
      <Link to="/characters">
        <button>characters</button>
      </Link>
    </div>
  );
};

export default Home;
