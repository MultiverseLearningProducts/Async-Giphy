require('dotenv').config();

// Print out value of API key stored in .env file
console.log('env', process.env.API_KEY)

let endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=hunterxhunter&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

async function getImages(query){
    const response = await fetch(endpoint);
    const data = await response.json();
    // console.log(data["data"][11]["url"]);
    const url = data["data"][11]["url"];

    endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    console.log(endpoint);
}


getImages("dogs");
