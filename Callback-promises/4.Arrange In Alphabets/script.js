// 4. Arrange in alphabetical order.

// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback function. The program should use the map function to create a new list containing only the titles of the books, and then pass this new list to the callback function. The callback function should then log the titles to the console in alphabetical order

const alphabeticalOrder = (listOfObjects, callback) => {
    const newList = listOfObjects.map((obj) => {
        return ({ title: obj.title, })
    })
    // console.log(newList);
    callback(newList);
}
const books = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        year: 2002
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        year: 1999
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        year: 2004
    }];
const sortAlphabeticalOrder = (list) => {
    // console.log(list);
    // compares two strings 
    list.sort((a, b) => a.title.localeCompare(b.title));
    console.log(list);
}
alphabeticalOrder(books, sortAlphabeticalOrder)