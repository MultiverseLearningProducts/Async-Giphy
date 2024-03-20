require('dotenv').config();

// Print out value of API key stored in .env file

console.log(process.env.API_KEY)

async function getImage(search){
    const query = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${search}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const response = await fetch(query);
    const data = await response.json();
    console.log(data.data[0].url);
    return data.data[0].url;
}

function getImageURl(func){
    const url = func
    return url;
}
console.log(getImage("cat"));

// console.log(getImageURl(getImage("cat")));