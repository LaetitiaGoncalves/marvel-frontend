import { useState, useEffect } from "react";
import axios from "axios";
import comicspicture from "../img/comicspicture.png";

const Comic = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchDatas = async () => {
        const response = await axios.get(
          "https://laetitia-marvel-project.herokuapp.com/comics"
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
            <h1>Découvrez l'univers des comics Marvel</h1>
            <img
              src={comicspicture}
              alt="comics picture"
              className="comicspicture"
            />
          </div>

          <div className="container-card">
            {data.results.map((comics) => {
              return (
                <div key={comics._id} className="card">
                  <p className="image-contain">
                    <img
                      src={
                        comics.thumbnail.path + "." + comics.thumbnail.extension
                      }
                      alt=""
                    />
                  </p>
                  <div className="card-text">
                    <p>{comics.title}</p>
                    <p>{comics.description}</p>
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

export default Comic;
