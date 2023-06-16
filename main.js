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
    randomFactP.innerText =data.text; //put random text on p
}

async function setcatImg(apiurl){ //randon img
    const response = await fetch(`${apiurl}/cat?json=true`);
    const data = await response.json();
    const urlCat = data.url;
    randomImgSection.src=`${apiurl}/${urlCat}`; //put random img on img.src
}

function repeat(){ //to repeat
    fetchData(`${apiFact}/facts/random?animal_type=cat&amount=1`);
    setcatImg(apiImg);
}

repeat(); //first fetch
