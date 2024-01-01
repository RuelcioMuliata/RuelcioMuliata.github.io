const searchButton = document.querySelector(".search-button");
const showMoreButton = document.querySelector(".show-more-button");
const showResult = document.querySelector(".show-result");
const firstImage = document.querySelector(".first-Image");
const secondImage = document.querySelector(".second-Image");
const thirdImage = document.querySelector(".third-Image");
const firstLink = document.querySelector(".first-Link");
const secondLink = document.querySelector(".second-Link");
const thirdLink = document.querySelector(".third-Link");

const urls = [];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomIndexes() {
  const indexes = [];

  while (indexes.length < 3) {
    const randomIndex = getRandomNumber(0, urls.length - 1);
    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
    }
  }
  return indexes;
}

for (let i = 0; i < 400; i++) {
  const randomNumber = getRandomNumber(1, 400);
  urls.push(`https://minimalistic-wallpaper.demolab.com/?random=${randomNumber}`);
}

function showRandomImages() {
  const randomIndexes = generateRandomIndexes();

  firstImage.src = urls[randomIndexes[0]];
  firstLink.href = urls[randomIndexes[0]];

  console.log(firstImage);
  console.log(firstLink);
}


window.addEventListener("load", showRandomImages);
searchButton.addEventListener("click", function(event) {
  event.preventDefault();
  showRandomImages();
});
