require('dotenv').config();
//const fetch = require("isomorphic-fetch");


// Print out value of API key stored in .env file
console.log(process.env.API_KEY)

const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=dogs&limit=1&offset=0&rating=g&lang=en`

//get images with query

async function getImage(query){

    try{
        const result = await fetch(endpoint);
        const data = await result.json();
        console.log(data.data[0].url);

        const gif = data.data[0].url;
        return gif;
    }catch(error){
        console.log(error)
    }
   
}
let query;
getImage(query);