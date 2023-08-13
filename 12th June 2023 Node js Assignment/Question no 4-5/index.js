const fs = require('fs')
const data = "® Node.js is a platform that utilizes Javascript and is primarily employed for developing web applications that are highly focused on input / output operations, including but not limited to chat applications and multimedia streaming websites.The platform is const ructed using Google Chrome's V8 Javascript engine. A web application is a type of software that executes on a server and is displayed by a client's browser that obtains all the application's resources over the internet.";
const append =" Compared to other server - side languages, Node js has distinct advantages.Its asynchronous model and non - blocking 1 / 0 operation improve the scalability and performance web applications built on other frameworks.Node js can easily handle multiple client requests without requiring multiple threads,consuming less memory and resources.Additionally, it is highly scalable and provides high performance.Node js is also with multiple frameworks and makes the development process easier.Compared to other server - side languages, Node js has distinct advantages.Its asynchronous model and non - blocking 1 / 0 operation improve the scalability and performance of web applications on other frameworks.Node js can easily handle multiple client requests without requiring multiple threads, consuming less and resources.Additionally, it is highly scalable and provides high performance.Node js is also flexible with multiple frameworks and makes the development process easier. "

fs.writeFile('nodejs_architecture.txt', data, (err)=>{
    if(err) throw err;
    console.log("success");
})
fs.appendFile('nodejs_architecture.txt', append, (err)=>{
    if(err) throw err;
    console.log("appended successfully");
})
fs.readFile('nodejs_architecture.txt', 'utf-8', (err, data)=>{
    if(err) throw err;
    console.log(data)
})

// deletion of file 
fs.unlink('nodejs_architecture.txt',(err)=>{
    if(err) throw err;
    console.log("Deleted successfully !")
})