var Menu = {

    preload : function() {
        // Load all the needed resources for the menu.
        game.load.image('menu', './assets/images/menu.png');
    },

    create: function () {

        // Add menu screen
        //background = game.add.sprite(0, 0, 'menu');

        //  Scale it to fit the width of the game 
        //background.scale.setTo(0.5, 0.4);

        background = this.add.button(0, 0, 'menu', this.startGame, this);
        background.scale.setTo(0.5, 0.4);

    },

    startGame: function () {

        // Change the state to the actual game.
        this.state.start('Word_Game');

    }

};