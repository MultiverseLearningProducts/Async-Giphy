require('dotenv').config();
const endpoint = 'https://api.giphy.com/v1/gifs/search?api_key=2wssL1pJ9S5ZpufGBuQi048ztdYuQsA1&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips'

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)

async function getImage(query) {
    const response = await fetch (endpoint);
    const data = await response.json();
    let gif =  data[0]; 
    return gif;
}

console.log(await getImage(query));