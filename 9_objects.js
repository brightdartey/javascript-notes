//Objects - like array but other than using indexes to access element we use properties.

let testObj = {
    "name": "Kal",
    "legs": "4",
    "tail": "1",
    "friends": ["everything!"]
};

// creat a Dog object
let Dog = {
    "name": "Bull",
    "leg": "4",
    "tail": "1",
    "friends": []
};

// accessing objects with dot notation
let manObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

let hatValue = manObj.hat;
let shirtValue = manObj.shirt;

console.log(hatValue);
console.log(shirtValue);

//Bracket notation 
let drinkObj = {
    "an entree": "apple",
    "the main": "Juicee",
    "la plat": "sweetline"
};

let entreeValue = drinkObj["an entree"];
let mainValue = drinkObj["the main"];

console.log(entreeValue);
console.log(mainValue);

// access objects with variables


// updating objects properties
let ourDog = {
    "name": "Bull",
    "leg": "4",
    "tail": "1",
    "friends": []
};
console.log(ourDog.name);

ourDog.name = "Happy Camper";

console.log(ourDog.name);

//adding new property to object

let myDog = {
    "name": "Bull",
    "leg": "4",
    "tail": "1",
    "friends": []
};

myDog["bark"] = "woof!";

console.log(myDog);

//Delete properties from object
delete ourDog.tail;
console.log(ourDog);


//seplace switch case with object

// checking for a property of an object
let myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp]
    } else {
        return "Not found"
    }
};

console.log(checkObj("dog"));

//manupulating complex objects

//record collection

 let collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    },
 };
// keep a copy of the collection for test
let collectionCopy = JSON.parse(JSON.stringify(collection));

//Only change code below this line
function updateRecords(id, prop, value) {
    if (value === " ") {
        delete collection[id][prop];
    } else if (value === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection;
};

//Alter values below to test code
console.log(updateRecords(5439, "artist", "ABBA"));