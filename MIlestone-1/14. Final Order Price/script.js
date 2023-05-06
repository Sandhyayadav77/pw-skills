const customerCart = [
    {
        pen: 20,
        quantity: 3
    },
    {
        Book: 510,
        quantity: 5
    },
    {
        Copy: 130,
        quantity: 7
    },
]

const totalCost = (customerCartArray) => {
    const priceArrayWithTotalQunatity = customerCart.map((element) => Object.values(element).reduce((item, quantity) => item * quantity, 1));
    //    return array of order price
    console.log(priceArrayWithTotalQunatity);

    // retrun total order price
    return priceArrayWithTotalQunatity.reduce((previous, current) => previous + current, 0);

}
console.log(`The Final Order Price is ${totalCost(customerCart)}`);