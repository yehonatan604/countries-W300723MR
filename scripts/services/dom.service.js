import { countries, reset, search } from "./countries.service.js";

const searchInput = document.getElementById("search");
const cards = document.getElementById("cards");

searchInput.addEventListener('keyup', (event) => {
    reset();
    cards.innerHTML = '';

    if (!event.target.value || event.target.value == '') {
        return createCardsList();
    }

    search(event.target.value);
    createCardsList();
});

const createCard = (country) => {
    const card = document.createElement("div");
    card.className = 'card m-2 col-md-3 col-sm-12 shadow';

    const cardImg = document.createElement("img");
    cardImg.className = 'card-img-top img border rounded shadow mt-3';
    cardImg.src = country.flags.png;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h3');
    cardTitle.className = 'card-title';
    cardTitle.textContent = country.name.common;

    const population = document.createElement('p');
    population.className = 'card-text';
    population.textContent = `population: ${country.population}`;

    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer d-flex justify-content-center';

    const heart = document.createElement('i');
    heart.className = 'fa fa-heart';

    card.appendChild(cardImg);


    cardBody.appendChild(cardTitle);
    cardBody.appendChild(population);

    card.appendChild(cardBody);

    cardFooter.appendChild(heart);
    card.appendChild(cardFooter);

    cards.appendChild(card);
}

export const createCardsList = async () => {
    for (const item of countries) {
        createCard(item);
    }
}