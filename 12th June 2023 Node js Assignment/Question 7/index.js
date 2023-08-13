const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('<b>"I Am Happy To Learn Full Stack Web Development From PW Skills!"</b>', (err) => {
            if (err) throw err;
            console.log("I Am Happy To Learn Full Stack Web Development From PW Skills!")
        }
        )
    }
    res.end()
})

server.listen(port)