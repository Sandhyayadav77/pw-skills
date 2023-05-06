
const rentalCostCalculate = (days, carType) => {
    const rentalCost = {
        Economy: 4000,
        Midsize: 10000,
        Luxury: 20000,
    }

    if (carType === "Economy") {
        return `Rental Cost of ${carType} for ${days} Days is ${rentalCost["Economy"] * days}`;
    }
    else if (carType === "Midsize") {
        return `Rental Cost of ${carType} for ${days} Days is ${rentalCost["Midsize"] * days}`;
    }
    else if (carType === "Luxury") {
        return `Rental Cost of ${carType} for ${days} Days is ${rentalCost["Luxury"] * days}`;

    }
    else {
        console.log("Invalid");
    }
}
console.log(rentalCostCalculate(3, "Luxury"));
console.log(rentalCostCalculate(10, "Economy"));
console.log(rentalCostCalculate(13, "Midsize"));