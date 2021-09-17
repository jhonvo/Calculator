var display = document.querySelector('#display'); // Looking for the value that appear on the screen.
// console.log(display);

let tempScreen = ""; // Setting the value of the memory of the calculator
let number = ""; // The number that will be displayed on the screen. This gets cleared after: 1. you ckick on C 2. you check the result 3. you click on any operator.

function press(element){ // funciton to adjust the numbers on the display.
    number += element;
    display.innerHTML = number;
}

function setOP(element){ // Function to start writting the operation.
    if (tempScreen == ""){
        tempScreen = display.innerHTML + element;
    }
    else {
        let calculate = `(${tempScreen} ${display.innerHTML})`; // Saving the operation in () so it is calculated in order.
        tempScreen = calculate + element;
    }
    number = "";
}

function clr(){ // Clearing all the base variables
    number = "";
    tempScreen = "";
    display.innerHTML = 0;
}

function calculate(){ // Doing the final calculation
    let result = `${tempScreen} ${display.innerHTML}`;
    console.log(result);
    display.innerHTML = eval(result); // This function will convert the string equation into a math equation.
    number = "";
    tempScreen = "";
}
