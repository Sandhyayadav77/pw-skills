// Functions Expressions are not Hoisted
const product = multiplyNumbers(2, 3);
console.log(product);
// Output : "TypeError: multiplyNumbers is not a function"

var multiplyNumbers = (a, b) => {
    return a * b;
}

