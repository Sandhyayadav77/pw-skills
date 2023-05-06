// Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along with the manipulated string or the new string to the console
const manipulateSting = (str) => {
    const logString = () => {
        console.log(`The manipulated String is: ${str.toUpperCase()}`)
    }
    // Returning a callback function
    return logString;
}
const upperCaseString = manipulateSting("sanie");
upperCaseString();