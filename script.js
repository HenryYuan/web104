
const randomButton = document.querySelector('.random');
const dogList = document.getElementById('doggoDropDown');
const listButton = document.querySelector('.list');
const refreshButton = document.querySelector('.grid');


window.addEventListener('load', populateList);
window.addEventListener('load', getDogTerm);
window.addEventListener('load', createImageGrid);
randomButton.addEventListener('click', getRandomDoggo);
dogList.addEventListener('change', getBreedImage);
listButton.addEventListener('click', getBreedImage);

 function getDogTerm() {
  fetch('https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=dog&formatversion=2').
  then(checkStatus).
  then(response => response.json()).
  then(data => displayDogInfo(data)).
  catch(error => notifyUser(error));
} 

function getRandomDoggo() {
  fetch('https://dog.ceo/api/breeds/image/random').
  then(checkStatus).
  then(response => response.json()).
  then(data => handleData(data)).
  catch(error => notifyUser(error));
}

function populateList() {
  fetch('https://dog.ceo/api/breeds/list/all').
  then(checkStatus).
  then(response => response.json()).
  then(data => createListItems(data.message)).
  catch(error => notifyUser(error));
}

function getBreedImage() {
  let selectedBreed = dogList.options[dogList.selectedIndex].value;
  let url = `https://dog.ceo/api/breed/${selectedBreed}/images`;
  fetch(url).
  then(checkStatus).
  then(response => response.json()).
  then(data => getImageURL(data.message)).
  catch(error => console.log(error));
}

function createImageGrid() {
  fetch('https://dog.ceo/api/breeds/image/random/3').
  then(checkStatus).
  then(response => response.json()).
  then(data => createGrid(data.message)).
  catch(error => notifyUser(error));
}

function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function handleData(data) {
  let url = data.message;
  console.log(url);
  let regex = /https:\/\/images\.dog\.ceo\/breeds\/(\w+\-?\w+)\/.+/g;
  let breedName = regex.exec(url);
  document.getElementById('randomImageContainer').innerHTML = `<img alt="random image of a ${fixBreed(breedName[1])}" src='${url}'/>`;
  document.querySelector('.dogInfo').innerHTML = `<p class="h5">Random image of a ${fixBreed(breedName[1])}</p>`;
}

function getImageURL(data) {
  let randomNumberURL = data[Math.floor(Math.random() * data.length) + 1];
  listImageContainer.innerHTML = `<img src="${randomNumberURL}" alt="${extractBreedName(data)}"/>`;
}

function createListItems(data) {
  let output = '';
  Object.keys(data).forEach(key => output += `<option value="${key}">${fixBreed(key)}</option>`);
  document.getElementById('doggoDropDown').innerHTML = output;
}

function fixBreed(breedName) {
  if (breedName === 'germanshepherd') {
    return 'German Shepherd';
  } else if (breedName === 'mexicanhairless') {
    return 'Mexican Hairless';
  } else if (breedName === 'stbernard') {
    return 'St. Bernard';
  } else if (breedName === "african") {
    return 'African Wild Dog';
  } else if (breedName === 'bullterrier') {
    return 'Bull Terier';
  }
  return capitalize(breedName);
}

function capitalize(breedName) {
  return breedName.replace(/\-/g, ' ').
  split(" ").
  map(word => word.charAt(0).toUpperCase() + word.slice(1)).
  join(" ");
}

function extractBreedName(data) {
  let regex = /https:\/\/images\.dog\.ceo\/breeds\/(\w+-?\w+)\/\w+\.\w+/g;
  let match = regex.exec(data);
  return fixBreed(match[1]);
}


  
  
