
////////////////////////////////////// Arrays ///////////////////////

            //    0            1         2          3        4        5
//let heroes = ["ironman", "spiderman", "captain", "batman", "hulk", "thor"];

// heroes.length is 6

// for (let idx=0; idx<heroes.length; idx++){
//     console.log(heroes[idx]);
// }

// for of 

// for (let hero of heroes) {
//     console.log(hero);
// }

// for (let hero of heroes) {
//     console.log(hero.toUpperCase());
// }


//////////////////////////////////////////////////////// Practice Questions //////////////////////////////

// For a Given array with marks of students - [85,97,44,37,76,60]. Find the average marks of the entire class.

// let marks = [85,97,44,37,76,60]

// let sum = 0

// for (let val of marks) {
//     sum += val
// }

// let avg = sum / marks.length

// console.log(`Avg marks of the class = ${avg}`)

// For a Given  array with prices of 5 items - [250,645,300,900,50].
// Find items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let items = [250,645,300,900,50];

// let i = 0;
// for (let val of items) {
//     console.log(`Value at index ${i} = ${val}`);

//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`Value after offer = ${items[i]}`);

//     i++;
// }


for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] = items[i] - offer;
}

console.log(items);










































