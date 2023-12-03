import { getCountries } from "./services/countries.service.js";
import { createCardsList } from "./services/dom.service.js";

console.log(await getCountries());

createCardsList();


// let obj = {
//     1: 'a',
//     2: 'b'
// }
// let j = JSON.stringify(obj)
// console.log(obj);
// console.log(JSON.parse(j));

// const p = document.createElement('p');
// p.textContent = 'blabla';
// p.className = 'text-light';

// document.body.appendChild(p);