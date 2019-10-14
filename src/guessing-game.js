class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.result = Math.ceil((this.min + this.max)/2); // we divide the number into two parts and look in the middle for solution...
        return this.result; //..candidate then we ask if solution in one part or in another then repeat again with a half range
    }

    lower() {
        this.max = this.result;
        return this.max;
    }

    greater() {
        this.min = this.result;
        return this.min;
    }
}

module.exports = GuessingGame;
