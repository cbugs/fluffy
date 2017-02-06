Letter = function(game, x, y, alphabet, color) {
    if(alphabet === ''){
    chosenOne = 'letter_' +  color.toLowerCase();
    }else{
        console.log(color);
    chosenOne = 'letter_' + alphabet.toLowerCase() + '_' + color.toLowerCase();

    }

    Phaser.Sprite.call(this, game, x, y, chosenOne);
}

Letter.prototype = Object.create(Phaser.Sprite.prototype);
Letter.prototype.constructor = Letter;