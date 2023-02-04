class GuessingGame {
    constructor(min, max) {
        this.min = min
        this.max = max
    }

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        return  Math.ceil((this.max - this.min) / 2 + this.min);
    }

    lower() {
        this.max = this.guess();
    }

    greater() {
        this.min = this.guess();
    }
}

module.exports = GuessingGame;

// let res = new GuessingGame
// res.setRange(0, 100)
// res.lower()
// res.greater()
// res.lower()
// res.greater()
// res.greater()
// console.log(res.guess())
