// let btn = document.querySelector("#btn");

// Access the btn using Events.

// btn.onclick = () => {
//     console.log("btn was clicked");
// }

///////////////////////////////////// Event Handling in JS //////////////////////

// btn.onclick = () => {
//     console.log("btn was clicked");
//     let a = 25;
//     a++;
//     console.log(a);  //26
// }

// let box = document.querySelector("#box");

// box.onmouseover = () => {
//     console.log("you are inside div");
// }

// box.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }

////////////////////////////////////// Event Listeners ////////////////////////////

// let btn = document.querySelector("#btn");

///////////////////// Add Event Listeners.
// In Event Listeners through same event used with multiple works.

// btn.addEventListener("click", () => {
//     console.log("Button was clicked");
// });

// we also access the event object - (evt).

// btn.addEventListener("click", (evt) => {
//     console.log("Button was clicked - Handler2");
//     console.log(evt);
//     console.log(evt.type); //click
// });

///////////////////// Remove Event Listeners.

// btn.addEventListener("click", () => {
//     console.log("Button was clicked - Handler-1");
// });

// btn.addEventListener("click", () => {
//     console.log("Button was clicked - Handler-2");
// });

// const handler3 = () => {
//     console.log("Button was clicked - Handler-3");
// }

// btn.addEventListener("click", handler3);

// btn.addEventListener("click", () => {
//     console.log("Button was clicked - Handler-4");
// });


// // Suppose we remover handler-3 event.

// btn.removeEventListener('click', handler3);


/////////////////////////////////////////////////// Let‘s Practice Questions ///////////////////////////////////////


// Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.

// let modeBtn = document.querySelector("#mode");

// let currMode = "light"; // dark

// modeBtn.addEventListener("click", () => {
//     if(currMode === "light") {
//         currMode = 'dark';
//         document.querySelector('body').style.backgroundColor = 'black';
//     } else {
//         currMode = 'light';
//         document.querySelector('body').style.backgroundColor = 'white';
//     }

//     console.log(currMode);
// }) 

/////////////////////////////////// OR ///////////////////////////////////////////

let modeBtn = document.querySelector("#mode");

let body = document.querySelector('body');

let currMode = "light"; // dark

modeBtn.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = 'dark';
        body.classList.add('dark');
        body.classList.remove('light');
    } else {
        currMode = 'light';
        body.classList.add('light');
        body.classList.remove('black');
    }

    console.log(currMode);
}) 



















































































