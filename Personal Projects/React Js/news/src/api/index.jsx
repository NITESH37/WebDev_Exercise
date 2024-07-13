import axios from "axios";

export const URL = "https://newsapi90.p.rapidapi.com/topic";

const options = {
  method: "GET",
  //   url: "https://google-news13.p.rapidapi.com/latest",
  params: { lr: "en-US" },
  headers: {
    "x-rapidapi-key": "56ae78ed3fmsh139d3e44071a7d9p1116c0jsn1db220f238a0",
    "x-rapidapi-host": "newsapi90.p.rapidapi.com",
  },
};

// export const getLatestNewsData = async () => {
//   try {
//     const {
//       data: { data },
//     } = await axios.get(URL, options);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getLatestNews = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-key": "56ae78ed3fmsh139d3e44071a7d9p1116c0jsn1db220f238a0",
      "x-rapidapi-host": "newsapi90.p.rapidapi.com",
    },
  });

  return data;
};
