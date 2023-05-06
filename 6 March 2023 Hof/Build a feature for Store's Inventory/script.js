//price of an items in dollars
const item = {
    "bag": 50 ,
    "clock": 78,
    "shirt": 120, 
    "shoes": 80, 
    "quilt": 45,
    "bottle": 39
}

let priceListInRupees = Object.entries(item).map(([key, value])=>{
   return [key, value*80] // converting into rupees
})
console.log(Object.fromEntries(priceListInRupees))
