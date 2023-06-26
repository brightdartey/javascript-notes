// Declare your variable here
let myGlobal = 10;

function fun1() {
    //assign 5 to oppsGlobal here
    var oppsGlobal = 5;
    // console.log(oppsGlobal);
}

// unchage code

function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oppsGlobal != "undefined") {
        output += "myGlobal: " + oopsGlobal;
    }

    console.log(output);

}

fun1();
fun2();

// return
function sum(num1, num2, num3){
    let result = num1 + num2 + num3;
    return result
}

console.log(sum(200, 243, 355));

let summ = 23
function addFive() {
    summ += 5
}

addFive();

// function to for mltiplication table

function mutiply (num1, num2) {
    let result = num1 * num2
    console.log(result % 2);
    if(result % 2 == 0) {
        return "Even"
    }
    return "Odd"
}

mutiply = mutiply(3, 3);
console.log(mutiply);

// if condition in function
function trueOrFalse(wasThatTrue) {
    if(wasThatTrue) {
        return "Yes, That was true";
    }
    return "That's False";
}

console.log(trueOrFalse(true));

// Equality operator ==
function testEquality(val) {
    if(val == "23") {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEquality(23)); // convert type to number

// Stict equality ===
/*
3===3 true
3==="3" /false
*/
function testStrictEquality(val) {
    if(val === "20") {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrictEquality(20));

/*  Not equal !=
    Not equality !==
    Less than <
    Greater than >
    Less or equal <=
    Greater or equal >= 
*/
