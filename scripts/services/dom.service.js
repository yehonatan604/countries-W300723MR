import { getCountries } from "./countries.service.js";

const searchInput = document.getElementById("search");
const cards = document.getElementById("cards");

const createCard = (country) => {
    const card = document.createElement("div");
    card.className = 'card';

    const cardImg = document.createElement("img");
    cardImg.className = 'card-img-top img border rounded shadow';
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
    cardFooter.className = 'card-footer';

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
    for (const item of await getCountries()) {
        createCard(item);
    }
}