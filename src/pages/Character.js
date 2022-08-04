import axios from "axios";
import { useState, useEffect } from "react";

const Character = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
    <div>
      <h1>Marvel !</h1>
      {isLoading === true ? (
        <h2>En cours de chargement</h2>
      ) : (
        <div className="comics-page">
          {data.results.map((characters) => {
            return <p key={characters._id}>{characters.name}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default Character;
