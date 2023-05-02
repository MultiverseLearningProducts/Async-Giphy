require('dotenv').config();


async function getImage(query) {
 try {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`;
    const response = await fetch(endpoint);
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * 25); // generate random index value
    const imageUrl = data.data[randomIndex].images.original.url;
    return imageUrl;
  } catch(error) {
    console.error(error)
  }
}

async function getAllImages(query) {
    try {
       const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`;
       const response = await fetch(endpoint);
       const data = await response.json();
       const imageUrls = [];
       data.data.forEach((gif) => {
         imageUrls.push(gif.images.original.url);
       });
       console.log(imageUrls); 
       return imageUrls;
     } catch(error) {
       console.error(error)
     } 
}

getAllImages('beach')