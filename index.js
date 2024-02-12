require('dotenv').config({path:__dirname+'/.env'});


// Print out value of API key stored in .env file
//console.log(process.env.API_KEY)

async function getImage(query){
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

    const results = await fetch(endpoint);
    const obj = await results.json();
    const image = obj.data[0].url;
    
    return image;

}

getImage("test");