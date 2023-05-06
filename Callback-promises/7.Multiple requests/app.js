// 7. Multiple requests.


async function retieveData(){
    const response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const todo = await response1.json(); 
    const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await response2.json(); 
    const result = {todo, post};
    console.log(result);
} 

retieveData()
// .then(() => console.log("all set"));