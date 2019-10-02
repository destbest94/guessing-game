class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.result = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.result = Math.ceil((max + min) / 2);
    }

    guess() {
        return this.result;
    }

    lower() {
        this.max = this.result;
        let range = this.max + this.min;

        this.result = Math.ceil((range) / 2);
    }

    greater() {
        this.min = this.result;
        let range = this.max + this.min;

        this.result = Math.ceil((range) / 2);
    }
}

module.exports = GuessingGame;
