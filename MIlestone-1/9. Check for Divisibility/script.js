// Write a program takes an array of numbers and print all the numbers that are divisible by 3 , but not by 2. 
// use a for loop and continue statement.


const arr = [15, 18, 16,36, 17, 93, 21];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && (arr[i] % 2 !== 0)) {
        console.log(arr[i]);
    }
    continue;

}