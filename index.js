const input = document.querySelector("input");
const container = document.querySelector(".gifs");

const getImages = async (query) => {
  const apiKey = "t8ur12HnhbN9XDWKVdOx2Q7c03vmCFyJ";
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

const handleSubmit = async (event) => {
  if (event.target.value.trim() === "") return;
  const gifs = await getImages(event.target.value);
  if (!gifs) {
    container.innerHTML = `
        <div class="loading-container">
        <p class="loading">Loading...</p>
        <div>
    `;
  } else {
    container.innerHTML = gifs.data.map(
      (gif) => `
        <img class="gif" src=${gif.images.original.url} />
    `
    );
  }
};

input.addEventListener("change", (event) => handleSubmit(event));
