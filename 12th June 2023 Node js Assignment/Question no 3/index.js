const fs = require('fs');
data = "® Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focusedn input / output operations, including but not limited to chat applications and multimedia streaming websites.The platform is constructed by using Google Chrome's V8 JavaScript engine. A web application is a type of software that executes on a server and is dispayed by a client's browser that obtains all the application's resources over the internet.";


fs.writeFile('nodejs_architecture.txt', data , (err) => {
    if (err) throw err;
    console.log("Success !")
})