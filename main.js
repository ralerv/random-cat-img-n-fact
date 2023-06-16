//bring elements
const randomImgSection = document.getElementById("random-img");
const randomFactP = document.getElementById("random-fact");

//put api urls
const apiImg = "https://cataas.com";
const apiFact = "https://cat-fact.herokuapp.com";

//async functions to bring data
async function fetchData(url){ //fact data = text
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function repeat(){ //to repeat, await bc is using another async function?
    //use fetchdata func
    const factData = await fetchData(`${apiFact}/facts/random?animal_type=cat&amount=1`);
    const imgData = await fetchData(`${apiImg}/cat?json=true`);
    //put values of data
    randomFactP.innerText =factData.text;
    randomImgSection.src=`${apiImg}/${imgData.url}`
}

repeat(); //first fetch
