const calculateDiscount = (originalPrice, discountedPrice) => {
    return `The Discounted Percentage of the Product with Discounted Price ${discountedPrice}Rs and Original Price ${originalPrice}Rs is ${(discountedPrice / originalPrice * 100).toFixed(2)}%`;
}
console.log(calculateDiscount(10, 4));
console.log(calculateDiscount(250, 60));
console.log(calculateDiscount(12000, 2500));