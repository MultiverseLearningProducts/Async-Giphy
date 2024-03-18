require('dotenv').config();



// Print out value of API key stored in .env file
//console.log(process.env.API_KEY)


async function getImage(query) {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const response = await fetch(endpoint);
    const data = await response.json();
    let num = Math.floor(Math.random() * 25) + 1
    let url = data.data[num].images.original.url;
    console.log(url);
    return url;
}

console.log(getImage("cat"));
