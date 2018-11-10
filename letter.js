function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
    this.reveal = function () {
        if (this.letter == " ") {
            this.guessed = true;
            return this.letter;
        } else {
            return "_";
        }
    };
}

// var input = new Letter("");

// console.log(input.letter);


module.exports = Letter();