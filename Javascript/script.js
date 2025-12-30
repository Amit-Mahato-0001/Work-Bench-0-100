let a = 10; // let -> value change ho sakti hai
const b = 20; // const -> value change nahi hoti

// eg
let age = 20;
age = 21; //allowed

const name = "xyz"
name = "zyx" // not allowed

// Data Types

let number = 10; //number
let text = "hello" //string
let isActive = false //boolean
let nothing = null //null
let notDefined; //undefined

// For checking 

typeof number // "number"
typeof text // "string"

// Function

function sum(a, b) {
    return a + b;
}

sum(10, 30) //40

// Arrow function

const sum = (a, b) => {
    return a + b;
}

// shortcut:

const sum = (a, b) => a + b;

// condition

function checkAge(age){
    if(age >= 18){
        return "Adult";
    }
    else{
        return "Minor";
    }
}

// Object (API data isi form me hota hai)

const user = {
    name: "Maxim",
    age: 22,
    isAdmin: false
};

user.name; //Maxim

// Prac task (1)

function multiply(a, b){
    if(typeof a != "number" || typeof b != "number"){
        return "invalid input"
    }
    else{
        return a*b
    }
}

// prac task (2)

function isEven(num){

    if(num%2 === 0){
        return true
    }
    else{
        return false
    }
}




