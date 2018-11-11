var Letter = require('./letter.js');

function Word(word) {
    this.word = word;
    this.letters = [];
    this.complete = false;


    for (let i = 0; i < this.word.length; i++) {
        console.log(this.word[i]);    
    }

}




module.exports = Word();