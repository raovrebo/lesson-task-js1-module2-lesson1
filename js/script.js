// Question 1
console.log("Question 1");

function receivingFunction(callback) {
    if (typeof callback === "function") {
        callback();
    } else {
        console.log("The argument is not a function");
    }
}

const callbackFunction = function () {
    console.log("I am a callback function");
};

receivingFunction(callbackFunction);

// Question 2
console.log("Question 2");

const prizes = ["Bags of bananas", "Box of frogs", "Car of clowns"];

prizes.forEach(function (prize, index) {
    console.log(`Prize ${index + 1}: ${prize}`);
});

// Question 3
console.log("Question 3");

const numberOfSeconds = 5;

function logMessage() {
    console.log(`I waited ${numberOfSeconds} seconds before executing`);
}

setTimeout(logMessage, numberOfSeconds * 1000);

// Question 4
console.log("Question 4");

const interval = 1500;
let count = 0;
const limit = 4;

function logNumber() {
    
    count++;

    console.log(count);

    if (count === limit) {
        clearInterval(intervalId);
    }
}

const intervalId = setInterval(logNumber, interval);

