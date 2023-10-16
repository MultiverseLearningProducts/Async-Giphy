require("dotenv").config();

const getImages = async (query) => {
  const apiKey = process.env.API_KEY;
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  const response = await fetch(endpoint);
  const data = await response.json();
  console.log(data);
};

getImages("dog");
