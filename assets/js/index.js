// DÉCLARATION DES VARIABLES
const BASE_URL = "https://pokeapi.co/api/v2/";
let currentPokemon = 1;
const maxPokemonId = 893;
let isShiny = false;

// HTML Elements
const pokemonContainer = document.getElementById('pokemonContainer');
const pokemonImage = document.getElementById('pokemonImage');
const pokemonId = document.getElementById('pokemonId');
const pokemonName = document.getElementById('pokemonName');
const pokemonTypes = document.getElementById('pokemonTypes');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const shinyBtn = document.getElementById('shinyBtn');
const app = document.getElementById('app');
const loader = document.getElementById('loader');
const errorMsgContainer = document.querySelector('.error-msg-container');

errorMsgContainer.style.display = 'none';

// DÉCLARATION DES FONCTIONS
// Display Loader
function displayLoader() {

    const loaderContainer = document.createElement('div');
    loaderContainer.classList.add('loader-container');
    const loader = document.createElement('div');
    loader.classList.add('loading');

    for (let i = 0; i <= 3; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        loader.appendChild(dot);
    }

    loaderContainer.appendChild(loader);
    app.style.display = 'none';
    document.body.appendChild(loaderContainer);

}

// Remove loader
function removeLoader() {
    const loaderContainer = document.querySelector('.loader-container');

    if (loaderContainer) {
        setTimeout(() => {
            loaderContainer.remove();
            app.style.display = 'block';
        }, 1000);
    } 

}

// Get Pokemon By Id
async function getPokemon(id) {

    try {
        const response = await fetch(`${BASE_URL}/pokemon/${id}`);

        if (!response.ok) {
            throw new Error('Error while fetching pokemon');
        }

        const data = await response.json();

        return data;

    } catch (e) {
        console.error(e);
        displayError();
    } finally {
        removeLoader();
    }
}

// Render Pokemon
function renderPokemon(pokemonInfos) {
    // Delete previous type label
    deletePreviousLabel();

    const imgUrl = checkShiny(isShiny, pokemonInfos);

    pokemonImage.setAttribute('src', imgUrl);
    pokemonImage.setAttribute('alt', `Sprite du Pokémon ${pokemonInfos.name}`);
    pokemonId.textContent = pokemonInfos.id;
    pokemonName.textContent = capitalizeText(pokemonInfos.name);

    pokemonInfos.types.forEach((type) => {
        const typeLabel = document.createElement('span');
        typeLabel.classList.add(type.type.name);
        typeLabel.classList.add('type-label');
        typeLabel.classList.add('bit-font');
        typeLabel.textContent = type.type.name;
        pokemonTypes.appendChild(typeLabel);
    });
}

// Get Next Pokemon
function goPrev() {
    // No blocking behaviour : go to maxPokemonId instead of blocking previous btn
    currentPokemon = (currentPokemon === 1) ? maxPokemonId : currentPokemon - 1;
    isShiny = false;

    displayLoader();
    getPokemon(currentPokemon)
        .then((data) => {
            renderPokemon(data);
        })
        .catch((e) => console.error(e));
}

// Get Previous Pokemon
function goNext() {
    currentPokemon = (currentPokemon === maxPokemonId) ? 1 : currentPokemon + 1;
    isShiny = false;

    displayLoader();
    getPokemon(currentPokemon)
        .then((data) => {
            renderPokemon(data);

        })
        .catch((e) => console.error(e));
}

// Capitalize first letter of a string
function capitalizeText(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {

        newStr += (i === 0) ? str[i].toUpperCase() : str[i];
    }

    return newStr;
}

// Delete Previous Type Labels
function deletePreviousLabel() {
    const previousTypeLabel = document.querySelectorAll('.type-label');
    previousTypeLabel.forEach((label) => {
        label.remove();
    })
}

// Get Shiny Pokemon
function getShinyPokemon() {
    isShiny = true;

    displayLoader();
    getPokemon(currentPokemon)
        .then((data) => {
            renderPokemon(data);

        })
        .catch((e) => console.error(e));
}

// Get default Pokemon
function getDefaultPokemon() {
    isShiny = false;

    displayLoader();
    getPokemon(currentPokemon)
        .then((data) => {
            renderPokemon(data);

        })
        .catch((e) => console.error(e));
}

// Check If Pokemon Is Shiny To Change Btn InnerText
function checkShiny(isShiny, pokemonInfos) {

    shinyBtn.textContent = (isShiny) ? 'Default' : 'Shiny';

    return (isShiny) ? pokemonInfos.sprites.front_shiny : pokemonInfos.sprites.front_default;
}

// Display error message
function displayError() {
    const previousErrorMsg = document.querySelector('.error-msg');

    if (!previousErrorMsg) {
        const messageContainer = document.createElement('div');
        messageContainer.textContent = "Erreur lors de la récupération des données. Veuillez réessayer !";
        messageContainer.classList.add('error-msg');
        errorMsgContainer.appendChild(messageContainer);
        errorMsgContainer.style.display = 'block';

    }


}

// CALL FUNCTIONS TO GET AND DISPLAY POKEMON 
displayLoader();
getPokemon(currentPokemon)
    .then((data) => {
        renderPokemon(data);
        setTimeout(() => {
            removeLoader();
        }, (1000));

    })
    .catch((e) => {
        console.error(e);
    });

leftBtn.addEventListener('click', goPrev);
rightBtn.addEventListener('click', goNext);

shinyBtn.addEventListener('click', () => {
    return (!isShiny) ? getShinyPokemon() : getDefaultPokemon();
});
