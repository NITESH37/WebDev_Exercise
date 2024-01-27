import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';


const fetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

const options = {
  method: 'GET',
  url: 'https://cnbc.p.rapidapi.com/news/v2/list-trending',
  headers: {
    'X-RapidAPI-Key': '56ae78ed3fmsh139d3e44071a7d9p1116c0jsn1db220f238a0',
    'X-RapidAPI-Host': 'cnbc.p.rapidapi.com'
  },
  params: { ...query },
  
};
const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      console.log(data)
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
  
}

export default fetch