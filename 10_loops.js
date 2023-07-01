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
        for(j = 0; j < arr.length; j ++) {
            product *= arr[i][j];
        }
    }

    return product;
}

let product = multiplyAll([[1,2],[3, 4],[5, 6, 7]]);

console.log(product);