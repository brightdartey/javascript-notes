let myFirstName = "Bright";
let myLastName = "Dartey";

console.log(myFirstName, myLastName);
let myStr = "I'm Javascript Developer's nightmare"; // use backslash (\) or single quotes to excape double quotes

// console.log(myStr);

// concatenate strings
let myName = "Bright " + "Dartey";
// console.log(myName);

let myString = "My first line\nMy second line\f\\my third line";
// console.log(myString);

let greeting = "Hello, Welcome! My name is " + myFirstName +  " and I'm a developer";
console.log(greeting);

let anAdj = "Amaizing";
let str = "freeCodeCamp is "
str+= anAdj

console.log(str);

let myLastNameLength = myLastName.length;
let myFirstNameLength = myFirstName.length;
let lastletter = myLastName[myLastName.length - 1];
console.log(lastletter);

let firstleterfirstname = myFirstName[0];
let firstleterlastname = myLastName[0];

console.log(firstleterfirstname, firstleterlastname);

function sentence(noun, adverb, adjective, verb) {
    let result = "";
    result+= "the " + adverb +"` "+ noun + " " + verb + " to the store " + adjective;  
    return result;
};

console.log(sentence("Dog", "big", "slowly", "ran"));