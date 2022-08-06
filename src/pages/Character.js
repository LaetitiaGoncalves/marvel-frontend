import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import drstrange from "../img/drstrange.jpeg";

const Character = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const fetchDatas = async () => {
        const response = await axios.get(
          "https://laetitia-marvel-project.herokuapp.com/characters"
        );
        setData(response.data);
        setIsLoading(false);
      };

      fetchDatas();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return (
    <div className="container">
      {isLoading === true ? (
        <h2>En cours de chargement</h2>
      ) : (
        <div className="pages-container">
          <div className="search-bar-input">
            <input type="text" placeholder="Search here" />
          </div>
          <div className="title-and-picture">
            <h1>Découvrez les personnages Marvel</h1>
            <img src={drstrange} alt="Dr Strange" className="drStrange" />
          </div>

          <div className="container-card">
            {data.results.map((characters) => {
              return (
                <div
                  key={characters._id}
                  onClick={(event) => {
                    event.preventDefault();
                    navigate(`/comic/${characters._id}`);
                  }}
                  className="card"
                >
                  <div className="image-contain">
                    <img
                      src={
                        characters.thumbnail.path +
                        "." +
                        characters.thumbnail.extension
                      }
                      alt="comics photos"
                    />
                  </div>
                  <div className="card-text">
                    <h2 className="characterName">{characters.name}</h2>
                    <p>{characters.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Character;
