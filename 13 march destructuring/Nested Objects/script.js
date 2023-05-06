/*
Write a function that takes an object representing a person as input, and extracts the name and street properties from a nested object using object destructuring. The function should return an object with these two properties. A sample object is given below.
// */

const nestedObject = (person) => {
    const { name, address: { street } } = person;
    return {name, street};
};

const person = {
    name: "Sanie",
    age: 20,
    address: {
        street: "BB, Block B, Industrial Area.",
        city: "Sector 62, Noida",
        state: "Uttar Pradesh",
    },
}
console.log(nestedObject(person))
