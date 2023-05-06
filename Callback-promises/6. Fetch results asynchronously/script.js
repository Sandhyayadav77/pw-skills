// 6. Fetch results asynchronously.

// Write a function that asynchronously fetches data from an API 

// [ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console

async function fetchfunc() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(data);
    return data;
}
fetchfunc();

fetchfunc()
    .then(response => response.json())
    .then((actualDataBody) => console.log(actualDataBody));