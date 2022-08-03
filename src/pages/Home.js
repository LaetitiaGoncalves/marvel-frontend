import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      const fetchDatas = async () => {
        const response = await axios.get(
          "https://laetitia-marvel-project.herokuapp.com/comics"
        );
        setData(response.data);
        setIsLoading(true);
      };
      fetchDatas();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <div className="homePage">
      <h1>Marvel</h1>
      <div>
        {data.results.map((comics, index) => {
          return <li key={index}>{comics.title}</li>;
        })}
      </div>
    </div>
  );
};

export default Home;
