const inventorySales = {
    capital: 250000,
    stock: 50000,
    balance: 250000,
    unitPrice: 1000,
    newSale:function(stockUnit){
        this.stock -= stockUnit;
        if(isNaN(stockUnit)){
            alert("Invalid input!")
        }else if (stockUnit > this.stock){
            alert("Order too large. Stock unavailable!");
            alert("Out of stock! Please update capital")
            console.log(inventorySales.updateCapital(+prompt("Inset capital amount you wish to add")))
        } else {
            this.capital -= (stockUnit*this.unitPrice);
            return `updated number of units of stock after purchase: ${this.stock} updated capital value after purchase ${this.capital}`;

        }
    },
    updateCapital:function(amountToAdd){
        this.capital += amountToAdd;
        return `capital has been updated to: ${this.capital}`
    },
    checkBalance:function(confirming, stockUnit){
        if(confirming == true){
            if(isNaN(stockUnit)){
                alert("Invalid input!")
            }else{
                this.balance -= (stockUnit*this.unitPrice);
                return`Current balance is: ${this.balance}`;
            }
        }
    }
}
console.log(inventorySales.newSale(prompt("Insert the number of units of stock purchased")))
console.log(inventorySales.checkBalance(confirm("Do you wish to check your balance?"), prompt("Insert number of stocks purchased")))
