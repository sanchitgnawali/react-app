// //Object destructuring in ES6
// const person = {
//     // name: 'sanchit',
//     age: 20,
//     location: {
//         city: 'Houston',
//         temp: 80
//     }
// }
//
// const {name = 'Anonymous',age} = person;
// const {city,temp: temperature/*renaming temp as temperature*/} = person.location;
// console.log(`${name} is ${age} years old. the city is ${city} and the temperature is ${temperature}`)
//
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }
//
// const {name: publisherName = 'Self-published'} = book.publisher;
//
// console.log(publisherName)


const address = ['12300 Bissonate Street','Houston','Texas','77035'];
const [street,city,state,zip] = address;

console.log(`You live in ${street},${city} , ${state},${zip}`)