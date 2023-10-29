class UberPriceCalculator {
    constructor(basePrice, costPerMinute, costPerMile) {
        this.basePrice = basePrice;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
    }

    calculateFare(minutes, miles) {
        return this.basePrice + (this.costPerMinute * minutes) + (this.costPerMile * miles);
    }
}

let uberX = new UberPriceCalculator(10, 0.15, 1.1);
let fare = uberX.calculateFare(30, 10); // 30 minutes and 10 miles
console.log(fare); // Outputs the calculated fare
