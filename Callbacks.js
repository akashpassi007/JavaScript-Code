
/////////////////////////////////// Callbacks, Promises & Async Await ///////////////////////////////

// function hello() {
//     console.log("hello");
// }

// setTimeout function is used when we decided the time to print the function.
// setTimeout(hello,  2000) // timeout 1s = 1000ms; 

////////////////////////////////////////////////////////////////////////////////////////

// Arrow function.
// setTimeout(() => {
//     console.log("hello");
// }, 4000);


/////////////////////////////////////// Sync in JS /////////////////////////////////////////////////////

////////////////////////////////////// Synchronous ////////////////////////////////////////////////////

// Synchronous means the code runs in a particular sequence of instructions given in the program. 
// Each instruction waits for the previous instruction to complete its execution.

///////////////////////////////////// Asynchronous /////////////////////////////////////////////////////

// Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI. 
// Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

// Example 1: This is the example Asynchronous Programming.

// console.log("One");
// console.log("Two");

// setTimeout(() => {
//     console.log("hello");
// }, 4000);

// console.log("Three");
// console.log("Four");

//////////////////////////////////////////////////////////////// CallBacks ///////////////////////////////////////////////

// A callback is a function passed as an argument to another function. 

// Example: 

// function sum(a, b) {
//     console.log(a+b);
// }

// function calculator (a, b, sumCallback) {
//     sumCallback(a, b);
// }

// calculator(1,2, sum);

// Example:

// function getData (dataId) {
//     console.log("Data ", dataId);
// }

// function getData (dataId) {  // delay 2s.
//     setTimeout(() => {
//         console.log("Data", dataId);
//     }, 2000);
// }

// getData(1);
// getData(2);
// getData(3);


// function getData (dataId, getNextData) {  // delay 2s.
//     setTimeout(() => {
//         console.log("Data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }


// This is called CallBack Hell.

// getData(1, () => {    // 2nd argument is the callBack 
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });

////////////////////////////////////////////////////// Promises //////////////////////////////////////////////////////////////////////////

// Promise is for “eventual” completion of task. It is an object in JS. 
// It is a solution to callback hell.
// *resolve & reject are callbacks provided by JS.


// let promise = new Promise( (resolve, reject) => { .... } )                  // Syntax. //
// Function with 2 handlers


// Promises have the three stage:- Pending, Fulfilled (Resolve), Rejected.

// Promises 
// A JavaScript Promise object can be:
// Pending : the result is undefined
// Resolved : the result is a value (fulfilled)    resolve( result )
// Rejected : the result is an error object        reject( error  )

// *Promise has state (pending, fulfilled) & some result (result for resolve & error for reject). // Note

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a Promise");                  // PromiseState: pending
// })


// let promise = new Promise((resolve, reject) => {
//     console.log("I am a Promise");                  // PromiseState: Fulfilled
//     resolve("Success");
//     resolve(123);
// })


// let promise = new Promise((resolve, reject) => {
//     console.log("I am a Promise");                     // PromiseState: Rejected
//     reject("Error Occupied");
// })


// Example:
// function getData (dataId, getNextData) {  // delay 2s.
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data", dataId);
//             resolve("Success");
//             // reject("Error");
//             if (getNextData){
//                 getNextData();
//             }
//         }, 10000)
//     })
// }

///////////////////////////////////////// Promises .then( ) & .catch( ) //////////////////////////////////////////////////

// promise.then( ( res ) => { .... } )
// promise.catch( ( err ) ) => { .... } )


// Example:

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a Promise");
//         resolve("Network Success");
//         // reject("Network Error");
//     })
// }

// let promise = getPromise(); // call the getPromise function.
// promise.then(() => {
//     console.log("promise fulfilled");
// })

// promise.then((res) => {
//     console.log("promise fulfilled", res);
// })

// promise.catch(() => {
//     console.log("Rejected");
// })

// promise.catch((err) => {
//     console.log("Rejected", err);
// })


//////////////////////////////////////////////////////////////////// Promise Chain /////////////////////////////////////////////////////////

// Example: In this example both result show in the same time. But we want fetching data 1 show then after few seconds late second data show.

// function asyncFunc1() {
//      return new Promise((resolve, reject) => {
//          setTimeout(() => {
//              console.log("Some Data from DataBase 1");
//              resolve("Success");
//          }, 4000);
//      })
//  }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some Data from DataBase 2");
//             resolve("Success");
//         }, 4000);
//     })
// }

// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
// })


// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// })

// Promise Chain

// console.log("Fetching Data1.........");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("Fetching Data2.........");         
//     let p2 = asyncFunc2();                                  // Promise Chain.
//     p2.then((res) => {
//         console.log(res);
//     })
// })

///////////////////////// OR another way of write code /////////////////////

// console.log("Fetching Data1............");
// asyncFunc1().then((res) => {
//     console.log("Fetching Data2.......");
//     asyncFunc2().then((res) => {});
// })


////////////////////////////////////////////////////////////////// Async-Await ///////////////////////////////////////////

// async function always returns a promise. ////
// async function myFunc( ) { .... }

async function hello (){         // async function return automatically promise.
    console.log("Hello");
}

// await pauses the execution of its surrounding async function until the promise is settled. 

// Example : Basic Example.

// function api() {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather Data");
//             resolve(200);                // 200 means Success.
//         }, 2000);
//     })
// }

// async function getWeatherData() {
//     await api();   // 1st time call
//     await api();  // 2nd call
// }

////////////////////////////////////////////////////////// Final Summary ////////////////////////////////////////

// Example 2:

function getData (dataId) {  // delay 2s.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve("Success");
            // reject("Error");
        }, 2000);
    })
}

// Async-Wait

// async function getAllData() {
//     console.log("Getting Data 1.....");
//     await getData(1);
//     console.log("Getting Data 2.....");
//     await getData(2);
//     console.log("Getting Data 3.....");
//     await getData(3);
// }

// Promise Chain

// console.log("getting data1............");
// getData(1)
//     .then((res) => {
//         console.log("getting data2............");
//         return getData(2);
//     })
//     .then((res) => {
//         console.log("getting data3............");
//         return getData(3);
//     })
//     .then((res) => {
//         console.log(res);
//     })

// CallBack Hell.

// getData(1, () => {    // 2nd argument is the callBack 
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });











































































































