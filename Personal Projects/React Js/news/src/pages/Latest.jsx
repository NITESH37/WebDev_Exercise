import React, { useEffect, useState } from "react";
import axios from "axios";
// import { URL, getLatestNews, getLatestNewsData } from "../api";

const Latest = () => {
  const [news, setNews] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("https://google-news13.p.rapidapi.com/latest", {
  //         headers: {
  //           "x-rapidapi-key":
  //             "56ae78ed3fmsh139d3e44071a7d9p1116c0jsn1db220f238a0",
  //           "x-rapidapi-host": "google-news13.p.rapidapi.com",
  //         },
  //       })
  //       .then((response) => {
  //         setNews(response.data);
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }, []);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          "https://newsapi90.p.rapidapi.com/topic/latest",
          {
            params: {
              language: "en-US",
              region: "US",
            }, // Replace 'general' with your desired topic
            headers: {
              "x-rapidapi-key":
                "56ae78ed3fmsh139d3e44071a7d9p1116c0jsn1db220f238a0",
              "x-rapidapi-host": "newsapi90.p.rapidapi.com",
            },
          }
        );
        setArticles(response.data.articles);
        console.log(response.data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="bg-red-500S">{articles}</h1>
      {/* <ul>
        {news.map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </li>
        ))} */}
      {/* </ul> */}
    </div>
  );
};

export default Latest;
