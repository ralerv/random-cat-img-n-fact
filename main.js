//bring elements
import { observer } from "./lazy.mjs";
const catSection = document.getElementById("cats-container")
const randomFactP = document.getElementById("random-fact");
const addButton = document.getElementById("addButton")

//listeners
addButton.addEventListener("click",addImage)
addButton.addEventListener("touchend",addImage)

//put api urls
const apiImg = "https://cataas.com";
const apiFact = "https://cat-fact.herokuapp.com";

//async functions to bring data
async function fetchData(url){ //fact data = text
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function fetchImages(){ //to repeat, await bc is using another async function?
    //use fetchdata func
    //const factData = await fetchData(`${apiFact}/facts/random?animal_type=cat&amount=1`);
    const imgData = await fetchData(`${apiImg}/cat?json=true`);
    //put values of data
    //randomFactP.innerText =factData.text;
    const catContainer = document.createElement("div");
    const imgContainer = document.createElement("img");
    imgContainer.dataset.src=`${apiImg}/cat/${imgData._id}`
    catContainer.append(imgContainer)
    return catContainer
}

async function addImage(){
    const newImage = await fetchImages()
    catSection.append(newImage)
    observer.observe(newImage)
}

addImage(); //first fetch
