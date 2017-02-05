Engine = function(game, words, alphabets, colors) {
    this.game = game;
    this.words = words;
    this.alphabets = alphabets;
    this.colors = colors;
    this.answerGroup = game.add.group();
    this.letterGroup = game.add.group();
}


Engine.prototype.constructor = Engine;

Engine.prototype.initGame = function() {
    // Used to check at which position to put next letter 
    // from the letter group of the game
    this.answerIndex = 1;

    // Get random word from pre-defined list of words
    this.word = this.words.getRandomElement();

    // Set colors relative to each letters of the word
    word_array = this.word.split("");
    color = [];
    for(i=0;i<word_array.length;i++){
        color[word_array[i]] = this.colors.getRandomElement();
        // Create answer sprite with specific color for letter in the answer block
        answer = new Letter(this.game, 100*(i+1), 400, '', color[word_array[i]]);
        // Set scale of Sprite
        answer.scale.setTo(0.2,0.2);
        // Add sprite to answer group of the game
        this.answerGroup.add(this.game.add.existing(answer));
    }
 
    // Shuffle letter orders
    this.word_shuffled = this.word.shuffle();
    this.word_shuffled = this.word_shuffled.split("");
    for(i=0;i<this.word_shuffled.length;i++){
        // Create sprite foor each letters of the word
        letter = new Letter(this.game, 100*(i+1), 200, this.word_shuffled[i], color[this.word_shuffled[i]]);
        // Set scale of Sprite
        letter.scale.setTo(0.2,0.2);
        // Input Enable the sprites
        letter.inputEnabled = true;
        // Set on click event for Sprite 
        letter.events.onInputDown.add(listener, this);
        // Add Sprite to letter group of the game
        this.letterGroup.add(this.game.add.existing(letter));
    }
}

Engine.prototype.reInitGame = function() {
    // Remove everything from letter group and answer group
    this.letterGroup.destroy(true,true);
    this.answerGroup.destroy(true,true);
    this.initGame();
}


function listener (sprite, pointer) {
    // Check if Sprite at the bottom
    if(sprite.y!=400){
        // Put letter at the correct position in the answer group
        sprite.x = this.answerIndex*100;
        // Put letter at the bottom
        sprite.y = 400;
        //Increment to next position
        this.answerIndex++;
    } else {
        // Use previous x position of Sprite to determine 
        // next position of answerIndex
        x_old = sprite.x;
        // Place letter in the answer group back to original position
        sprite.x = (this.letterGroup.children.indexOf(sprite)+1)*100;
        sprite.y = 200;
        // Update position to next first index free in the answer group 
        if(x_old/100<this.answerIndex){
            this.answerIndex=x_old/100;
        }
    }
    this.checkWin();
}

// Check if player win 
Engine.prototype.checkWin = function() {
    //Check amongst letter Group Sprites
    lg = this.letterGroup.children;
    console.log(lg);
    for(i=0;i<lg.length;i++){
        if( (this.word_shuffled[i]!=this.word[(lg[i].x/100)-1] && lg[i].y==400) || lg[i].y==200 ) {
            return false;
        }
    }
    console.log("win");
    this.reInitGame();
    return true;
}
