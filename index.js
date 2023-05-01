require('dotenv').config();
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=OfyAdW7XWqnNf5bRxqkgBhgXgp7Q68BN&q=dog&limit=25&offset=0&rating=g&lang=en";


// Print out value of API key stored in .env file
console.log(process.env.API_KEY)

async function getImage(query)
    {
        const response = await fetch(endpoint);
        const data = await response.json();
        return data.data[0].url
    }

async function helperFunction(query) 
    {
        const url = await getImage(query);
        console.log(url);
    }

helperFunction("dog");

