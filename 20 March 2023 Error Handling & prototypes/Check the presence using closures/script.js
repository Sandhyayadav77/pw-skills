/*
Create a numberChecker function that takes an array of numbers as an argument and returns a function. The returned function should take another number as an argument and return true if the number is in the array, and false otherwise.
*/

const numberChecker = (arr) => {
    return innerNumberChecker =(number) => {
       return arr.includes(number);
    }
}

const arr = [10, 23, 11, 56];
// console.log(arr.includes(23));
console.log(numberChecker(arr)(24)); //false
console.log(numberChecker(arr)(10)); //true