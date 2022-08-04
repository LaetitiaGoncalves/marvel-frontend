import { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <h1>Marvel !</h1>
      {isLoading === true ? (
        <h2>En cours de chargement</h2>
      ) : (
        <div className="comics-page">
          {data.results.map((comics) => {
            return <p key={comics._id}>{comics.title}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default Comic;
