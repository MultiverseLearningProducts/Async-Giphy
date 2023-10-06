require('dotenv').config();
async function getImage(query){
    try{
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`
    const response = await fetch(endpoint);
    const giphy = await response.json();
    // console.log(giphy.data.images);
    return giphy;
    }
    catch (error){
        console.log(error)
    }
}
//Test giphy image
console.log(getImage('birds'));
// Print out value of API key stored in .env file
// console.log(process.env.API_KEY)