// Assume a situation where our server restricts access to its configuration via the user interface& The only way
// to obtain the OS and release information is through a programmatic approach& In this challenge, you are
// expected to use the os module and print the os name and the os"release version to the console&

const os = require ('os');
console.log("Operating System name :", os.type())
// console.log("os version :", os.version());
console.log("os release :" ,  os.release())