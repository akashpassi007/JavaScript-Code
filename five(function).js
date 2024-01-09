
//////////////////////////////////// Function in JS ///////////////////////////

// function myFunction() {
//     console.log("Hello Js");
// }

// myFunction();


// function myFunction(msg) {
//     // Parameter (variable(msg))-> input
//     console.log(msg);
// }

//myFunction("I learn js");  // function call : Inside is "I learn js" is argument.

// Function of 2 numbers, sum.

// function sum(x, y) {
//     s = x + y;
//     return s;
// }

// let val = sum(3,4);
// console.log(val);

///////////////////////////////////////// Arrow-Function //////////////////////////////

// Sum Function.
function sum(a, b) {
    return a +b;
}

// Arrow Function.

// arrowSum variable is now act like a Function.
const arrowSum = (a, b) => {
    console.log(a+b);   // Result is 7.
}

const arrowMul = (a, b) => {
    return a*b;
}

const printHello = () => {
    console.log("Hello");
}

const printHelloworld = () => console.log("Hello");



/////////////////////////////////////////////////////////// Pratice Questions //////////////////////////////////////////////////////

// Create a function using the "Function" keyword that takes a string as an argument & returns the number of vowels in the string.

function countVowels (str) {
    let count = 0;
    for (const char of str) {
        if ( 
            char === "a" || char === "A" ||
            char === "e" || 
            char === "i" || 
            char === "o" || 
            char === "u"
         ) {
            count++;
        }
    }
    return count;
}


// Create an arrow function to perform the same task.

const countVowel = (str) => {
    let count = 0;
    for (const char of str) {
        if ( 
            char === "a" || char === "A" ||
            char === "e" || 
            char === "i" || 
            char === "o" || 
            char === "u"
         ) {
            count++;
        }
    }
    return count;
}

////////////////////////// forEach Loop //////////////////////

// forEach is only use for Array.

//let arr = [1,2,3,4,5,6];

// let arr = ["pune", "delhi", "mumbai"];
// arr.forEach(function printVal(val) {
//     console.log(val);
// })

// arr.forEach((val) => {       // Arraow function
//     // console.log(val)
//     console.log(val.toUpperCase())
// })

// arr.forEach((val, idx) => {       // Arraow function
//     // console.log(val)
//     console.log(val.toUpperCase(), idx)
// })

///////////////////////// Practice ////////////////////////

// Qs. For a given array of numbers, print the square of each value using the forEach loop.

// let num = [1,2,3,4];

// num.forEach((num) => {
//     console.log(num * num);
// })


////////////////////////////////// Map /////////////////////////////////

// Creates a new array with the results of some operation. The value its callback returns are used to form new array.
// syntax : arr.map( callbackFnx( value, index, array ) )

// let num = [65,77,95,78];

// let newArr = num.map((val) => {
//     // return val;                      // Didn't change in the original array.
//     return val*val;
// })

// console.log(newArr);

////////////////////////////// Filter /////////////////////////////////////////////////////////////////

// Creates a new array of elements that give true for a condition/filter.


// let arr = [1,2,3,4,5,6,7,8,9,10];

// let evenArr = arr.filter((val) => {
//     return val % 2 == 0;
// })

// console.log(evenArr);

////////////////////////////////// Reduce /////////////////////////////////////////////////////////////////

// Performs some operations & reduces the array to a single value. It returns that single value.

// let arr = [1,2,3,4,5,6,7,8,9,10];

// const output = arr.reduce((res, currval) => {
//     return res + currval;
// })

// console.log(output);


// find out the largest one.

// let arr = [5,6,2,1,3];

// const output = arr.reduce((prev, currval) => {
//     return prev > currval ? prev : currval;
// })

// console.log(output);

////////////////////////////////////// Practice Question //////////////////////////////////////

// Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.

let marks = [97,64,32,49, 99,96,86];

let toppers = marks.filter((val) => {
    return val > 90;
})

console.log(toppers);


// Qs. Take a number n as input from user. Create an array of numbers from 1 to n. 

let num = prompt("Enter a number");

let arr = [];

for (let i=1; i<=num; i++) {
    arr[i-1] = i; // 1(idx=0), 2(idx=1), 3(idx=2), 4(idx=3), 5(idx=4).
}

console.log(arr);

// Use the reduce method to calculate sum of all numbers in the array.

let sumval = arr.reduce((prev, curr) => {
    return prev + curr;
})

console.log("Sum =", sumval);

// Use the reduce method to calculate product of all numbers in the array.

let factorial = arr.reduce((prev, curr) => {
    return prev * curr;
})

console.log("factorial = ", factorial);






