// condition ? statement-if-true : statement-if-false;

function checkEqual(a,b) {
    // if(a===b) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
    return a===b ? true : false;
}

console.log(checkEqual(1,2));


// multiple tenary operator
function checkSign(num) {

    return num > 0 ? "Positive" : num < 0 ? "negative": "zero"
}

console.log(checkSign(0));

