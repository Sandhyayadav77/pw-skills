const totalBillSplitter = (costEachDish, noOfPerson) => {
    const totalBill = Object.values(costEachDish).reduce((acc, element) => acc + element, 0);
    return ({
        "totalAmountOfBill": totalBill,
        "eachPerosnBill": totalBill/ noOfPerson,
    })
}

const cost = {
    coldDrink: 300,
    chowmeen: 350,
    rice: 150,
    dal: 230,
    dessert: 450,
}

const cost1 = {
    coldDrink: 300,
    chowmeen: 350,
    rice: 150,
    dal: 330,
    dessert: 450,
    coffee: 500,
    pizza : 700,
}
const numberofperson = 5;
const numberofperson1 = 6;
console.log(totalBillSplitter(cost, numberofperson))
console.log(totalBillSplitter(cost1, numberofperson1))