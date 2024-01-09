//////////////////////////////////////////// Loops ///////////////////////////////////////////

/////// For Loop /////////


// for (let i=1; i<=50000; i++){
//     console.log("Akash")
// }

// console.log("Loop has ended")


/////// While Loop //////////

// let i = 1;
// while (i <= 5) {
//     console.log("i=", i);
//     i++;
// }

///////// Do-while ///////////////

// let i = 20;
// do {
//     console.log("Akash Hello!");
//     i++;
// } while(i<=20);


///////////////// for-of Loop ////////////////

// let str = "Akash Passi";

// for (let i of str) {
//     console.log("i = ", i);
// }

// Result :
// i = A
// i = K
// i = A
// i = S
// i = H
// i =     (Emplty Space)
// i = P
// i = A
// i = S 2
// i = I

// Calculate the length of the String.

// let str = "Akash Passi";

// let size = 0;
// for (let i of str) {
//     console.log("i = ", i);
//     size++;
// }

// console.log("String Size = ", size);


///////////////////////////////////////////////// For-in Loop ///////////////////////

// let student = {
//     name : "Akash",
//     age : 25,
//     cgpa : 8.0,
//     isPass : true
// };

// for (let key in student){
//     console.log("key = ", key,  "Value = ", student[key]);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                          //  Practice Question  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Print all even numbers from 0 to 100.

// for (let i=1; i<=100; i++){
//         console.log(i)
//     }


// for (let i=0; i<=100; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }


// 2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.


// In Prompt the number is coming in the form of String.

// let gameNum = 25;
// let userNum = prompt("Guess the game number : ");

// while (userNum != gameNum) {
//     userNum = prompt("You entered wrong Number. Guess Again : ");
// }

// console.log("Congratulations, you entered the right number.");


///////////////////////////////////////////////////////////////// Strings /////////////////////////////////////////////////////////////

// let str = "Akash";
// console.log(str);


//////////////////////////// Template Literals in JS (`  `)////////////////////////////


// let obj = {
//     item : "Pen",
//     price : 10
// }

// console.log("This cost of", obj.item, "is", obj.price, "rupees"); // Same line write in butter way using Literals. // In this line the number is Highlight in the output.

// let output = `The cost of ${obj.item} is ${obj.price} rupees.`; // But in the literals the number is not highlight in the output because the number is now the part of Strings.
// console.log(output);

// let specialString = `This is a template literal ${1 + 2 +3}`;
// console.log(specialString);

///////////////////////////////////////////// Strings Methods //////////////////////////////////

let str = "akash hello";
new_str = str.toUpperCase();
console.log(new_str);             //// Strings are immutable.So didn't change the original String.





























































