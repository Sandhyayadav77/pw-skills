const userDetails = {
    userName: "Sandhya yadav",
    balance: 7000,
    deposit: function (amount) {
        this.balance += amount;
        console.log(`The Deposit amount is ${amount}Rs \n The total amount in bank is ${this.balance}`)
    },
    withdrawal: function (amount) {
        if (amount > this.balance) {
            console.log("Insufficient Balance");
        }
        {
            this.balance -= amount;
            console.log(`Withdrawal Amount is ${amount} and Rest Balance is ${this.balance}`)
        }
    }
}

userDetails.deposit(1200);
userDetails.withdrawal(5000)