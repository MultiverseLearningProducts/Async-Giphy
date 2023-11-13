const fetch = require("node-fetch");
require("dotenv").config();
//const { HttpProxyAgent } = require("http-proxy-agent");
//const endpoint = `https://api.giphy.com/v1/gifs/search/tags?api_key=${process.env.API_KEY}&${query}&limit=25&offset=0`;
// Print out value of API key stored in .env file
//const { HttpsProxyAgent } = require("https-proxy-agent");
//console.log(process.env.API_KEY);

async function getImages(query) {
  //http proxy
  //   const proxyHost = "proxy.aexp.com";
  //   const proxyPort = 8080;
  //proxy url
  //   const proxyUrl = `http://${proxyHost}:${proxyPort}`;
  //   const proxyAgent = new HttpProxyAgent(proxyUrl);
  const endpoint = `https://api.giphy.com/v1/gifs/search/tags?api_key=${process.env.API_KEY}&${query}&limit=1&offset=0`;
//   const response = await fetch(endpoint, { agent: proxyAgent });
  const response = await fetch(endpoint);
  const data = response.json();
  console.log("data: " + data);
  return data;
}

getImages("q=dog");
