// array is used to store mutple values of different datatype.

let array = ["Bright", 33];

array[1] = 45;
// console.log(array);

//mutiple array
let myArray =[[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
let mydata = myArray[0][2]; // 3
let mydata1 = myArray[3][0]; // [10,11,12]
let mydata2 = myArray[3][1]; // 13
console.log(mydata2);

// push() - add a new element to the end

myArray.push(15);
//pop() - remove the last element from an array
myArray.pop();
// shift() - remove the first element in the array
myArray.shift();
//unshift() - add a new element to the array
myArray.unshift("Paul")
console.log(myArray);

// shooping list

let myList = [["milk", 3], ["Banana", 5], ["meat", 1]];
