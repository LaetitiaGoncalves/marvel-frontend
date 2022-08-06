import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CharacterPage = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { characterId } = useParams();

  useEffect(() => {
    try {
      const fetchDatas = async () => {
        const response = await axios.get(
          `https://laetitia-marvel-project.herokuapp.com/comic/${characterId}`
        );
        setData(response.data);
        console.log(response.data);
        setIsLoading(false);
      };
      fetchDatas();
    } catch (error) {
      console.log(error.message);
    }
  }, [characterId]);

  return (
    <div className="container">
      {isLoading === true ? (
        <p>En cours de chargement</p>
      ) : (
        <div className="pages-container">
          <div className="title-and-picture">
            <img
              src={data.thumbnail.path + "." + data.thumbnail.extension}
              alt=""
              className="background-image"
            />
            <h1>{data.name}</h1>
          </div>

          <h2 className="titleOfCharacterPage">Retrouvez le/la dans :</h2>
          <div className="carousel">
            {data.comics.map((comic, index) => {
              return (
                <div key={index} className="card-character-page">
                  <div className="image">
                    <img
                      src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                      alt=""
                    />
                  </div>
                  <div className="title-and-description">
                    <h3>{comic.title}</h3>
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

export default CharacterPage;
