import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, CardBody, Heading, Link, SimpleGrid,Text } from "@chakra-ui/react";





const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const options = {
        method: "GET",
        url: "https://cnbc.p.rapidapi.com/news/v2/list-trending",
        params: {
          tag: "Articles",
          count: 40 
        },
        headers: {
          "X-RapidAPI-Key":
            "56ae78ed3fmsh139d3e44071a7d9p1116c0jsn1db220f238a0",
          "X-RapidAPI-Host": "cnbc.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        const responseData = response.data.data.mostPopularEntries.assets;
        setArticles(responseData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <Box maxW={'1100px'} mx={'auto'} mt={10}>
      <SimpleGrid minChildWidth='255px' spacing={8} mb={12} p={4}>
        {articles.map((item) => (
         <Card>
         <Link href={item.url} isExternal textDecoration={"none"}>
           <CardBody>
           <Heading>{item.headline}</Heading>
           <Text>{item.description}</Text>
           </CardBody>
         </Link>
       </Card>
        ))}
      </SimpleGrid>

    </Box>
    
  );
};

export default News;
