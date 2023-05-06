// 9. Error Handling

// Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then handles errors that may occur. For example, you could use the API at https://jsonplaceholder.typicode.com/posts/123456789 to simulate an error, and then display an error message on the webpage.


async function logJSONData() {
    try {

        // Incase if network will ok
        // const response = await fetch("https://jsonplaceholder.typicode.com/posts ");
       
    //    network is not ok
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/123456789");
        if(!response.ok){
            throw new Error("Response is not ok");
        }
        const jsonData = await response.json();
        console.log("Success:", jsonData);
    }
    catch (error) {
        console.log("Error : ", error)
    }
}
logJSONData();