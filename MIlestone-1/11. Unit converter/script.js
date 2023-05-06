// convert celcius to fahrenheit 
const unitConverter = (Celcius) => {
    return `${Celcius} Celcius after converting into Fahrenheit , ${(Celcius * 9 / 5) +32}F`
}
console.log(unitConverter(96));
console.log(unitConverter(16));
console.log(unitConverter(37));