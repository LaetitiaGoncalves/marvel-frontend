import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Character = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleClick = async (event) => {
    try {
      event.preventDefault();
      navigate("/characters/:characterId");
    } catch (error) {
      console.log(error);
    }
  };

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
      <h1>Les personnages Marvel</h1>
      {isLoading === true ? (
        <h2>En cours de chargement</h2>
      ) : (
        <div className="comics-page">
          <input type="text" placeholder="Search here" value="" />

          {data.results.map((characters) => {
            return (
              <ul key={characters._id} onClick={handleClick}>
                <li>
                  <img
                    src={
                      characters.thumbnail.path +
                      "." +
                      characters.thumbnail.extension
                    }
                    alt="comics photos"
                  />
                </li>
                <li>{characters.name}</li>
                <li>{characters._id}</li>
                <li>{characters.description}</li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Character;
