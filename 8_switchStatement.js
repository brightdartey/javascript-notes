/*
Write a switch statement which test val and sets answer for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"
*/
let answer = ["alpha", "beta", "gamma", "delta"];
function testInSwitch(val) {
    let answer = "";
    switch(val) {
        case 1: 
            answer = "alpha";
            break;
        case 2: 
            answer = "beta";
            break;
        case 3: 
            answer = "gamma";
            break;
        case 4: 
            answer = "delta";
            break
    }
    return answer;
}

console.log(testInSwitch(3));

// default answer

function defaultSwitch(val) {
    let answer = "";
    switch(val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
        }
    return answer;
}

console.log(defaultSwitch("d"));

//Multiple identical inputs

function sequentialSize(val) {
    let answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Medium";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}

console.log(sequentialSize(8));

// seplace ifElse statement with switch case
function chainToSwitch(val) {
    let answer = "";
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 7:
            answer = "Ate Nine";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 99:
            answer = "Missed me by this much";
            break;
    }
    return answer;
}

console.log(chainToSwitch(1));

// return boolean value
function isLess(a,b) {
    return a < b;
}

console.log(isLess(5,2));

// return early parttern

// count cards with switch case