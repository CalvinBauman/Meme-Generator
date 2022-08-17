const generateCelebBtn = document.querySelector(".celeb-generator .generate-celeb-btn");
const celebImage = document.querySelector(".celeb-generator img");
const celebTitle = document.querySelector(".celeb-generator .parent-title");
const celebTitleTwo = document.querySelector(".celeb-generator .parent-titleTwo");
const generateCelebTwoBtn = document.querySelector(".celeb-generator .generate-celebTwo-btn");


const updateDetails = (url, title) => {
    celebImage.setAttribute("src", url);
    celebTitle.innerHTML = title;

}
const updateDetailsTwo = (url, title) => {
    celebImage.setAttribute("src", url);
    celebTitleTwo.innerHTML = title;

}

const generateCeleb = () => {
    fetch("https://meme-api.herokuapp.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then(data => {
        updateDetails(data.url, data.title)
    });
}
const generateCelebTwo = () => {
    console.log(celebTitleTwo);
    fetch("https://api.imgflip.com/get_memes")
    .then((response) => response.json())
    .then(data => {
        console.log(data);
        updateDetailsTwo(data.data.memes[0].url, data.data.memes[0].name)
    });
}

generateCelebBtn.addEventListener("click", generateCeleb);
generateCelebTwoBtn.addEventListener("click", generateCelebTwo);