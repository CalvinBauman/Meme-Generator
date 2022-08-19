
const generateCaptionBtn = document.querySelector(".generate-cap-btn");
const memeImage = document.querySelector(".caption-gen");
//const celebTitle = document.querySelector(".celeb-generator .parent-title");
const memeSpot = document.querySelector("#memeImage");
const generateMemeBtn = document.querySelector(".flex-container .generate-meme-btn");

var randomNumber = 1

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
    fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then(data => {
        updateDetails(data.content)
    });
}
const generateMeme = () => {
    console.log(memeSpot);
    fetch("https://api.imgflip.com/get_memes")
    .then((response) => response.json())
    .then(data => {
        console.log(data);
       
        updateDetailsTwo(data.data.memes[randomNumber].url, data.data.memes[randomNumber].name)
    });
}

const randomInt = () => {
    randomNumber = Math.floor(Math.random()* 101);
}

//line 38-40 allows random meme to be pulled from api instead of set number

generateCaptionBtn.addEventListener("click", generateCaption);
generateMemeBtn.addEventListener("click", generateMeme);