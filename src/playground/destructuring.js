// object destructuring 

//const person = {
//     name: 'Andrew',
//     age: 27,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const {name = 'Anonymous', age} = person;
// const{ temp: temperature, city} = person.location;

// console.log(`${name} is ${age}.`);
// if(temperature && city) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//Array destructuring

// const address = ['1299 S Juniper Street', 'Philadelphia','Pennsylvania','19147'];

// const [, city, state = 'Default'] = address; // don't need a var name if you don't want to save it.  If at end don't even need comma

// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00','$2.50','2.75'];
const [itemName,,mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);