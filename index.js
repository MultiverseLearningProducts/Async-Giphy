require('dotenv').config();

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)

const endpoint = 'https://api.giphy.com/v1/gifs/search?api_key=yokpNayCr4hqSrtPXiKgXjxG4NiDA1yP&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips'

async function getImage(query) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=yokpNayCr4hqSrtPXiKgXjxG4NiDA1yP&q=${query}&limit=2&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);

    // console.log(response)

    const data = await response.json();

    const url = data.data[1].url

    console.log(url);
}


getImage('dogs')