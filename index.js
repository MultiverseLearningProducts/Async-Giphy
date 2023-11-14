
require("dotenv").config();

const endpoint = `https://api.giphy.com/v1/gifs/search/tags?api_key=${process.env.API_KEY}&q=dog&limit=1&offset=0`;

async function getImages() {
  
  console.log("endpoint: " + endpoint);
  const response = await fetch(endpoint);
  const data = await response.json();
  console.log("data: " + data);
  return data;
}

getImages();
