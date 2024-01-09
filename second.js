////////////////////////////////////// Artimetic Operators //////////////////////////////////////

// let a = 5;
// let b = 2;

// console.log("a = ", a, "& b = ", b);
// console.log("a + b = ", a + b);
// console.log("a * b = ", a * b);
// console.log("a - b = ", a - b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);

// console.log("a ** b = ", a ** b);  // 5^2 = 25  (Exponentiation)

//////////////////////////////////////// Unary Operators ///////////////////////////////////////

// let a = 5;
// let b = 2;

// console.log("a = ", a, "& b = ", b);
// a++; //a = a + 1;
// console.log("a = ", a);

// a++ , ++a / a-- , --a

// console.log("a++ = ", a++); // Result is 5 because this is post increment. First print the value then update the value.
// console.log("a = ", a);

// console.log("++a = ", ++a); // Result is 6 because this is Pre Increment. First change the value then print the value.

// console.log("a-- = ", a--); // Result is 5 because this is Post Decrement. First print the value then update the value.
// console.log("a = ", a);     // Restlt is 4.

// console.log("--a = ", --a); // Result is 4 because this is Pre Decrement. First change the value then print the value.

/////////////////////////////////// Assignment Operators ////////////////////////

// let a = 5;
// let b = 2;

// console.log("a = ", a, "& b = ", b);

// a += 4; // a = a + 4
// console.log("a = ", a);

// a -= 4; // a = a - 4
// console.log("a = ", a);

// a *= 4; // a = a * 4
// console.log("a = ", a);

// a /= 4; // a = a / 4
// console.log("a = ", a);

// a %= 4; // a = a % 4
// console.log("a = ", a);

// a **= 4; // a = a ** 4
// console.log("a = ", a); //625


////////////////////////////////////////////// Comparison Operators /////////////////////////////

// let a = 5;
// let b = 5;
// console.log("a == b ", a == b); // True

// let a = 5;
// let b = "5";
// console.log("a == b ", a == b); // True Because Javascript convert the string into number and then compared.

// let a = 5;
// let b = "5";
// console.log("a === b ", a === b); // False beacuse we use the Equal to & type version (===)

// let a = 5;
// let b = "5";
// console.log("a !== b ", a !== b); // True


/////////////////////////////////////////////// Conditional Operation ////////////////////////////

// let age = 17;

// if(age >= 18) {
//     console.log("You can vote");
// }
// else  {
//     console.log("You cannot vote");
// }

// if (age < 18){
//     console.log("junior")
// } else if (age > 60){
//     console.log("senior")
// } else {
//     console.log("middle")
// }


// let mode = "light";
// let color;

// if (mode == "dark") {
//     color = "black";
// }
// if (mode == "light") {
//     color = "white";
// }
// console.log(color);

////////////////////////////////////////////// Ternary Operators /////////////////////////////

// let age = 25;

// //syntax : Condition ? True Output : False Output
 
// let result = age >= 18 ? "adult" : "not adult";

// console.log(result);


/////////////////////////////////////////////////////////////////////////////////////////////////


// Get user to input a number using prompt("Enter a number: "). Check if the number is a multiple of 5 or not.

// alert("Hello Akash!!!");  // One time popup.

// prompt("Hello"); // Prompt is basically to take input from the user.

// let name = prompt("Enter the name: ");
// console.log(name);

// let num = prompt("Enter a Number: ");

// if (num % 5 == 0){
//     console.log(num, "is multiple of 5");
// } else {
//     console.log(num, " is not multiple of 5");
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// write a code which can give grades to students according to their scores: 80-100 A, 70-89 B, 60-69 C, 50-59 D, 0-49 F

let scores = prompt("Enter the Marks: ");

if (scores >= 80 && scores <= 100){
    console.log("A");
}else if (scores >= 70 && scores <= 79){
    console.log("B");
}else if (scores >= 60 && scores <= 69){
    console.log("C");
}else if (scores >= 50 && scores <= 59){
    console.log("D");
}else if (scores <= 49){
    console.log("F");
}else{
    console.log("Invalid Value");
}



















































































