require("dotenv").config();

// Print out value of API key stored in .env file
const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=dogs&limit=25&offset=0&rating=g&lang=en`;
console.log(endpoint);

async function getImages(query) {
  try {
    const response = await fetch(query);
    const data = await response.json();
    const imgURL = data.data[0].url;
    return imgURL;
  } catch (err) {
    console.log(err);
  }
}

getImages(endpoint);
