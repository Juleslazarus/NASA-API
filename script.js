const img = document.querySelector("img");
const genBtn = document.querySelector(".genBtn");
img.style.opacity = "0";
const neoSubmitBtn = document.querySelector("neoSubmitBtn");
const sdInput = document.querySelector(".sdInput");
const edInput = document.querySelector(".edInput");

genBtn.addEventListener("click", () => {
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=igQgjUKBQvh1fojRUMu06WzryHg919Cg6dWi4bYk",
    {
      mode: "cors",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.hdurl;
    });
  img.style.opacity = "1";
});

fetch(
  `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY`,
  {
    mode: "cors",
  }
)
  .then(function (neoResponse) {
    return neoResponse.json();
  })
  .then(function (neoResponse) {
    console.log(neoResponse);
  });
