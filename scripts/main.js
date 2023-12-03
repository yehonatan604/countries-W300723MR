import { getCountries } from "./services/countries.service.js";

console.log(await getCountries());

// let obj = {
//     1: 'a',
//     2: 'b'
// }
// let j = JSON.stringify(obj)
// console.log(obj);
// console.log(JSON.parse(j));