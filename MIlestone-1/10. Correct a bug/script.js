// const supposedCart = [2, 6, 12, 10, 4, 8];
// shopping cart without bug 

// due to bug quantity reduced to half
const bugCart = [1, 3, 6, 5, 2, 4];

// function for fixing bug
const bugFixing = (bugCart) => {
    return bugCart.map(item => item * 2);
}

console.log(bugFixing(bugCart));