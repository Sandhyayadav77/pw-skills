const { subscribe } = require('diagnostics_channel');
const events = require('events')
console.log(events.EventEmitter)
const eventEmitter = new events.EventEmitter();


// question no 8
// const mySusbscribe = ()=>{
//     console.log("Thank you for subscribing to college wallah");
// }
// // assign 
// eventEmitter.on('subscribe', mySusbscribe);
// eventEmitter.emit('subscribe')

// question no 9
// eventEmitter.removeListener('subscribe', mySusbscribe)
// console.log("REMOVED")


// question no 10
console.log(eventEmitter.getMaxListeners());
console.log("The updated maximu number of events are : ",eventEmitter.setMaxListeners(5).getMaxListeners());