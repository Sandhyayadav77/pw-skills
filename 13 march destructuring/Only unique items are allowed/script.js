/*
You are building a program that takes an array of numbers as input and you need to remove all the duplicates from the array. You want to write a function that can accomplish this task efficiently and returns a new set that contains only the unique elements. 
*/

const uniqueValue = (array) => {
    const uniqueValueArray = new Set(array);
    return uniqueValueArray;
}
const array = [1, 12, 13, 12, 10, 1, 5, 6, 7, 1, 7];
console.log( uniqueValue(array)); // object
console.log(Array.from(uniqueValue(array))); // array


// rough++++++++++++++++++++++++++++++++++++++++++++++++++++
// const array = new Set([1,2,4,2,5,6,1,3,]);
// console.log(array)