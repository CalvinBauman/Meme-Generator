const generateCaptionBtn = document.querySelector(".generate-cap-btn");
const memeImage = document.querySelector(".caption-gen");
//const celebTitle = document.querySelector(".celeb-generator .parent-title");
const memeSpot = document.querySelector("#memeImage");
const generateMemeBtn = document.querySelector(".flex-container .generate-meme-btn");
const storageInput = document.querySelector('.storage');
let text = '';
const button = document.querySelector('.button');
const storedInput = localStorage.getItem('usernameInput');
var randomNumber = 1
// const baseUrl = 'http://127.0.0.1:3000/'
const baseUrl = 'https://warm-sierra-55973.herokuapp.com/'
const updateDetails = (title) => {
    memeImage.textContent = title;
    //celebTitle.innerHTML = title;
}
const updateDetailsTwo = (url, title) => {
    randomInt();
    //console.log(randomNumber);
    memeSpot.setAttribute("src", url);
    //celebTitleTwo.innerHTML = title;
    // put randomInt() line 15 to implement function from 38-40 /
}
const generateCaption = () => {
    console.log("hello")
    fetch(${baseUrl}quote)
    .then((response) => response.json())
    .then(data => {
        updateDetails(data.text)
    });
}
const generateMeme = () => {
    console.log(memeSpot);
    fetch(${baseUrl}image)
    .then((response) => response.json())
    .then(data => {
        console.log(data);
	let fullUrl = baseUrl + data.url
        updateDetailsTwo(fullUrl, data.name)
    });
}
const randomInt = () => {
    randomNumber = Math.floor(Math.random()* 101);
}
const refreshButton = document.querySelector('.refresh-button');
const refreshPage = () => {
  location.reload();
}
refreshButton.addEventListener('click', refreshPage)
storageInput.addEventListener('input', letter => {
    text = letter.target.value
})
const saveToLocalStorage = () => {
    console.log(text)
    //localStorage.setItem('usernameInput', text.textContent)
    localStorage.usernameInput = text;
}
button.addEventListener("click", saveToLocalStorage);
//line 38-40 allows random meme to be pulled from api instead of set number
generateCaptionBtn.addEventListener("click", generateCaption);
generateMemeBtn.addEventListener("click", generateMeme);