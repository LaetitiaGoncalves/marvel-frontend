import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      const fetchDatas = async () => {
        const response = await axios.get(
          "https://laetitia-marvel-project.herokuapp.com/"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      };
      fetchDatas();
    } catch (error) {
      console.log(error.message);
    }
  });
  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <div className="homePage">
      <h1>Marvel</h1>
      <p>{data}</p>
    </div>
  );
};

export default Home;
