require('dotenv').config();
async function getImage(query){
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=dogs&limit=25&offset=0&rating=g&lang=en`
    const response = await fetch(endpoint);
    const giphy = await response.json();
    console.log(giphy);
}
//Test giphy image
getImage('dogs');
// Print out value of API key stored in .env file
//console.log(process.env.API_KEY)