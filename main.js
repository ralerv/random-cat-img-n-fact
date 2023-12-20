//bring elements
import { observer } from "./lazy.mjs";
const catSection = document.getElementById("cats-container")
const addButton = document.getElementById("addButton")

//listeners
addButton.addEventListener("click",addImage)

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
    const imgData = await fetchData(`${apiImg}/cat?json=true`);
    const imgContainer = document.createElement("img");
    imgContainer.className = "w-full h-auto rounded-lg object-center object-cover sm:w-auto sm:h-80"
    imgContainer.dataset.src=`${apiImg}/cat/${imgData._id}`
    return imgContainer
}

async function addImage(){
    const catContainer = document.createElement("div");
    catContainer.className = "relative w-full h-20 max-h-fit bg-slate-500 rounded-lg"
    catSection.append(catContainer)

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "×"
    deleteButton.className = "w-8 h-8 z-20 absolute right-0 top-0 text-2xl text-white drop-shadow-lg shadow-black"
    deleteButton.addEventListener('click', deleteDiv);

    const newImage = await fetchImages()
    catContainer.append(newImage,deleteButton)
    observer.observe(catContainer)
}

function deleteDiv(contenedor){
    const parentButton = contenedor.srcElement.parentNode
    parentButton.remove()
}

addImage(); //first fetch