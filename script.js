//const code = require('./index')
  


async function getImage(query) {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key==${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const response = await fetch(endpoint);
    const data = await response.json();
    let num = Math.floor(Math.random() * 25);
    let url = data.data[num].images.original.url;
    return url;
}

document.addEventListener("DOMContentLoaded", function() {
  const generateButton = document.getElementById("generateButton");
  const imageContainer = document.getElementById("imageContainer");

  generateButton.addEventListener("click", async function() {
    try {
      const imageUrl = await getImage("cat");
      const imageElement = `<img src="${imageUrl}" alt="Random Image">`;
      imageContainer.innerHTML = imageElement;
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  });
});
