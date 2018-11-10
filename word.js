var Letter = require('./letter.js');

function Word(word) {
    this.word = word;
    this.letters = [];
    this.complete = false;

   
    console.log(this.word);

}

var pick = new Word("halloween");



module.exports = Word();