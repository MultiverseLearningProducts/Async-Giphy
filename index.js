require('dotenv').config();

// Print out value of API key stored in .env file
// console.log(process.env.API_KEY)

let endpoint =  `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

async function getImages(query){
    const response = await fetch(endpoint)
    const data = await response.json()
    const singleImg = data["data"][0]["url"]
    console.log(singleImg)
    endpoint =`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    console.log(endpoint)
    return endpoint
}

getImages('cats')