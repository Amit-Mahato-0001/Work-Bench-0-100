{/* JS-Foundation 0-level */}

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

{/* Arrays */}

// Array -> collection of similiar multiple values ek variable me

const numbers = [10, 20, 30, 40]
const names = ["Aman", "Rohit", "Neha"]

// Access:

numbers(0) //10
names(2) //Neha

// Loop

for(let i=0; i<numbers.length; i++){
    console.log(numbers[i])
}

// map() - transform each element of array & return a new array without modifying the original array.

// syntax: 

array.map((item) => {
    return modifiedItem;
})

// eg:

const nums = [1, 2, 3]

const doubled = nums.map((n) => {
    return n*2
}) 

// output: [2, 4, 6]

// shortcut:

const double = nums.map(n => n*2);

// filter() - returns a array containing only those elements that satisfy a given condition.

// syntax:

array.filter((item) => {
    return condition;
});

// eg:

const nums = [1, 2, 3, 4, 5, 6];

const even = nums.filter(n => n%2 === 0);

// output: [2, 4, 6]

// find() - returns the first element that matches the condition. If no match found, returns undefined.

// eg:

const users = [
    { id: 1, name: "Aman"},
    { id: 2, name: "Rohit"}
];

const user = users.find(u => u.id === 2)

// output: {id: 2, name: "Rohit"}

// prac-task 1

const prices = [100, 200, 300];

// GST 18% add karke final array banao

const finalPrices = prices.map((price) => price + price * 0.18)

console.log(finalPrices)

// prac-task 2

const users = [
    { name: "Aman", isBlocked: false }, 
    { name: "Rohit", isBlocked: true },
    { name: "Neha", isBlocked: false }
]

// sirf non-blocked users nikalo

const nonBlockedUsers = users.filter((user) => user.isBlocked === false)

console.log(nonBlockedUsers)

// prac-task 3

const orders = [
    { id: 1, total: 500 },
    { id: 2, total: 1200 }
]

// id = 2 wala order find karo

const findOrder = orders.find((order) => order.id === 2)

console.log(findOrder)




