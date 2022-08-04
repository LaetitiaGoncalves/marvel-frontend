import spiderman from "../img/spiderman.jpg";

const Home = () => {
  return (
    <div className="homepage">
      <img
        src={spiderman}
        alt="spiderman photo"
        className="spiderman-homepage"
      />
      <div className="container">
        <h1 className="homepage-title">
          With great power comes great responsibility
        </h1>
      </div>
    </div>
  );
};

export default Home;
