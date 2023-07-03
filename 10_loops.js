//while Loop = run a code repeatedly while a condition is true
let myArray = [];

let i = 0;
while (i < 5) {
    myArray.push(i);
    i++; 
}

console.log(myArray);

// for loop
let arr = [];

for(let i = 0; i < 5; i++) {
    arr.push(i);
}

console.log(arr);

// itirate an array of even numbers
let myArr = [];

for(let i = 0; i < 10; i += 2) {
    myArr.push(i);
}

console.log(myArr);

// odd numbers
let arr1 = [];

for (let i = 1; i < 10; i+= 2) {
    arr1.push(i);
}

console.log(arr1);

// count backward with loops
let arr2 = [];

for(let i = 10; i > 0; i -=2) {
    arr2.push(i);
}

console.log(arr2);

// itirate through an array
let theArr = [9, 10, 11, 12, 100];
let ourTotal = 0;

for(i = 0; i < theArr.length; i++) {
    ourTotal += theArr[i];
    // console.log(ourTotal);
}

console.log(ourTotal);

// Nesting For Loops
function multiplyAll(arr) {
    let product = 1;
    for(let i = 0; i < arr.length; i ++) {
        for(j = 0; j < arr[i].length; j ++) {
            product *= arr[i][j];
        }
    }

    return product;
}

let product = multiplyAll([[1,2],[3, 4],[5, 6, 7]]);

console.log(product);

//itirate Do...While Loops
let arr3 = [];
let k = 10;

do {
    arr3.push(k);
    k++;
} while (k < 5)

console.log(k , arr3);

// challenge
let contacts = [
    {
        "firstname": "Akira",
        "lastname": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstname": "Harry",
        "lastname": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstname": "Sherlock",
        "lastname": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstname": "Kristian",
        "lastname": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

console.log(contacts[0]["likes"]);
function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) { 
        if(contacts[i].firstname === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact"
}

let data = lookUpProfile("Sherlock", "lhome");


console.log(data);

// create random number

function randomNumber() {

    return Math.floor(Math.random() * 10);
}

console.log(randomNumber());

//parse Int

function convertToInt(str) {
    return parseInt(str);
}

console.log(convertToInt("54"));