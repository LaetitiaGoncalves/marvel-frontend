import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CharacterPage = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { characterId } = useParams();
  console.log(characterId);
  useEffect(() => {
    try {
      const fetchDatas = async () => {
        const response = await axios.get(
          `https://localhost:3000/characters/${characterId}`
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
    <div>
      <h1>Les comics de ce personnage</h1>
      {isLoading === true ? (
        <h2>En cours de chargement</h2>
      ) : (
        <div>
          <p>{data.name}</p>
        </div>
      )}
    </div>
  );
};

export default CharacterPage;
