const multiplier = {
    numbers: [7,4,6,7,8],
    multiplyBy : 2,
    multiply() {
       return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());