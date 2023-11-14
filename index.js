require('dotenv').config();

// Print out value of API key stored in .env file

async function getImages(query){
    const endpoint = 'https://api.giphy.com/v1/gifs/search?api_key=Cf8dxSutvNOj8C8Bg6pm3FSo7zs2HIab&q=dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips';
    try{
        const response = await fetch(endpoint);
        const data = await response.json();
        return data;
    }catch{
        console.log(err);
    }
}
getImages('dogs').then((imageUrl) => {
    if (imageUrl) {
      const imgElement = document.querySelector('#resultImg');
      imgElement.src = imageUrl;
    }
  });
console.log(process.env.API_KEY)