const shoppingCart = ["pens", "bag", "books", "eraser", "scale", "sketch", "scale", "pens"];

//fitler out the duplicate items fromt he shopping cart
const removeDuplicateShoppingCart = shoppingCart.filter((element, index) => {
    if (shoppingCart.indexOf(element) === index)
        return element;
})


console.log(removeDuplicateShoppingCart)