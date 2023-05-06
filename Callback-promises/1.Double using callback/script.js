// Write a function that takes in an array of integers and a callback function, and returns a new array where each element is doubled using the callback

const doubleValues = (arr, callback) => {
    const dblValueArray = [];
    for (elem of arr) {
        const dblValueArrayElement = callback(elem);
        dblValueArray.push(dblValueArrayElement);
    }
    // console.log(dblValueArray);
    return dblValueArray ;
}

const doublevalueFunction = (value) => {
    return value * 2;
}
const array =[9, 23, 12, 7, 12];
const arrayWithDoubleValueElements =doubleValues(array, doublevalueFunction)
console.log(arrayWithDoubleValueElements)