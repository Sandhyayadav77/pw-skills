const fs = require('fs')
// console.log(fs)
fs.open('nodejs_architecture.txt', 'w', (err, file)=>{
    if(err) throw err;
    console.log('Saved !')
})